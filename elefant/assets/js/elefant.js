fetch("../json/elefant.json")
.then(x => x.json())
.then(y => elefantJson(y));

function elefantJson(adatok){
    console.log(adatok);
}