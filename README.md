# React + Next.js Workshop - 14/09/2023 @ Mohole

![workshop poster](_images/hero.png)
<small>_image generated with Microsoft Designer_</small>

`[ITA]`
Durante questa giornata, esploreremo come utilizzare la potenza di ChatGPT, uno dei più avanzati modelli di generazione del linguaggio naturale, all'interno di un'applicazione web moderna. Utilizzeremo React insieme a Next.js, un framework di sviluppo React, per creare un'applicazione web altamente interattiva e coinvolgente.

`[EN]`
During this day, we will explore how to harness the power of ChatGPT, one of the most advanced natural language generation models, within a modern web application. We will be using React along with Next.js, a React development framework, to create a highly interactive and engaging web application.

## Requirements

- [Node.js](https://nodejs.org/) v16+
- [VS Code](https://code.visualstudio.com/)
- [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) (_browser extension_)
- [Vercel](https://vercel.com/) free account
- [OpenAI](hhttps://platform.openai.com/) free account

## What are we using

- [React v18](https://react.dev/) - reactive UI library
- [Next.js v13](https://nextjs.org/) - web framework for React
- [Typescript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [TailwindCSS](https://tailwindcss.com/) - CSS as utility classes
- [DaisyUI](https://daisyui.com/) - UI components built on top of TailwindCSS
- [OpenAI SDK](hhttps://www.npmjs.com/package/openai) - the official Node.js OpenAI client to interact with the ChatGPT service

## Table of Contents

- icebreaking
- intro + high level concepts
- setup the project locally
- working with environment variables
- breaking up the UI into components
- _-- lunch break --_
- reading & writing messages
- publish the project
- Q&A
- closing

## Publishing

This project can be deployed on any Node.js hosting, but to keep things simple & easy we will use the [Vercel free tier](https://vercel.com/pricing).

Since we are using Supabase, there is no need to take any action for the backend & database. However, **it is very important to not commit the Supabase anon key** in the repository but using `.env` files and the environment settings in Vercel.

## Getting started

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

Feel free to enhance and add features to this project since it's just a sample to give you a glimpse on how to combine these tools to create a simple product:

- design a better UI (_with or without Tailwind_)
- handling exceptions (_free quota reach, connection, etc..._)
- preserve chat history (_and add a DB_)
- use a different ML model

## License
Code released under the [MIT License](LICENSE).

All of the uncredited images have been generated with [Midjourney](https://www.midjourney.com/).
