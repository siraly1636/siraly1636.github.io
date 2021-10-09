fetch("assets/json/elefant.json")
.then(x => x.json())
.then(y => elefantJson(y));

function elefantJson(adatok){
    console.log(adatok);

    var sz="";
    for (elem of adatok){
        sz+="<div class='col-sm-4 text-center box'><h4 class='elefant-name'>"+elem.name+"</h4>";
        sz+="<a target='_blank' href='"+elem.image+"'><img src='"+elem.image+"' class='img-size'></a>";
        if (elem.wikilink == "Unavailable") {
            sz+="<p>Nem elérhető</p></div>"
        }else{
            sz+="<p class='link'><a target='_blank' href='"+elem.wikilink+"'>Wiki</a></p></div>" 
        }
    }
    document.getElementById("elefants").innerHTML=sz;
}