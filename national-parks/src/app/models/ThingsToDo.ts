export interface ThingsToDo {
    location: string;
    seasonDescription: string;
    accessibilityInformation: string;
    longitude: string;
    //relatedParks	TODO: create interface for this;
    isReservationRequired: boolean;
    ageDescription: string;
    url: string;
    petsDescription: string;
    timeOfDayDescription: string;
    //images	TODO: create interface for this;
    feeDescription: string;
    id: string; 
    age: string
    arePetsPermittedwithRestrictions: boolean;
    //activities	TODO: create interface for this;
    activityDescription: string;
    locationDescription: string;
    doFeesApply: boolean;    
    longDescription: string;
    season: string[];
    //topics	TODO: create interface for this;
    durationDescription: string;
    arePetsPermitted: boolean;
    timeOfDay: string[];
    title: string;
    latitude: string;
    shortDescription: string;
    duration: string;
    tags: string[];
}