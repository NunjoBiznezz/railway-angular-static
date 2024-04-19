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


export interface GolfParticipant { 
    id?: string;
    profileId?: string;
    givenName?: string;
    familyName?: string;
    email?: string;
    phone?: string;
    nickname?: string;
    gender?: GolfParticipant.GenderEnum;
    status?: GolfParticipant.StatusEnum;
    roles?: Set<GolfParticipant.RolesEnum>;
    handicap?: number;
    ghin?: string;
    name?: string;
}
export namespace GolfParticipant {
    export type GenderEnum = 'Unspecified' | 'Male' | 'Female';
    export const GenderEnum = {
        Unspecified: 'Unspecified' as GenderEnum,
        Male: 'Male' as GenderEnum,
        Female: 'Female' as GenderEnum
    };
    export type StatusEnum = 'New' | 'Pending' | 'Accepted' | 'Declined' | 'Expired';
    export const StatusEnum = {
        New: 'New' as StatusEnum,
        Pending: 'Pending' as StatusEnum,
        Accepted: 'Accepted' as StatusEnum,
        Declined: 'Declined' as StatusEnum,
        Expired: 'Expired' as StatusEnum
    };
    export type RolesEnum = 'Player' | 'Facilitator' | 'Delegate' | 'Administrator' | 'Creator';
    export const RolesEnum = {
        Player: 'Player' as RolesEnum,
        Facilitator: 'Facilitator' as RolesEnum,
        Delegate: 'Delegate' as RolesEnum,
        Administrator: 'Administrator' as RolesEnum,
        Creator: 'Creator' as RolesEnum
    };
}


