# NestJS Tutorial
Follows: https://docs.nestjs.com/
## Introduction
* Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications.
* Supports TS, JS
* HTTP server framework (default Express, also Fastify): 
  * Provides high level of abstraction above these frameworks
  * Also exposes their APIs directly to the developer

### Installation
Start new project
```bash
npm i -g @nestjs/cli
nest new project-name
npm install
npm run start
```
Project will be started in http://localhost:3000/ and you will see following log in the browser:
```log
Hello World!
```

## Overview

### First steps
```bash
nest new hello-project
tree src 
src
├── app.controller.spec.ts # unit tests for the controller
├── app.controller.ts # basic controller with single route
├── app.module.ts # root module of the application
├── app.service.ts # basic service with single method
└── main.ts # app entry point, uses the core function NestFactory to create a Nest application instance

1 directory, 5 files
```

Hint: If any error happens in app start, app will exit with the code `1`, 
if you want to throw the error: `NestFactory.create(AppModule, { abortOnError: false })`

2 platforms supports out of the box in nest:
1. express: this package used as default
2. fastify: performance

Watch changes with starting server `npm run start:dev`

Linting and formatting
```bash
# Lint and autofix with eslint
npm run lint

# Format with prettier
npm run format
```
