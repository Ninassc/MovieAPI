# 🎬 MovieAPI

API REST desenvolvida em Node.js para autenticação de usuários e gerenciamento de filmes, utilizando Prisma ORM, JWT e cookies HTTP-only para segurança.

Esse projeto foi pensado com uma estrutura limpa, escalável e organizada, seguindo boas práticas de backend moderno.

---

## ✨ Tecnologias utilizadas

- Node.js  
- Express  
- Prisma ORM  
- PostgreSQL (Neon)
- JWT (JSON Web Token)  
- Bcrypt.js  
- Dotenv  

---

## 📁 Estrutura do projeto

```bash
back/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── authController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── movieRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   └── server.js
├── .env
├── package.json
└── .gitignore
