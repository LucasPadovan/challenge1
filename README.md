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

# TODO

- Remove confirmation
- Cancel state for a schedule
- Tests for the current flows

- Order schedules by date
  - Test for ordering schedules
- Adding a couple more days to the calendar view to have a better look
- Adding sections for Years and tabs for different months
- Improve schedule overlapping (right now can be accessed easily by keyboard)
- Prevent start time from being higher than end time
