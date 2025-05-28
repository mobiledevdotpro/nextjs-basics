## Simple Next.js TypeScript Demo

This project has been converted to TypeScript. Follow these steps to run the project:
Source code for the [Next.js in 100 Seconds](https://fireship.io/lessons/next-js-in-100-seconds/) video.

<!-- Enroll in the full [Next Firebase Course](https://fireship.io/courses/react-next-firebase) -->

```
git clone <this-repo>
npm install
npm run dev
```

## Features

This project is a basic Next.js (React) application managed with npm. Here’s an overview of its structure and important files:

- `package.json`: Defines project metadata, dependencies (`next`, `react`, `react-dom`), and npm scripts (`dev`, `build`, `start`).
- `package-lock.json`: Locks the exact versions of installed npm packages for reproducible builds.
- `LICENSE`: Contains the project’s license terms (Apache License 2.0).
- `.gitignore` (if present): Specifies files and folders to be ignored by Git.
- `.git` directory (if present): Stores Git version control data.
- `.github` directory (if present): Contains GitHub-specific configuration, like workflows.

Typical Next.js projects also include:
- `pages/`: Contains React components mapped to routes.
- `public/`: Static assets (images, etc.).
- `node_modules/`: Installed npm packages (auto-generated).

The most important files for development are `package.json` (for dependencies and scripts) and the `pages/` directory (for app logic).
