import React from 'react';

export default function ProfileView({
  user,
  onLogout,
  logoutButtonRef,
}) {
  const displayName = user?.name || 'Usuário';
  const displayEmail = user?.email || 'E-mail não disponível';
  const initials = displayName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <div>
      <span
        className="badge uppercase font-bold"
        style={{
          color: 'rgb(215, 162, 84)',
          fontSize: '11px',
        }}
      >
        PERFIL DE SOLDADO
      </span>

      <div className="flex items-center gap-4 mt-7">
        {user?.picture ? (
          <img
            className="h-16 w-16 shrink-0 border border-[#a78a54] object-cover"
            src={user.picture}
            alt={`Foto de perfil de ${displayName}`}
          />
        ) : (
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center border border-[#a78a54]"
            aria-hidden="true"
            style={{ background: 'rgb(66, 73, 52)' }}
          >
            <span
              className="display"
              style={{
                color: 'rgb(230, 182, 110)',
                fontSize: '25px',
              }}
            >
              {initials}
            </span>
          </div>
        )}

        <div className="min-w-0">
          <h2
            className="display leading-tight"
            style={{
              color: 'rgb(238, 232, 213)',
              fontSize: '24px',
            }}
          >
            {displayName}
          </h2>
          <p
            className="break-all mt-1"
            style={{
              color: 'rgb(183, 185, 166)',
              fontWeight: 400,
              fontSize: '14px',
            }}
          >
            {displayEmail}
          </p>
        </div>
      </div>

      <div
        className="border border-[#656c56] p-5 mt-8"
        style={{ background: 'rgb(48, 56, 44)' }}
      >
        <h3
          className="font-bold"
          style={{
            color: 'rgb(238, 232, 213)',
            fontSize: '19px',
          }}
        >
          Dados do soldado
        </h3>

        <p
          className="mt-2 leading-relaxed"
          style={{
            color: 'rgb(183, 185, 166)',
            fontWeight: 400,
            fontSize: '14px',
          }}
        >
          {user?.provider === 'google'
            ? 'Sua conta Google foi conectada com sucesso.'
            : 'Cadastro fictício confirmado. Seu perfil está pronto para a próxima operação.'}
        </p>

        <div className="border-t border-[#656c56] mt-5 pt-5 flex justify-between gap-4">
          <span
            style={{
              color: 'rgb(183, 185, 166)',
              fontWeight: 400,
              fontSize: '14px',
            }}
          >
            {user?.provider === 'google' ? 'Conta conectada' : 'Status de alistamento'}
          </span>
          <span
            className="font-bold text-right"
            style={{
              color: 'rgb(233, 211, 165)',
              fontSize: '14px',
            }}
          >
            {user?.provider === 'google' ? 'Google' : 'Recruta pronto'}
          </span>
        </div>
      </div>

      <button
        ref={logoutButtonRef}
        type="button"
        onClick={onLogout}
        className="tactical-btn w-full px-5 py-4 mt-8 font-bold"
        style={{
          background: 'rgb(189, 133, 64)',
          color: 'rgb(23, 28, 24)',
          fontSize: '16px',
        }}
      >
        Sair
      </button>
    </div>
  );
}
