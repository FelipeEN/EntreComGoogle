import React, { useState } from 'react';

export default function LoginView({
  email,
  onEmailChange,
  onLoginSuccess,
  submitButtonRef,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [showGoogleError, setShowGoogleError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoading) return;

    setShowGoogleError(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 650);
  };

  return (
    <div>
      <span
        className="badge uppercase font-bold"
        style={{
          color: 'rgb(215, 162, 84)',
          fontSize: '11px',
        }}
      >
        BOAS-VINDAS
      </span>

      <h2
        className="display mt-5 leading-tight"
        style={{
          color: 'rgb(238, 232, 213)',
          fontSize: '27px',
        }}
      >
        Crie seu perfil de soldado.
      </h2>

      <p
        className="mt-4 mb-8 leading-relaxed"
        style={{
          color: 'rgb(183, 185, 166)',
          fontWeight: 400,
          fontSize: '16px',
        }}
      >
        Registre seu codinome e monte seu perfil de soldado antes de entrar no
        campo de operação.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <label
          className="block mb-2 font-semibold"
          htmlFor="demo-email"
          style={{
            color: 'rgb(227, 220, 199)',
            fontSize: '16px',
          }}
        >
          Código de comunicação (opcional)
        </label>

        <input
          id="demo-email"
          className="field"
          type="email"
          autoComplete="email"
          placeholder="voce@exemplo.com"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          style={{
            fontWeight: 400,
            fontSize: '16px',
          }}
        />

        <p
          className="mt-2 mb-6"
          style={{
            color: 'rgb(167, 170, 150)',
            fontWeight: 400,
            fontSize: '13px',
          }}
        >
          Use um código de comunicação fictício para identificação no esquadrão.
        </p>

        <button
          ref={submitButtonRef}
          type="submit"
          disabled={isLoading}
          className="tactical-btn w-full px-5 py-4 font-bold"
          style={{
            background: 'rgb(189, 133, 64)',
            color: 'rgb(23, 28, 24)',
            fontSize: '16px',
          }}
        >
          Confirmar alistamento
        </button>

        <div className="relative text-center my-6">
          <span
            className="absolute left-0 right-0 top-1/2 border-t border-[#626954]"
            aria-hidden="true"
          />
          <span
            className="relative px-4 bg-[#252b24]"
            style={{
              color: 'rgb(167, 170, 150)',
              fontWeight: 400,
              fontSize: '14px',
            }}
          >
            ou
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowGoogleError(true)}
          className="tactical-btn w-full px-5 py-4 font-semibold border border-[#777d64]"
          style={{
            background: 'rgb(50, 57, 45)',
            color: 'rgb(227, 220, 199)',
            fontSize: '16px',
          }}
        >
          Entrar na operação demonstração
        </button>
      </form>

      {isLoading && (
        <p
          className="mt-5"
          role="status"
          style={{
            color: 'rgb(230, 182, 110)',
            fontWeight: 400,
            fontSize: '14px',
          }}
        >
          Abrindo perfil de demonstração...
        </p>
      )}

      {showGoogleError && (
        <p
          className="mt-5 p-3"
          role="status"
          style={{
            background: 'rgb(72, 56, 41)',
            color: 'rgb(244, 202, 145)',
            fontWeight: 400,
            fontSize: '14px',
          }}
        >
          O canal de entrada da operação não está disponível nesta demonstração.
        </p>
      )}

      <p
        className="mt-7 leading-relaxed"
        style={{
          color: 'rgb(167, 170, 150)',
          fontWeight: 400,
          fontSize: '13px',
        }}
      >
        Operação fictícia: nenhum dado real é solicitado ou verificado.
      </p>
    </div>
  );
}
