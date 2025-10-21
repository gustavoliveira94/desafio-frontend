# Frontend Challenge

The goal is to create an application using React, TypeScript, and Vite, focusing on best development practices and testing.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Vite**: Fast and modern build tool for frontend projects.
- **Vitest**: Fast and lightweight testing framework for Vite projects.
- **React Testing Library**: Library for testing React components.

## Project Structure

The project structure follows the recommended pattern for React applications with TypeScript:

```
├── public/                  # Public static files
├── src/                     # Application source code
│   ├── configs/             # Configurations
│   ├── core/                # Logics
│   ├── presentation/        # UI presentation
│   ├── router/              # Routes
│   ├── index.css            # Css global
│   └── main.tsx             # Application entry point
├── .gitignore               # Files to be ignored by Git
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML file
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── vitest.config.ts         # Vitest configuration
```

## Available Scripts

- `dev`: Starts the development server with hot module replacement (HMR).
- `build`: Creates an optimized production build.
- `preview`: Preview the production build locally.
- `lint`: Runs ESLint to check code style and quality issues.
- `test`: Runs tests using Vitest.

## Environment Variables

Create a `.env` file in the project root and add the following variables:

```env
VITE_API_URL=https://www.googleapis.com/youtube/v3
VITE_YOUTUBE_API_KEY=YOUR_API_KEY
```

## How to Run the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/gustavoliveira94/desafio-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd desafio-frontend
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Tests

Tests are located in the `src/__tests__` folder. To run them, use the following command:

```bash
yarn test
```

To run tests in interactive mode:

```bash
yarn test --watch
```