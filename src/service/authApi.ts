// src/services/authApi.ts
import axios from 'axios';
import { useAuthStore } from '../store/authStore';
import { notifyGlobalError } from '../utils/errorHandler';
import { API_BASE_URL } from './apiConfig';

export const authApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Interceptor: adjunta el token JWT a cada petición
authApiClient.interceptors.request.use((config) => {
  const authData = localStorage.getItem('auth-storage');

  if (authData) {
    try {
      const parsed = JSON.parse(authData);
      const token = parsed?.state?.user?.accessToken;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch {
      // Si el JSON es inválido, la petición sigue sin token
    }
  }

  return config;
});

// Interceptor de respuesta
authApiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    notifyGlobalError(error);

    const originalRequest = error.config;

    const isAuthEndpoint =
      originalRequest?.url?.includes('/auth/login') ||
      originalRequest?.url?.includes('/auth/refresh');

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isAuthEndpoint
    ) {
      originalRequest._retry = true;

      const newAccessToken =
        await useAuthStore.getState().refreshSession();

      if (newAccessToken) {
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return authApiClient(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);