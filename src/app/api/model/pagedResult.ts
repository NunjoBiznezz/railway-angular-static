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


/**
 * Items returned as a result of a paged request
 */
export interface PagedResult { 
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
}

