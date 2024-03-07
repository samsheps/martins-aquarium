
import { FishList } from "./fish/fishList.js"
import { TravelList } from "./locations/locations.js"
import { allTips } from "./tips/tipList.js"
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishHTMLElement = document.querySelector(".fish_container")
// here we're assigning everying after = to the parentHTMLElement variable 
// document (basically) refers to your html file / what we see on the webpage (the DOM)
// here we're querying the html for an element with the class "fish_container"
// querySelector can look for a tag, (#)ID, or (.)class (which is what we're using above) - we'll use the symbols included to access that type of data


fishHTMLElement.innerHTML = FishList()
// above: "parentHTMLElement" = <section class="fish_container"></section> because of how we assigned it on line 21/via he const
// .innerHTML means we're accessing the html 
// my element .innerHTML - we're saying the stuff inside those two tags is now = to whatever we're assining to it 
// FishList is one big string with divs that carries the details for each fish 
// by the time line 28 is done executing, we have our webpage/what we see in the browser 

// you now have a separated list of fish (fish divisible by 3, 5, and then all the other fish)

//.box {
//    display: flex;
//    flex-direction: row;
//  }
const tipHTMLElement = document.querySelector(".tip_container")
// querySelector is asking here "what has the class "tip_container"?

tipHTMLElement.innerHTML = allTips()

const locationsHTMLElement = document.querySelector(".locations_container")
// querySelector is asking here "what has the class "tip_container"?

locationsHTMLElement.innerHTML = TravelList()