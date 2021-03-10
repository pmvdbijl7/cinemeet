# Matching app

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)

![node-current](https://img.shields.io/node/v/npm)
![npm](https://img.shields.io/npm/v/npm)
![GitHub last commit](https://img.shields.io/github/last-commit/pmvdbijl7/matching-app)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/pmvdbijl7/matching-app)
[![GitHub license](https://img.shields.io/github/license/pmvdbijl7/matching-app)](https://github.com/pmvdbijl7/matching-app/blob/main/LICENSE)

<img src="./public/media/images/cinemeet_banner.jpg" alt="Cinemeet Logo" />

**Cinemeet** allows users to match other users based on favorite genres, movies and series. They can set their own preferences on their own profile. Users can also view the profile of other users to see which favorite genres, movies and series he/she has. Besides that, users can create a personal biography on their profile to introduce themselves. People usually like to talk to other people about the movies and series they are watching so that they can express their opinions/feelings. The target audience Cinemeet focus on are people who watch movies and series every week.

## Table of Contents

-   [Features](#features)
-   [Usage](#usage)
-   [Database Structure](#database-structure)
-   [Support](#support)
-   [Roadmap](#roadmap)
-   [Credits](#credits)
-   [License](#license)

## Features

-   Change profile picture
-   Edit general profile information
-   Update genre preferences
-   Update favorite movies and series
-   Save changes easily and quickly

## Usage

To clone and run this application, you need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```bash
    # Clone this repository
    $ git clone https://github.com/pmvdbijl7/matching-app.git

    # Go into the repository
    $ cd matching-app

    # Install dependencies
    $ npm install

    # Run the app
    $ npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Database Structure

Below is an example of how the database structure looks like from the 'users' collection.
| **NAME** | **TYPE** | **VALUE** |
|----------|----------|-----------|
| _id | ObjectId | *oy986d9asg698d6a69d* |
| username | String | *patrick.mvdb*|
| email | String | _pmvdbijl7@gmail.com_ |
| password | String | _\*Y#)GJSo#DKGHu#G_ |
| name | String | _Patrick_ |
| biography | String | _Welcome to my profile :)_ |
| createdAt | Date | _2021-03-02T10:12:48.899+00:00_ |
| updatedAt | Date | _2021-03-05T13:11:47.730+00:00_ |

## Support

If you run into any problems, feel free to send [me](mailto:pmvdbijl7@gmail.com) an email.

## Roadmap

In this section ideas for this project will appear in the future.

## Credits

This project uses the following open source packages:

-   [Node.js](https://nodejs.org/en/)
-   [Npm](https://www.npmjs.com/)
-   [Nodemon](https://nodemon.io/)
-   [Express](http://expressjs.com/)
-   [EJS](https://ejs.co/)
-   [Sass](https://sass-lang.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [JWT](https://jwt.io/)
-   [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   [Body-parser](https://www.npmjs.com/package/body-parser)
-   [Cookie-parser](https://www.npmjs.com/package/cookie-parser)
-   [Dotenv](https://www.npmjs.com/package/dotenv)
-   [Joi](https://www.npmjs.com/package/joi)
-   [Multer](https://www.npmjs.com/package/multer)
-   [Slug](https://www.npmjs.com/package/slug)

## License

Matching app is released under the [MIT](https://github.com/pmvdbijl7/matching-app/blob/main/LICENSE) License.
