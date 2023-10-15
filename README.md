## Civet POC

This is an example project designed for study purposes that utilizes React, Vite, and Civet. The project is divided into two parts: the backend and the frontend.

### Backend

To set up and run the backend, follow the steps below:

1. Install the dependencies:
```bash
$ pnpm i
```

2. Run database migrations with Prisma:
```bash
$ pnpx prisma migrate dev
```

3. Generate Prisma models:
```bash
$ pnpx prisma generate
```

4. Start the server:
```bash
$ pnpm run dev
```

### Frontend

To set up and run the frontend, follow the steps below:

1. Install the dependencies using
```bash
$ pnpm i
```

2. Start the development server:
```bash
$ pnpm run dev
```

Make sure the backend is up and running before starting the frontend, as the frontend may depend on data provided by the backend.

With these steps, you should be ready to start working on the Civet POC project, with both the frontend and backend running correctly.