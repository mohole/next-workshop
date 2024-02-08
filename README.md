# React + Next.js Workshop - 12/02/2024 @ Mohole

![workshop poster](docs/img/cover.webp)
<small>_image generated with Midjourney v6_</small>

## Requirements

- [Node.js](https://nodejs.org/) v18+
- [VS Code](https://code.visualstudio.com/)
- [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) (_browser extension_)
- [Vercel](https://vercel.com/) free account

## What we are using

- [React v18](https://react.dev/) - reactive UI library
- [Next.js v14](https://nextjs.org/) - web framework for React
- [modern-normalize](https://github.com/sindresorhus/modern-normalize) - normalize browser's default styles
- [tailwindcss-preflight](https://github.com/grievouz/tailwindcss-preflight) - apply some basic global rules
- [Vercel](https://vercel.com/) - application hosting and PostgreSQL database

<!-- ## Table of Contents

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
- closing -->

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

You can enhance the application in many ways:

- design a complete different UI
- add separated lists/folders of tasks
- add task creation date
- add task deadline date
- handle API errors
- add tags or color label to tasks
- search/sort tasks
- use a different persistance solution (_Neon, MongoDB Atlas, Supabase, Appwrite, etc.._)
- add authentication(_Supabase, Appwrite, Firebase_)

or more in general:

- use a pre-built UI library (_DaisyUI, Ant, etc..._)
- use a different styling solution (_CSS Modules, Tailwind, etc.._)
- adapt the concept and patterns to a different use case (_blog, catalog, contacts management, etc..._)

## License

Released under the [MIT License](LICENSE).
