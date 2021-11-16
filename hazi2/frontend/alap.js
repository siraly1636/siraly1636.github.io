// Termékek lekérdezése
fetch("http://ms-s1.siralycore.hu:25508/termekek")
.then(x => x.json())
.then(y => termek_megjelenit(y));

// Felvitel gombra azonnal frissít
function update(){
    setTimeout(function () {
        fetch("http://ms-s1.siralycore.hu:25508/termekek")
        .then(x => x.json())
        .then(y => termek_megjelenit(y)); 
    }, 100);
}

// Termékek megjelenítése táblázatban
function termek_megjelenit(adatok){

    console.log(adatok);

    var sz="";
    for (elem of adatok){
        sz+='<tr>';
        sz+='<td>'+elem.id+'</td>';
        sz+='<td>'+elem.nev+'</td>';
        sz+='<td>'+elem.ar+' Ft</td>';
        sz+='<td>'+elem.szin+'</td>';
        sz+='<td>'+elem.meret+'</td>';
        sz+='<td>'+elem.anyag+'</td>';
        sz+='</tr>';
    }
    document.getElementById("tablazat").innerHTML=sz;

}

// Termékek felvitele
function termek_felvitel(){

    var bemenet={
        bevitel1:document.getElementById("bevitel1").value,
        bevitel2:document.getElementById("bevitel2").value,
        bevitel3:document.getElementById("bevitel3").value,
        bevitel4:document.getElementById("bevitel4").value,
        bevitel5:document.getElementById("bevitel5").value
    }
    fetch("http://ms-s1.siralycore.hu:25508/termek_felvitel", {
        method: "POST",
        body: JSON.stringify(bemenet),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }
    )
    .then(x => x.text());
}
