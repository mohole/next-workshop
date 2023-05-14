# React + Next.js Workshop - 05/06/2023 @ Mohole

![workshop poster](_images/hero.png)
<small>_image generated with Microsoft Designer_</small>

`[ITA]`
Continuando dal [precedente workshop](https://github.com/mohole/vue-workshop) rivedremo molti dei concetti già affrontati traslati su React e Next.js e ne introdurremo alcuni nuovi creando una app catalogo di _Moholemons_ che ci permetterà di sfogliare, creare e modificare le scheda di ogni (inesistente) creatura .

## Requirements

- [Node.js](https://nodejs.org/) v16+
- [VS Code](https://code.visualstudio.com/)
- [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) (_browser extension_)
- [Vercel](https://vercel.com/) free account

## What we are using

- [React v18](https://react.dev/) - reactive UI library
- [Next.js v13](https://nextjs.org/) - web framework for React
- [TailwindCSS](https://tailwindcss.com/) - CSS as utility classes
- [DaisyUI](https://daisyui.com/) - UI components built on top of TailwindCSS
- [date-fns](https://date-fns.org/) - JS utility for date formatting

## API

For this project we are using a custom mock API available at [https://mohole-nextws-api.azurewebsites.net/](https://mohole-nextws-api.azurewebsites.net/). It's a very simple project built with [json-server](https://github.com/typicode/json-server) and is hosted on [Azure](https://azure.microsoft.com/) free tier.

More explanation on the data exposed in the [docs](/fundamentals/2.project.md).

## Table of Contents

- icebreaking
- intro + high level concepts
- setup the project
- creating the first page
- preparing more components
- _-- lunch break --_
- adding the detail page
- pagination
- publish the project
- [*optional*] live example integrating WordPress
- Q&A
- closing

## Publishing

This project can be deployed on any Node.js hosting, but to keep things simple & easy we will use the [Vercel free tier](https://vercel.com/pricing).

## Repository structure

| Folder            | Description                                   |
| ----------------- | --------------------------------------------- |
| `(root)`          | main config files                             |
| `/fundamentals`   | theory introduction files                     |
| `/public`         | static files served with the project (images) |
| `/app`            | the main source folder                        |
| `/app/components` | components for UI                             |
| `/app/add`        | the "add new" page                            |
| `/app/edit/[id]`  | the "edit" page                               |
| `/app/utils`      | shared JS utilities                           |

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

Feel free to enhance and add features to this project since it's just a sample to give you a glimpse on the basics functionalities of Nuxt and Vue:

- design a better UI (_with or without Tailwind_)
- integrate other APIs from the service
- add filters for easily find content
- enhance the pagination component

or ultimately...

- re-use the code of this project with a **completely different data source** ([https://github.com/public-api-lists/public-api-lists](https://github.com/public-api-lists/public-api-lists))

## License

Released under the [MIT License](LICENSE).
