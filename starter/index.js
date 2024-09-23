// This is where your JS goes!

// You can fetch data from https://cs571api.cs.wisc.edu/rest/f24/ice/chili
// When you are complete, you should also be able to fetch data from...
//  https://cs571api.cs.wisc.edu/rest/f24/ice/pasta
//  https://cs571api.cs.wisc.edu/rest/f24/ice/pizza



/* 
let reviewNum = 0;

const BASE_AMNS = [1, 15, 14.5, 2, 1, 1, 1]
const REVIEWS = [
    "A burst of warmth and flavor in every spoonful; simple yet irresistible!",
    "The perfect blend of spice and comfort, an easy go-to chili recipe.",
    "Loved the hearty texture and rich taste - a new family favorite!",
    "Quick, flavorful, and satisfying - this chili hits all the right notes!"
]


// TODO Implement the update yield!
function updateYield() {
    //grab the number of services
    const servings = parseInt(document.getElementById("serving-selector").value);
    console.log(servings);

    //iterate over each row over the tbody
    const tablebody = document.getElementById("ingredients-body");
    //console.log(tablebody);
    const rows = tablebody.getElementsByTagName("tr");
    console.log(rows);
    for (let i = 0; i < rows.length; i++) {
        row = rows[i];
        row.getElementsByTagName("td")[0].innerText = (BASE_AMNS[i] * servings).toString();
    }

    //update the zeroth cell of the 0th cell of the body
    alert("I should update the yield!");
}

// TODO Fix the reviews!
function displayReview() {
    alert(REVIEWS[reviewNum]);
    reviewNum = (reviewNum + 1) % REVIEWS.length;
} */

url = "https://cs571api.cs.wisc.edu/rest/f24/ice/chili"

fetch(url, {
    headers: {
        "X-CS571-ID": CS571.getBadgerId()
    }
}).then((res) => {
    console.log(res.status)
    return res.json()
}).then(data => {
    console.log("The recipe is....")
    console.log(data)

    const titleElem = document.getElementById("recipe-name");
    titleElem.innerText = data.name;

    const authorElem = document.getElementById("recipe-author");
    authorElem.innerText = data.author;

    const imgElem = document.getElementsByTagName("img")[0];
    imgElem.src = data.img.location;
    imgElem.alt = data.img.description;

    const instructionsElem = document.getElementById("instructions");

    for (let i = 0; i < data.recipe.length; i++) {
        const newListItem = document.createElement('li');
        newListItem.innerText = data.recipe[i];
        instructionsElem.appendChild(newListItem);
    }

})