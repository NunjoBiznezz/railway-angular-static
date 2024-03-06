/**
 * play-golf
 * play golf API
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Address } from './address';
import { Review } from './review';


export interface FavoriteCourse { 
    id?: string;
    locationId?: string;
    name?: string;
    address?: Address;
    review?: Review;
}

