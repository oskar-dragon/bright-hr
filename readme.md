# BrightHR - Document Manager

## Quick links
[Incomplete Functionality and Comments](./docs/notes.md)

## Overview
This is a simple application that displays a list of documents just like an explorer in your code editor. 

### Features
- Displays a file type, name and the date added
- Emojis indicating file type and folders
- Keyboard support (a11y, yay!)
- You can have unlimited number of nested folders, and you can open them all!
- Recursive search that allows you to search for files. Even when they are deeply nested, we will find them

## Technologies
It uses the following technologies

- [React](https://react.dev) - Frontend Framework
- [Vite](https://vite.dev/) - A build tool for frontend frameworks (and not only!)
- [tailwindCSS](https://tailwindcss.com/) — for CSS
- [Vitest](https://vitest.dev) - A modern testing framework
- [React Testing Library](https://testing-library.com/) - A testing framework for React components


## Local Development

### Clone this repo

You can clone this repo by clicking the code button in the top right corner of this respository.

### Clone on your local machine
```bash
git clone https://github.com/oskar-dragon/brightHR-test.git
```

### Navigate to project directory
```bash
cd brightHR-test
```

### Install dependencies
```bash
npm i install
```

## Useful commands

- `npm run build` - Build the application. Useful if you want to deploy your app
- `npm run dev` - Run application in dev mode
- `npm run lint` - Lint all packages
- `npm run format` - Formats code using Prettier
- `npm run test` - runs `vitest` and `React Testing Library` tests
- `npm run test:coverage` - Runs `vitest` and provides coverage report for utilities and helpers
- `npm run typescript:check` - Runs typescript to do type checking

