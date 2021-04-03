# AmericasCup

This project is not completed,

Progress can be viewed at [Americas-Cup](https://johnj974.github.io/americas-cup)

The Americas Cup site is a site which shows the boats which are to be used in the 36th running of this event,
It was created to be a light introduction to the world of Americas Cup yacht racing,

## Technologies Used

This project was generated with:

- [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.
- [Bootstrap](https://getbootstrap.com/)
- [Typescript](https://www.typescriptlang.org/)
- HTML
- CSS
- [Weather api](https://openweathermap.org/api)
- [Firebase Database](https://firebase.google.com/)
- [Covid api](https://github.com/disease-sh/API)
- [Github](https://github.com/)

## User Experience

Users of the site get a view
of the boats on the home page which features pictures of the differant boats in and out of the water. A user can then
use the navigation to go to a teams page which shows the four boats, They can then choose any of the boats and they
will then navigate to a page which shows information about that particular boat such as its country of origin, team
sponsors and more relevant information, A user can go directly to each boat without having to navigate through the teams
page by choosing from the teams list in the footer.

There is a news section which has snippets of news relevant to the Americas Cup, On this page is also a covid tracker which
is a up to date representation of the cases currently in New Zealand, Also on this page is the current weather for the area
in which the races are being held, There is also a competion counter which can only be viewed if a user is logged in.

The Competition page is a page where a logged in user can cast a vote as to who they believe shall win the Cup, A logged in user
who casts a vote can then see the totals cast for each team by navigating to the news section, When a vote has been cast a message instructs the user to visit the news section to see the current votes.

A user can sign up or login in to the Authentication page where all they have to provide is a email and password to be registered.
To test the site you can enter `test@test.com` and `testtest` to login as a saved user or you can enter any credentials you wish, Any new users will be saved. There will be a confirmation message when you sign up and also confirmation of a user logging
out of the site.

Navigation around the site is pretty simple with the use of a fixed navigation bar which means the user can easily navigate between pages, The use of navigation in the footer allows a person to bypass the teams section if they wish and to go directly
to the team information page.

## Testing

The project has been tested on various differant screens to ensure that it is a mobile friendly site. Manual site testing shows that all links are working correctly and that competition votes are being counted and recorded correctly. Information coming from the weather and covid api are updating correctly. A small shadow can be observed on the right side of the images on the home page when the focused in images are compressing back to their original size but this disappears after a second.

## Local Deployment

If you wish to copy the project follow these steps

- Visit [here](https://github.com/johnj974/americas-cup)
- Click on the green Code button.
- To clone the repo using http copy the provided address.
- Open a git bash terminal.
- navigate to a folder which will hold the cloned project.
- Type git clone (copied address) and press enter.
- Open the project in your editor
- Run npm install to include dependencies
- run the development server with ng serve
- Get api keys for the news section

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
