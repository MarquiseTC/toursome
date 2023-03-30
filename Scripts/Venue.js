import { getVenues } from "./database.js";

const venues = getVenues()

export const Venues = () => {
    let venuesHTML = "<ul>"

    for (const venue of venues){
        venuesHTML += `<li id="venues--${venue.address}">${venue.sFoot}>
        ${venue.maxOcc}</li>`
    }
    venuesHTML += "</ul>"

    return venuesHTML
}