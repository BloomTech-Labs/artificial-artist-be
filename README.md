# Artificial Artist API Documentation

#### 1️⃣ Backend deployed at AWS ElasticBeanstalk (https://api.theartificialartist.com/api)

[![Maintainability](https://api.codeclimate.com/v1/badges/66e0f92a8649e3fc0514/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/artificial-artist-be/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/66e0f92a8649e3fc0514/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/artificial-artist-be/test_coverage)

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm test** to start server using testing environment

## 2️⃣ Endpoints

#### Videos Routes

| Method | Endpoint                        | Access Control   | Description                                       |
| ------ | ------------------------------- | --------------   | ------------------------------------------------- |
| GET    | `/api/videos`                   | all users        | Returns all videos with a join to some songs data |
| GET    | `/api/videos/random9`           | all users        | Returns 9 random videos (for homepage)            |
| GET    | `/api/videos/:id`               | all users        | Get video by video_id                             |
| GET    | `/api/videos/single/file-check` | all users        | Check if file exists on s3                        |
| GET    | `/api/videos/user/:userId`      | all users        | Get videos by user_id                             |
| POST   | `/api/videos/`                  | registered users | Post video to backend/datascience/s3              |
| PUT    | `/api/videos/`                  | registered users | Update video on backend                           |

#### Songs Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/songs`            | all users           | Gets list of all songs in the database             |
| GET    | `/api/songs/:id`        | all users           | Get song by id                                     |
| POST   | `/api/songs/`           | all users           | Post new song to the database                      |

#### User Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/users`            | registered users    | Gets list of all users (prob should be removed)    |
| GET    | `/api/users/:id`        | all users           | Get user info by id                                |
| GET    | `/api/users/:username`  | all users           | Get user info by username                          |

#### Auth Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| POST   | `/api/auth/register`    | all users           | Register for an account                            |
| POST   | `/api/auth/login`       | all users           | Login to an account                                |

# Data Model

#### USERS

---

```
{
  id: INCREMENTS
  username: STRING
  password: STRING
  email: STRING
  first_name: STRING
  last_name: STRING
}
```

#### VIDEOS

---

```
{
  id: INCREMENTS
  video_title: STRING
  location: STRING
  video_status: STRING
  thumbnail: STRING
  song_id: FOREIGNKEY
  user_id: FOREIGNKEY
}
```


#### SONGS

---

```
{
  id: INCREMENTS
  deezer_id: INTEGER
  title: STRING
  artist_name: STRING
}
```

## 2️⃣ Actions

### Videos

  `add(data)` -> Adds a video
  
  `find()` -> Returns all videos with a join with some song information
  
  `find9()` -> Returns a randomized set of 9 successfully created videos
  
  `findBy(filter)` -> Returns videos that match by a specified object
  
  `findById(id)` -> Returns a single video by id
  
  `findByUser(id)` -> Returns all videos created by a specific user
  
  `update(data, id)` -> Updates a video by id
  
  `remove(id)` -> Removes a video  by id
  
<br>

### Users

  `add(data)` -> Add user
  
  `find()` -> Return all users
  
  `findBy(filter)` -> Return all users that match by specified object
  
  `findById(id)` -> Return user that matches id
  
  `findIdByUsername(username)` -> Return user that matches username
  
  `update(data, id)` -> Update user by id
  
  `remove(id)` -> Remove user by id
  
<br>

### Songs

  `add(data)` -> Add song
  
  `find()` -> Return all songs
  
  `findBy(filter)` -> Return all songs that math filter object
  
  `findById(id)` -> Return song that matches id
  
  `update(data, id)` -> Update song that matches id
  
  `remove(id)` -> Remove song that matches id

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:
    
    *  PASS - This is your local database password
    *  NODE_ENV - set to 'development' unless you want to run seeds on 'production'
    *  AWS_BUCKET - Set to the appropriate bucket name
    *  AWS_ACCESS_KEY_ID - Set to appropriate access key id associated with your user
    *  AWS_SECRET_ACCESS_KEY - Set to appropriate secret access key for your user
    *  RDS_USERNAME_PROD - This is your Amazon RDS username
    *  RDS_PASSWORD_PROD - This is your Amazon RDS password
    *  RDS_HOSTNAME_PROD - This is your Amazon RDS hostname
    *  RDS_PORT_PROD - This is your Amazon RDS port
    *  RDS_DB_PROD - This is your Amazon RDS database name
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/artificial-artist-fe) for details on the fronend of our project.
See [Datascience Documentation](https://github.com/Lambda-School-Labs/artificial-artist-ds) for details on the datascience part of our project
