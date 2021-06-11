import { PlaceToStay } from "../types";

/**
 * PLEASE NOTE: you do not have to write everything inside this file.
 * The way you prefer to structure the code is totally up to you, as
 * far as code readability is kept in mind.
 */

/**
 *
 * @param id PlaceToStay id to be retrieved
 *
 */
export function getPlaceToStay(id: string): PlaceToStay {
  // CODE HERE
  return {} as unknown as PlaceToStay; // Please remove this
}

/**
 *
 * This function should fetch get all the data from S3, parse it and store it onto the DB.
 * It should then return the number of item that have been inserted.
 *
 * S3 file: https://node-js-challenge-artifacts.s3.amazonaws.com/places-to-stay.json
 */
export function ingestPlacesToStay(): number {
  // CODE HERE
  return 3;
}
