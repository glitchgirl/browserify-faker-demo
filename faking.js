var faker = require('faker');

var name = faker.name.findName(); 
var email = faker.internet.email(); 
var randomPic = faker.image.avatar(); 

function makeCard(){

document.getElementById("picture").src = randomPic;
document.getElementById("name").innerHTML = name;
document.getElementById("email").innerHTML = email;
}

makeCard();