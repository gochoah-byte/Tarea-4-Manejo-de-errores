import { Link } from 'react-router-dom';
import { usePageNotFound } from '../hooks/usePageNotFound';
import './NotFoundPage.css';

function NotFoundPage() {
  usePageNotFound();

  return (
    <main className="not-found">
      <div className="not-found__moon" aria-hidden="true" />
      <div className="not-found__bat not-found__bat--one" aria-hidden="true">🦇</div>
      <div className="not-found__bat not-found__bat--two" aria-hidden="true">🦇</div>

      <section className="not-found__card" aria-labelledby="not-found-title">
        <div className="not-found__art" aria-hidden="true">
          <svg viewBox="0 0 240 220" role="img">
            <g className="not-found__bones">
              <path d="M62 151 178 192M178 151 62 192" />
              <circle cx="56" cy="147" r="12" />
              <circle cx="184" cy="147" r="12" />
              <circle cx="56" cy="196" r="12" />
              <circle cx="184" cy="196" r="12" />
            </g>
            <path
              className="not-found__bandana"
              d="M41 72c18-37 54-54 79-54s61 17 79 54c-27-12-52-18-79-18s-52 6-79 18Z"
            />
            <path
              className="not-found__skull"
              d="M47 99c0-43 33-70 73-70s73 27 73 70c0 31-14 48-29 60v20c0 8-6 14-14 14h-60c-8 0-14-6-14-14v-20c-15-12-29-29-29-60Z"
            />
            <path
              className="not-found__eye"
              d="M69 105c4-17 14-25 27-23 12 2 17 13 15 26-2 12-11 19-24 18-13-1-21-8-18-21Zm67 3c-2-13 3-24 15-26 13-2 23 6 27 23 3 13-5 20-18 21-13 1-22-6-24-18Z"
            />
            <path className="not-found__nose" d="m113 132 7-12 7 12-7 9z" />
            <path className="not-found__teeth" d="M90 151h60v21H90z" />
            <path className="not-found__tooth-line" d="M105 151v21m15-21v21m15-21v21" />
            <path className="not-found__patch" d="m178 48 30-17-7 36-18-8" />
            <circle className="not-found__patch-dot" cx="189" cy="51" r="3" />
          </svg>
        </div>

        <p className="not-found__eyebrow">☠️ &nbsp; Alerta en cubierta &nbsp; ☠️</p>
        <p className="not-found__code">ERROR 404</p>
        <h1 className="not-found__title" id="not-found-title">
          ¡Un fantasma se llevó esta página!
        </h1>
        <p className="not-found__message">
          La buscamos por todo el barco... pero solo encontramos un esqueleto
          y una nómina atrasada. Esta dirección no existe.
        </p>

        <Link to="/dashboard" className="not-found__button">
          <span aria-hidden="true">⚓</span>
          ¡Sácame de aquí!
        </Link>
        <p className="not-found__footnote">Volver al dashboard (donde al menos los sustos tienen solución).</p>
      </section>
    </main>
  );
}

export default NotFoundPage;
