# 🎬 MovieAPI

API REST desenvolvida em Node.js para autenticação de usuários e gerenciamento de filmes. O backend utiliza Prisma ORM, JWT e cookies HTTP-only para segurança. O front (React + Vite) consome a API.

Projeto pensado com estrutura limpa, escalável e organizada, seguindo boas práticas de backend moderno.

---

## ✨ Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL (Neon)
- JWT (JSON Web Token)
- Bcrypt.js
- Dotenv
- React + Vite

---

## ✅ Requisitos

- Node.js 18+
- NPM
- Banco PostgreSQL (Neon ou local)

---

## ⚙️ Configuração

Crie um arquivo `.env` em `back/`:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
JWT_SECRET="sua_chave_segura"
JWT_EXPIRES_IN="7d"
NODE_ENV="development"
```

---

## 🚀 Como rodar

Backend:

```bash
cd back
npm install
npx prisma generate
npm run dev
```

Frontend:

```bash
cd front
npm install
npm run dev
```

Seed de filmes (opcional):

```bash
cd back
npm run seed:movies
```

---

## 📁 Estrutura do projeto

```bash
back/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.js
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── watchlistController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── movieRoutes.js
│   │   └── watchlistRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   └── server.js
├── .env
├── package.json
└── .gitignore

front/
├── src/
│   ├── pages/
│   │   ├── login/
│   │   │   └── Login.jsx
│   │   └── register/
│   │       ├── Register.jsx
│   │       └── Register.css
│   ├── global/
│   │   └── url.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
