# Planned Improvements

As the exercise was pointed to solve a particular use case (Schedules/Activities CRUD) with a small visual representation, the proposed solution was aimed towards that.

I took the time to create as much components of my own as possible, leveraging the calendar, the form handler, form validations and the user id randomizer to existent libraries. **The goal** was to show the different ways I create components and also to show the cleanliness I am able to achieve even when creating multiple things in a short period of time.

Said so, some things where cut on the process as it happens on our everydays. Some of them are:

- Creation of more utilities functions.
- Improved unit testing of utilities functions.
- Unit testing of components. Ideally, using React Testing Library.
- Completing the mongo connector to have a proper DB connected.
- Modifying the SchedulesContext to keep it small, move the CRUD actions to an schedules.ts api and action files.
  - The api file will handle the connection to mongo, modifying anything needed between the data from the form and the data got from the query (like converting snake case back and forth)
  - The action file will handle the different triggers that needs to happen when attempting and finalizing the query (like triggering the loading action on the frontend context).

# Thins I would like to keep improving for myself

- Performance improvement strategies.
- I know stuff about UI/UX (enough for a dev) but I struggled a little when creating a full style for this app.
- Webpack, Parcel or other tools like that.
- Express, Next, Meteor, Ember and other javascript fameworks.
- Deploy processes to get apps from local to production envs.
- Microfrontends seems to be on the uprise and it would be good to know how to work around them.
- More testing strategies, so far I have used the `coverage` approach but I know there are better and different ways to understand testing in applications.
- Graphql is something I could learn more of, besides small queries I have not worked a lot with it.
- CSS and it's newer implementations like CSS modules, CSS in JS, Tailwind and more.
