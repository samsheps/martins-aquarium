// Import the function that returns a copy of the fish array
import {getFish} from './database.js'
const fishes = getFish ()

export const FishList = () => {
    // Invoke the function that you imported from the database module

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'
   
    // Create HTNL representations of each fish here
    for (const fish of holyFish) {
        // Why is there a backtick used for this string?
        htmlString += `<section class="fish_card"> 
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__origin">${fish.origin}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>`
    }
    for (const fish of soldiers) {
            htmlString += `<section class="fish_card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__origin">${fish.origin}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>`
    }
    for (const fish of regularFish) {
        htmlString += `<section class="fish_card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__origin">${fish.origin}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>`
    }
    htmlString += `</article>`
    //+= above means you're going to keep everything so far and adding more to it 
    // if we said = it would replace what we already have with the new value
    //the above is the closing tag for the article which we've opened at "let htmlString = ..."
    //the article is the container for each of the lil fish cards
    // once this for loop has gone through and made a block of code for every single object then you have the return statement to deliver that content

    return htmlString
}

export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        } 
    }
    return holyFish
}

const holyFish = mostHolyFish() 
// here we're invoking (running) the function mostHolyFish and saving the output to a variable called holyFish;
//we now have the output saved in a variable that we can now use for anything
//(in this case we are using it to iterate through and build an html string based on its attributes)

export const soldierFish = () => {
    const soldiers = []

    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        } 
    }    
    return soldiers
}

const soldiers = soldierFish()

export const nonHolyFish = () => {
    const regularFish = []

    for (const fish of fishes) {
        if ((fish.length % 3 != 0) && (fish.length % 5 != 0)) {
            regularFish.push(fish)
        }   
    }    
    return regularFish
}
// using 0 b/c it means there's nothing left over when we do the division. fancy way of asking "is this divisible by 5?"
const regularFish = nonHolyFish()

//export const TipList = () => {
//    const allTips = []
    // Invoke the function that you imported from the database module

    // Start building a string filled with HTML syntax
 //   let htmlString = '<article class="fishTips">'

//    htmlString += `</article>`
    //+= above means you're going to keep everything so far and adding more to it 
    // if we said = it would replace what we already have with the new value
    //the above is the closing tag for the article which we've opened at "let htmlString = ..."
    //the article is the container for each of the lil fish cards
    // once this for loop has gone through and made a block of code for every single object then you have the return statement to deliver that content

 //   return htmlString
//}