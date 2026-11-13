# Operação Militar — Demonstração (React)

Projeto organizado em uma estrutura modular **React + Vite + Tailwind CSS**.

## Estrutura de Pastas

```text
projeto-react-operacao-v2/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── HudBackground.jsx
    │   ├── HeroIntro.jsx
    │   ├── LoginView.jsx
    │   └── ProfileView.jsx
    └── styles/
        └── tactical.css
```

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Login com Google

1. Crie um cliente OAuth do tipo **Aplicativo da Web** no Google Cloud Console.
2. Em **Origens JavaScript autorizadas**, adicione `http://localhost:5173` e os domínios de produção usados pelo projeto.
3. Crie um arquivo `.env.local` na raiz do projeto com o Client ID:
   ```env
   VITE_GOOGLE_CLIENT_ID=seu_client_id.apps.googleusercontent.com
   ```
   O arquivo `.env.example` contém o formato esperado. Reinicie o Vite depois de alterar variáveis de ambiente.

Após o login, o perfil exibe os dados recebidos do endpoint de informações do Google. Esta implementação mantém os dados apenas no estado do React; ela não cria uma sessão de servidor nem deve ser usada, sozinha, para proteger recursos privados.
