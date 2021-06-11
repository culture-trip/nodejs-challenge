# NodeJS Engineer Test

This is the repo for the Culture Trip NodeJs test. If you are here, you probably already made it through the first round, so well done! This is a take-home test, which we'd expect to take you no more than 2-3 hours. In this page, we have listed all the requirements and some guidelines that we hope you will find helpful.

**Good luck!**
## Requirements
Build an application that provides RESTful endpoints and follows commonly understood best practices.
We would like you to also implement some basic tests. We have already provided a simple, failing test as a guidance. What to test and how to 
test it, is up totally up to you.

This should not have a Frontend, so no views or HTML are required.

Once you have completed the challenge, please add some very little documentation to the `FILL_ME.md` file, explaining how to run the server and the tests.

## Submitting the test
When you think you have completed the challenge, please **do not** open a Pull Request. We would like you to zip the folder of your local project (excluding node_modules) and sent it through to the email that has been provided to you from ou HR department.
**IMPORTANT** The subject of the email should be "NodeJS Engineer Take Home Test".
We will evaluate your test and call you for a face-to-face (done remotely) interview, to discuss about your solution.

### Endpoints

The application will provide 2 RESTful endpoints which are listed below.

#### **GET** `/places-to-stay/{slug}`

- this endpoint will return a single `PlaceToStay` object that corresponds to the given `{slug}`, represented as **JSON**

#### **POST** `/places-to-stay/ingest`

- **POST** `/places-to-stay/ingest` that will start and wait for the completion of an ingestion, and it will return a **JSON** result, which will include the number of places to stay that have been inserted during the ingestion. The items to insert will be fetched from this [S3 file](https://node-js-challenge-artifacts.s3.amazonaws.com/places-to-stay.json), which is publicly available. 

It is important to note that, should the ingestion be run N times, items should not be duplicated in the DB, they should instead be updated, on every run subsequent to the first one.

Here is reported a diagram that should help understand the solution.
![](./resources/ingestion-diagram.png)


### `PlaceToStay`

The type `PlaceToStay` will give you the type of a placeToStay object, as it should be returned to a client. There is also a `S3PlaceToStay` type, which instead represents an item in the bucket. As you can see, the items in the bucket have no `slug`; this should be created from 

**Note:** `S3PlaceToStay` items do not have a `slug` property, which is instead required in `PlaceToStay`, this slug should be generated from the title of the place to stay and should be unique in the database.

The DB collection should contain all the properties in `PlaceToStay`; you can decide to enrich it with any property that you may find appropriate.

For what concern the address, we do not require you to store any more data than the address you get back from the data in S3, which is simply a string.

### HTTP Status Codes and Exception handling

The application must handle the following exceptions:

- _Bad Request_: if the provided `{slug}` is `null` or empty
- _Not Found_: if the required `PlaceToStay` cannot be retrieved from the the database
- _Internal Server Error_: the application will handle any other exception returning _Internal Server Error_

### Incremental design

The skeleton classes that conform RESTful API are provided, and we suggest to follow the below steps:

1. Implement a server using any library that you prefer (or no library at all), with route `/places-to-stay/ingest`
2. Implement the `parseS3File` function from [src/utils/s3.ts](/src/utils/s3.ts) to fetch the data from S3
3. Implement the `ingestPlacesToStay` function from [src/service/place-to-stay-service.ts](/src/service/places-to-stay-service.ts) which should make use of the function above to retrieve the data and store it to the DB
4. Add a **POST** request handler to the server for `/places-to-stay/ingestion`, which should make use of the function above in order to start the the ingestion and return a response to the client upon completion (or failure).
5. Implement the `getPlaceToStay` function from [src/service/place-to-stay-service.ts](/src/service/places-to-stay-service.ts) which should fetch PlaceToStay from the db and return it, if found .
6. Add a **GET** request handler to the server for `/places-to-stay/{slug}`, which should make use of `getPlaceToStay` to retrieve and return the a place to stay (if it exists) to the client.
7. Implement tests that are thought as necessary.
8. Handle the cases of _Bad Request_ (e.g. for a given wrong `slug`) and _Not Found_, or an ingestion failure.

**Note**: progress as far as you can following the above steps. It is not a requirement to complete all of them. We will value quality over quantity, so a good solution to part of the expected functionality is better than a poor solution to all the requirements.

### Language, Database, Packages and recommendations

- The test should be completed using [Typescript](https://www.typescriptlang.org/).
- We would like to use [MongoDB](https://www.mongodb.com/) as a database.
- You an can launch a local MongoDB instance by running the command `docker-compose up`, which will run a mongodb container with the credentials listed in the [docker-compose.yml](/docker-compose.yml) file.
- We have provided a [function to connect to a local instance](/src/db/get-client-db.ts), which makes use of the [mongodb](https://www.npmjs.com/package/mongodb) npm package. Should you prefer to use a different package, feel free to do so.
- We have provided some empty functions, which should serve as guidelines, alongside what has been written above. Nonetheless, if you prefer to rewrite everything from scratch, you can certainly do so, as far your solution is implement using Typescript and MongoDB.

### Some ideas of what we are looking for are:

- Well thought out software design
- Testing
- Clean code
