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


export interface Address { 
    /**
     * Primary address (street)
     */
    address?: string;
    /**
     * Secondary address (unit, etc)
     */
    address2?: string;
    /**
     * City name
     */
    city?: string;
    /**
     * State or province code.
     */
    state?: string;
    /**
     * Two-letter country code.
     */
    country?: string;
    /**
     * A valid ZIP code (U.S. format).
     */
    postalCode?: string;
}

