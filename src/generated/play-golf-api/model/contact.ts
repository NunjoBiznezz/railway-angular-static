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
import { PhoneNumberEntry } from './phoneNumberEntry';
import { VerificationToken } from './verificationToken';
import { AddressEntry } from './addressEntry';
import { EmailAddressEntry } from './emailAddressEntry';


export interface Contact { 
    id?: string;
    givenName?: string;
    familyName?: string;
    nickname?: string;
    profileId?: string;
    ownerId?: string;
    googleContactId?: string;
    phoneNumbers?: Array<PhoneNumberEntry>;
    addresses?: Array<AddressEntry>;
    emailAddresses?: Array<EmailAddressEntry>;
    status?: Contact.StatusEnum;
    since?: string;
    token?: VerificationToken;
    registered?: boolean;
    primaryEmail?: EmailAddressEntry;
    primaryEmailAddress?: string;
    primaryPhoneNumber?: string;
    primaryPhone?: PhoneNumberEntry;
    primaryAddress?: AddressEntry;
}
export namespace Contact {
    export type StatusEnum = 'New' | 'Pending' | 'Accepted' | 'Declined' | 'Expired';
    export const StatusEnum = {
        New: 'New' as StatusEnum,
        Pending: 'Pending' as StatusEnum,
        Accepted: 'Accepted' as StatusEnum,
        Declined: 'Declined' as StatusEnum,
        Expired: 'Expired' as StatusEnum
    };
}


