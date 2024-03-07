import { fishTips } from "../fish/database.js";
const tips = fishTips ()

export const allTips = () => {
    // Invoke the function that you imported from the database module

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipList">'
   
    // Create HTNL representations of each fish here
    for (const tip of tips) {
        // Why is there a backtick used for this string?
        htmlString += `<section class="tip_card"> 
            <div class="fish__tip">${tip.advice}</div>
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