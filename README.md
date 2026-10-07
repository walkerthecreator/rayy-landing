# Rayy landing

React + Vite app containing two designs:

| Design | Route | Alias |
| --- | --- | --- |
| design-1 | `/landing-split` | `/`, `/design-1` |
| design-2 | `/new` | `/design-2` |

## Run

```sh
npm ci
npm run dev
```

## Host

```sh
npm run build
```

Serve `dist` as the website root. The build includes HTML entry points for each route, so direct visits and refreshes work on static hosts. Configure the sandbox build command as `npm run build` and the output directory as `dist`.
