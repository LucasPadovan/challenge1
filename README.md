# About

Author: Lucas Padovan

# Details

- React + Next + Scss
  - Css classes are using camelCase as a naming convention derived from the use of css/scss modules with next.
  - When using classes it usually imports the styles as an object and then are accessed like object keys (which in javascript are conventionally using camelCase)
- Prettier and eslint have been configured for the project
- It will be uploaded to Vercel using a free account
- SSR is not enabled to keep it simple
- No DB was installed but some traces of the mongo connector are available
- Persistent schedules are using the local storage with a user ID to simulate it
- Frontend context handles the things that appear on screen (no loadings have been put in place though)
- Notifications context handles the notifications that will appear on screen
- Schedules context handles the live storage for the schedules and also handles saving them to local storage (as well as recovering them on start!)
- You can run test by typing **`npm run test`** for a couple of unit testin and **`npm run cypress:run`** for a couple of integration testing. (It should work fine but also I`m using a weird Windows + WSL to run cypress so I`ll leave a video with them running inside the `docs` folder)
- React Testing Library was ommited for the sake of simplicity and to get things done on time, unit and integration cover a good chunk of the app `heavy` parts

# How to run tests:

## Unit testing:

```sh
npm run test
```

## Integration testing:

```sh
npm run cypress:open # Will open cypress window
npm run cypress:run # Will run cypress headless
```

# Planned Improvements

See [Improvements](./docs/IMPROVEMENTS.md)

# TODO

- Adding a couple more days to the calendar view to have a better look
- Adding sections for Years and tabs for different months
- Improve schedule overlapping (right now can be accessed easily by keyboard)
- Crop idle hours/center to activities
