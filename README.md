<h1 align="center">
  <img alt="Logo" src="./" width="200px">
</h1>

<h3 align="center">
  API for GoBarber
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/ruandsx/gobarber-backend?color=%23FF9000">

  <a href="https://www.linkedin.com/in/ruan-xavier/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-ruan%20xavier-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ruandsx/gobarber-backend?color=%23FF9000">

  <a href="https://github.com/ruandsx/gobarber-backend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ruandsx/gobarber-backend?color=%23FF9000">
  </a>

  <img alt="Digital Ocean Version" src="https://img.shields.io/badge/digitalocean-api--v2-green.svg?color=%23FF9000">

  <img alt="GitHub" src="https://img.shields.io/github/license/ruandsx/gobarber-backend?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 💇🏻‍♂✂ About the project

This api provides everything needed to organize appointments between the barbers and customers.

Customers can choose the best time available to them.

Providers can see all their appointments, manage the times, also see if one client canceled the schedule.

To see the **web client**, click here: [GoBarber Web](https://github.com/ruandsx/gobarber-web)<br />
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/ruandsx/gobarber-app)

## 💻🛠 Technologies


Technologies that I used:
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [MongoDB](https://mongodb.com)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻🖥 Getting started


### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- Instances of [PostgreSQL](https://www.postgresql.org/), [MongoDB](https://mongodb.com/) and [Redis](https:/redis.io/)

```bash
$ git clone https://github.com/ruandsx/gobarber-backend.git && cd gobarber-backend
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn
# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env
# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres
# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo
# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine
# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json
# Once the services are running, run the migrations
$ yarn typeorm migration:run
# To finish, run the api service
$ yarn dev:server
# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork ruandsx/gobarber-backend
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gobarber-backend
# Create a branch with your feature
$ git checkout -b my-feature
# Make the commit with your changes
$ git commit -m 'feat: My new awesome feature'
# Send the code to your remote branch
$ git push origin my-feature
```

## 📝 License

This project is licensed under the MIT License

---

Made with 💛 by 👨‍💻[Ruan Xavier](https://www.linkedin.com/in/ruan-xavier/)
