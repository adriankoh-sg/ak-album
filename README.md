# Welcome to AK Album Showcase

This is a React App create to showcase techniques of using API to create own Album site.

## Project Setup

Clone this repo to your computer.

```bash
git clone https://github.com/adriankoh-sg/ak-album.git
```

Install dependencies.

```bash
npm install
```

## Runs App in the development mode

```bash
npm start
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.

## Builds App for production

```bash
npm run build
```

Builds the app for production to the `build` folder.
It will output 2 files:

- `bundle.main.js`
- `index.html`

## Project Structure

Descibe the folder structure used for this project.

- `src` main folder that contains all the source code for this project
- `src/assets` contain all the assets require for the App
- `src/components` common components use by all pages in the App
- `src/config` App configurations
- `src/pages` contain all the pages for the App
- `src/service` contain all the required API services needed for the App
- `src/store` contain all the redux state
- `src/utils` contain utilities functions for the App

## Project Environment Setup

This project uses the API from https://last.fm in order to showcase the album.
You need to go the <b>last.fm</b> to register an account and generate an API key.

The project uses .env file to store the API keys. After you got your keys, create a `.env` in the root folder and input as follows:

```bash
API_KEY=xxxyourapikeyherexxx
S_KEY=xxxyoursecretkeyherexxx
```
