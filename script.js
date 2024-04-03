//Crazy project
let paragraph_amount = 0
let button_amount = 0
let link_amount = 0


var elem = {
    "paragraph": "<p id= $#>$T</p>",
    "button": "<button id= $#>$T</button>",
    "link": "<a href=$A id= $#>$T</a>"
}

function set_id(element_type, element, element_amount) {
    return element.replace("$#", element_type + element_amount)
}

console.log(set_id("paragraph", elem.paragraph, paragraph_amount))
console.log(set_id("button", elem.button, button_amount))
console.log(set_id("link", elem.link, link_amount))