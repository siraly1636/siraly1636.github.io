fetch("https://elephant-api.herokuapp.com/elephants")
.then(x => x.json())
.then(y => elefantJson(y));

function elefantJson(adatok){
    console.log(adatok);
}