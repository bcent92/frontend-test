![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)

# FrontendTest

The project uses some tools for development like:
- [Husky](https://github.com/typicode/husky#readme) to create hooks for commits.
- [Standard-version](https://github.com/conventional-changelog/standard-version#readme) to create tags and an automatized CHANGELOG with the commits.
- [Commitlint](https://github.com/conventional-changelog/commitlint#readme) to pass a lint for commits messages.
- [Git-precommit-check](https://mbrehin.github.io/git-precommit-checks/) to create rules for lint.
- Commits done with [git-cz](https://github.com/streamich/git-cz) to help to create good commit messages.

I use 'Atomic Design' as CSS and styles structure. Furthermore I use [nucleus](https://github.com/holidaypirates/nucleus) to create a styleguide (it needs change 'styles.{replace}.css' by 'styles' output file of a build before execute nucleus).

This project is available on Heroku https://frontend-wefox.herokuapp.com. 'Crear' and 'Ver' buttons are not working. Project not finished.

## Development server

To serve the app you must run `npm run serve` and It will run Docker and Angular at same time.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
