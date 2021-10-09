fetch("assets/json/elefant.json")
.then(x => x.json())
.then(y => elefantJson(y));

function elefantJson(adatok){
    console.log(adatok);

    for (elem of adatok){
        sz+="<tr>";
        sz+="<td>";
        sz+=elem.name;
        sz+="</td>";
        sz+="</tr>";
 
    }
    document.getElementById("torzs").innerHTML=sz;
}