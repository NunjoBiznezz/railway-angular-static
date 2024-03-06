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
import { Facilitator } from './facilitator';
import { Address } from './address';
import { TeeStation } from './teeStation';
import { ScorecardInner } from './scorecardInner';


/**
 * A Location that is a golf course
 */
export interface CourseDetails { 
    /**
     * Information describing tee stations for a given course
     */
    tees?: Array<TeeStation>;
    /**
     * The information needed to display or print a scorecard
     */
    scorecard?: Array<ScorecardInner>;
    id?: string;
    _class?: string;
    name?: string;
    address?: Address;
    /**
     * A valid phone number.
     */
    phone?: string;
    /**
     * A valid email address.
     */
    email?: string;
    /**
     * A valid social media handle.
     */
    facebookHandle?: string;
    /**
     * A valid social media handle.
     */
    instagramHandle?: string;
    /**
     * A valid social media handle.
     */
    twitterHandle?: string;
    website?: string;
    staff?: Array<Facilitator>;
    managed?: boolean;
    /**
     * Geolocation points, stored as longitude, latitude
     */
    location?: Array<number>;
}

