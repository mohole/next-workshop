# React + Next.js Workshop - 23/01/2024 @ Mohole

![workshop poster](docs/img/cover.webp)
<small>_image generated with Midjourney v6_</small>

## Requirements

- [Node.js](https://nodejs.org/) v18+
- [VS Code](https://code.visualstudio.com/)
- [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) (_browser extension_)
- [*OPTIONAL*] [Vercel](https://vercel.com/) free account

## What we are using

- [React v18](https://react.dev/) - reactive UI library
- [Next.js v14](https://nextjs.org/) - web framework for React
- [modern-normalize](https://github.com/sindresorhus/modern-normalize) - normalize browser's default styles
- [tailwindcss-preflight](https://github.com/grievouz/tailwindcss-preflight) - apply some basic global rules

## API

The API consumed by the application is [https://rickandmortyapi.com/](https://rickandmortyapi.com/) , which is a public and free API useful for learning and practice, based on the popular animated series.

## Table of Contents

- icebreaking
- intro + high level concepts
- setup the project
- creating the first page
- _-- lunch break --_
- preparing more components
- pagination
- publish the project
- [*optional*] live example integrating WordPress
- Q&A
- closing

## Publishing

This project can be deployed on any Node.js hosting, but to keep things simple & easy we will use the [Vercel free tier](https://vercel.com/pricing).

## Local development

Clone the repo

```bash
$ git clone https://github.com/mohole/next-workshop
```

change to project folder

```bash
$ cd next-workshop
```

install the dependencies

```bash
$ npm ci
```

start the local development server

```bash
$ npm run dev
```

you can now check your application at `http://localhost:3000`.

## Where to go from here

Feel free to enhance and add features to this project since it's just a sample to give you a glimpse on the basics functionalities of Nuxt and Vue:

- design a better UI
- integrate other APIs from the service
- add filters for easily find content
- enhance the pagination component

or ultimately...

- re-use the code of this project with a **completely different data source** ([https://github.com/public-api-lists/public-api-lists](https://github.com/public-api-lists/public-api-lists))

## License

Released under the [MIT License](LICENSE).
