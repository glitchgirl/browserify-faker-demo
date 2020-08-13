var faker = require('faker');

var name = faker.name.findName(); 
var email = faker.internet.email(); 
var randomPic = faker.image.avatar(); 
var address = faker.address.city()

function makeCard(){
    document.getElementById("picture").src = randomPic;
    document.getElementById("name").innerHTML = name;
    document.getElementById("email").innerHTML = email;
    document.getElementById("city").innerHTML = address;
}

makeCard();