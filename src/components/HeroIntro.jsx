import React from 'react';

export default function HeroIntro() {
  return (
    <header className="intro">
      <span
        className="badge inline-block px-4 py-2 font-bold uppercase"
        style={{
          background: 'rgb(67, 75, 52)',
          color: 'rgb(239, 208, 153)',
          fontSize: '11px',
        }}
      >
        ESPAÇO DE DEMONSTRAÇÃO
      </span>

      <h1
        className="display mt-8 leading-tight max-w-xl"
        style={{
          color: 'rgb(238, 232, 213)',
          fontSize: '42px',
        }}
      >
        Aliste-se para a operação.
      </h1>

      <p
        className="mt-6 leading-relaxed max-w-md"
        style={{
          color: 'rgb(184, 187, 170)',
          fontWeight: 400,
          fontSize: '18px',
        }}
      >
        Bem-vindo ao cadastro, recruta. Crie seu perfil de soldado e prepare-se
        para entrar em uma operação militar fictícia.
      </p>

      <div className="mt-12 max-w-[210px] tactical-line" aria-hidden="true" />
      <div className="mt-3 flex gap-2" aria-hidden="true">
        <span className="h-1 w-20 bg-[#d7a254]" />
        <span className="h-1 w-8 bg-[#737d56]" />
        <span className="h-1 w-3 bg-[#737d56]" />
      </div>
    </header>
  );
}
