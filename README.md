# **DevFlow -- Developer Task & Project Manager API**

DevFlow is a backend API designed to help developers organize their work
through structured **projects** and **tasks**, powered by secure
authentication, role-based access, and a clean architecture.\
Built with **Node.js**, **Express**, **PostgreSQL**, and **Docker**,
DevFlow is a practical, production-style backend system created to grow
backend and DevOps skills.

------------------------------------------------------------------------

## 🚀 **Features**

### 🔐 Authentication & Security

-   JWT Authentication (Access + Refresh tokens)
-   Secure cookie-based refresh tokens
-   Role-based authorization (User / Admin)
-   Rate limiting
-   Password hashing (bcrypt)
-   Input validation with Zod
-   CORS configuration
-   Fully environment-based configuration

### 👤 User Management

-   Register\
-   Login\
-   Refresh token\
-   Logout\
-   Profile retrieval\
-   Update profile

### 📁 Project Management

-   Create project\
-   Get all projects\
-   Get project by ID\
-   Update project\
-   Delete project

### 📝 Task Management

-   Create task\
-   Get tasks (by project)\
-   Update task\
-   Mark task as done\
-   Delete task

### 🐳 DevOps / Infrastructure

-   Fully Dockerized (API + PostgreSQL)
-   Production-ready Dockerfile\
-   docker-compose integration\
-   Organized folder structure
-   Environment variable support\
-   Ready for CI/CD pipelines

------------------------------------------------------------------------

## 🛠️ **Tech Stack**

-   **Node.js** + **Express**
-   **PostgreSQL**
-   **Prisma**
-   **Docker** / Docker Compose
-   **Zod** (validation)
-   **JWT**
-   **bcrypt**
-   **Nodemon** (dev)

------------------------------------------------------------------------

## 📦 **Project Structure**

    DevFlow/
    │── src/
    │   ├── config/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   ├── services/
    │   └── utils/
    │
    │── prisma/
    │── docker-compose.yml
    │── Dockerfile
    │── .env.example
    │── package.json
    │── README.md

------------------------------------------------------------------------

## ⚙️ **Setup Instructions**

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/YanisRekane/DevFlow.git
cd DevFlow
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Create environment file

Copy `.env.example` to `.env` and fill your variables.

### 4️⃣ Start PostgreSQL + API (Docker)

``` bash
docker-compose up --build
```

### 5️⃣ Run migrations

``` bash
npx prisma migrate deploy
```

### 6️⃣ Start development server

``` bash
npm run dev
```

------------------------------------------------------------------------

## 📚 **API Endpoints Overview**

### Auth

    POST /api/auth/register
    POST /api/auth/login
    GET  /api/auth/refresh
    POST /api/auth/logout

### Users

    GET  /api/users/me
    PATCH /api/users/me

### Projects

    POST   /api/projects
    GET    /api/projects
    GET    /api/projects/:id
    PATCH  /api/projects/:id
    DELETE /api/projects/:id

### Tasks

    POST   /api/tasks
    GET    /api/tasks/project/:projectId
    PATCH  /api/tasks/:id
    DELETE /api/tasks/:id

------------------------------------------------------------------------

## 🧪 **Testing**

You can add Jest/Supertest or Postman collections as needed.

------------------------------------------------------------------------

## 🧭 **Roadmap**

-   CI/CD pipeline\
-   Swagger / API documentation\
-   Unit & integration tests\
-   Deployment on Render / AWS / Railway

------------------------------------------------------------------------

## 🤝 **Contributing**

Feel free to submit issues or open PRs.

------------------------------------------------------------------------

## 📄 License

MIT License.
