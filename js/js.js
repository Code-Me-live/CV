function menuDeroulant(id){

    let idNiv0 = document.getElementById(id);
    let idNiv4 = document.getElementById(id).children.item(1);
    let listName = document.getElementById(id).children.item(1).id;
    let titre = document.getElementById(document.getElementById(id).children.item(0).id) ;
    let affichage = document.getElementById(listName);
    let display = affichage.style.display;

    if(window.matchMedia("(max-width: 770px)").matches){
        if (affichage.style.display === 'none' || display ===""){
            affichage.style.display ='block';
            titre.style.borderBottomLeftRadius = '0px';
            titre.style.borderBottomRightRadius = '0px';
        } else {
            affichage.style.display ='none';
            titre.style.borderBottomLeftRadius = '25px';
            titre.style.borderBottomRightRadius = '25px';
        }
    }
    if(window.matchMedia("(min-width: 770px)").matches){
        if (affichage.style.display === 'none' || display === ""){
            affichage.style.display ='block';
            titre.style.borderBottomLeftRadius = '0px';
            titre.style.borderBottomRightRadius = '0px';
            if(idNiv0.id === 'EXP1'){
                idNiv0.style.zIndex ='3';
                titre.style.width = '329px';
                idNiv4.style.width = '350px';
            } else if (idNiv0.id === 'formations'){
                idNiv0.style.zIndex ='2';
                titre.style.width = '280px';
                idNiv4.style.width = '300px';
            }
        } else {
            affichage.style.display ='none';
            titre.style.borderBottomLeftRadius = '25px';
            titre.style.borderBottomRightRadius = '25px';
            titre.style.width = '200px';
        }
    }
}

function techno(){
    alert("Wordpress, Symfony, React.JS");
}

let photo = document.getElementById("photo");

photo.addEventListener("mouseover", function(event){
    photo.style.transform = "rotate(360deg)";
    photo.style.transition= "all 0.2s"
    setTimeout(() => {
        photo.style.width = "170px";
        photo.setAttribute('src', 'img/certificat.png');
    }, 60);
});
photo.addEventListener("mouseleave", function(event){
    photo.style.transform = "rotate(-360deg)";
    photo.style.transition= "all 0.3s"
    setTimeout(() => {
        photo.style.width = "170px";
        photo.setAttribute('src', 'img/pat.png');
    }, 40);
});
