import { goTravel } from "../fish/database.js";

const places = goTravel ()

export const TravelList = () => {
    // Invoke the function that you imported from the database module

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="travelList">'
   
    // Create HTNL representations of each fish here
    for (const place of places) {
        // Why is there a backtick used for this string?
        htmlString += `<section class="travel_card"> 
            <div class="location__name">${place.place}</div>
            <div class="location__notes">${place.notes}</div>
            </section>`
    }
    htmlString += `</article>`

    return htmlString
}