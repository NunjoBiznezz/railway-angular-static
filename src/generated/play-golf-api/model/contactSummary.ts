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


export interface ContactSummary { 
    firstName?: string;
    lastName?: string;
    nickname?: string;
    /**
     * A valid email address.
     */
    email?: string;
    /**
     * A valid phone number.
     */
    phone?: string;
    id?: string;
    status?: ContactSummary.StatusEnum;
    since?: string;
    profileId?: string;
    handicap?: number;
    ghin?: string;
}
export namespace ContactSummary {
    export type StatusEnum = 'New' | 'Pending' | 'Accepted' | 'Declined' | 'Expired';
    export const StatusEnum = {
        New: 'New' as StatusEnum,
        Pending: 'Pending' as StatusEnum,
        Accepted: 'Accepted' as StatusEnum,
        Declined: 'Declined' as StatusEnum,
        Expired: 'Expired' as StatusEnum
    };
}

