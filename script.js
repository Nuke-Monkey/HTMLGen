//Crazy project
let paragraph_amount = 0
let button_amount = 0
let link_amount = 0


var elem = {
    "paragraph": "<p id= &#>&T</p>",
    "button": "<button id= &#>&T</button>",
    "link": "<a href=&A id= &#>&T</a>"
}

function set_id(element_type, element, element_amount) {
    return element.replace("&#", element_type + element_amount)
}

function set_text(element, text) {
    return element.replace("&T", text)
}

//Sets up element ids
console.log(set_id("paragraph", elem.paragraph, paragraph_amount))
console.log(set_id("button", elem.button, button_amount))
console.log(set_id("link", elem.link, link_amount))

//Adds text to the elements
console.log(set_text(elem.paragraph, "Hello, World!"))
console.log(set_text(elem.button, "Click Me!"))
console.log(set_text(elem.link, "Example.com"))