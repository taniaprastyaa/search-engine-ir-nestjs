<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

This project is a simple search engine built using the [Nest](https://github.com/nestjs/nest) framework with TypeScript. It processes text queries to search through blogs using text preprocessing techniques (tokenization, stemming, etc.) and tf-idf for finding relevant blogs.

## Features

- Text preprocessing (tokenization, stop-word removal, stemming).
- tf-idf for keyword-based searching.
- REST API for querying blog data.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14.x or higher)
- [Yarn](https://yarnpkg.com/) (for package management)
- Basic understanding of REST APIs and TypeScript.

## Installation

1. Clone the repository:

```bash
$ git clone <repository-url>
```

2. Navigate to the project directory:

```bash
$ cd <project-directory>
```

3. Install the required dependencies:

```bash
$ yarn install
```

## Running the app

To run the application in different modes:

```bash
# development mode
$ yarn run start

# watch mode (auto-restarts on file changes)
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Testing

You can run various tests on the application:

```bash
# run unit tests
$ yarn run test

# run e2e tests
$ yarn run test:e2e

# run test coverage
$ yarn run test:cov
```

## API Endpoints

- **GET** `/search`: Allows you to search blogs by keyword.
  - Request body (JSON):
    ```json
    {
      "search": "your search keyword"
    }
    ```
  - Response (JSON):
    ```json
    {
      "blogs": [ ... ]  // List of blogs relevant to the search query
    }
    ```

## Project Structure

- **src/helpers/response.formatter.ts**: Formats the response from the controller methods.
- **src/search/search.controller.ts**: Handles incoming search queries from the API.
- **src/search/search.service.ts**: Implements the search logic using tf-idf and text preprocessing.
- **src/search/dto/search-blog.dto.ts**: Validates the search query input.
- **app.module.ts**: Main module that integrates all components.
- **main.ts**: Entry point to initialize the NestJS application.

## License

Nest is [MIT licensed](LICENSE).

---

Ini memberikan gambaran yang jelas bagi pengguna tentang cara menginstal dan menjalankan aplikasi, serta menambahkan informasi berguna tentang cara menggunakan API.