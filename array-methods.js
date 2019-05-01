const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
// planets.forEach(planet => {
//     planetEl.innerHTML += `<section id="planets"> ${planet} </section>`
// })

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return(splitStr.join(' ')); 
 }



planets.map(planet => {
    
   let capitalPlanet =  titleCase(planet);
   planetEl.innerHTML += `<section id="planets"> <h1>${capitalPlanet} </h1></section> </br>`
   console.log(capitalPlanet)
  
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let ePlanet = [];
console.log(ePlanet)
planets.filter( planet => {
    if(planet.includes("e") === true){
        ePlanet.push(planet)
    }else {
        console.log("nope")
    }
       

})
console.log(ePlanet)