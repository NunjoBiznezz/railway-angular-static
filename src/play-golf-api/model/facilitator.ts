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
import { InvitationStatus } from './invitationStatus';
import { RoleType } from './roleType';


export interface Facilitator { 
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
    profileId?: string;
    status?: InvitationStatus;
    roles?: Set<RoleType>;
    contactId?: string;
    title?: string;
}
export namespace Facilitator {
}


