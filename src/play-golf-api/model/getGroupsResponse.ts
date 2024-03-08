/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GolfGroupSummary } from './golfGroupSummary';


export interface GetGroupsResponse { 
    /**
     * The total number of items that match the query (not the result set)
     */
    totalItems?: number;
    /**
     * The page offset requested
     */
    page?: number;
    /**
     * The number of items returned
     */
    size?: number;
    items?: Array<GolfGroupSummary>;
}

