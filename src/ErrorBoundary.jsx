import { useState } from 'react';

export default function ErrorBoundary({ children, fallback }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (typeof fallback === 'function') return fallback();
    return (
      <div style={{ padding: 40, textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2 style={{ color: '#c0392b' }}>Oops! Alguma coisa deu errado 😕</h2>
        <p>O EcoEra encontrou um erro ao renderizar a página.</p>
        <button
          onClick={() => setHasError(false)}
          style={{ padding: '10px 20px', background: '#2d6a4f', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return children;
}
