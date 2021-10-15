if(window.matchMedia("(max-width: 770px)").matches){
        function menuDeroulant(id) {
        let niv1 = document.getElementById(id);
        let niv2 = niv1.children; //enfantS
        let titreId = niv2.item(0).id; //id de l'enfant n°1
        let titre = document.getElementById(titreId);
        let niv3 = niv2.item(1).id; //id de l'enfant n°2
        let niv4 = document.getElementById(niv3);
        let niv5 = niv4.id; // id de l'enfant ul
        let aff = document.getElementById(niv5); //récup du dernier élément par l'id
        let display = aff.style.display;

        if (aff.style.display === 'none' || display ===""){
            aff.style.display ='block';
            titre.style.borderBottomLeftRadius = '0px';
            titre.style.borderBottomRightRadius = '0px';
        } else {
            aff.style.display ='none';
            titre.style.borderBottomLeftRadius = '25px';
            titre.style.borderBottomRightRadius = '25px';
        }
    }
}
if(window.matchMedia("(min-width: 770px)").matches){
    let listInfos = document.getElementById('listInfos');
    let listSoftSkills = document.getElementById('listSoftSkills');
    let listEXP1 = document.getElementById('listEXP1');
    let listEXP2 = document.getElementById('listEXP2');
    let listFormation = document.getElementById('listFormation');
    let listLoisirs = document.getElementById('listLoisirs');

    function menuDeroulant(id) {
        let niv1 = document.getElementById(id);
        let niv2 = niv1.children; //enfantS
        let titreId = niv2.item(0).id; //id de l'enfant n°1
        let titre = document.getElementById(titreId);
        let niv3 = niv2.item(1).id; //id de l'enfant n°2
        let niv4 = document.getElementById(niv3);
        let niv5 = niv4.id; // id de l'enfant ul
        let aff = document.getElementById(niv5); //récup du dernier élément par l'id
        let display = aff.style.display;

        if (aff.style.display === 'none' || display === ""){
            aff.style.display ='block';
            titre.style.borderBottomLeftRadius = '0px';
            titre.style.borderBottomRightRadius = '0px';
            if(niv1.id === 'EXP1'){
                niv1.style.zIndex ='3';
                titre.style.width = '329px';
                niv4.style.width = '350px';
            } else if (niv1.id === 'formations'){
                niv1.style.zIndex ='2';
                titre.style.width = '280px';
                niv4.style.width = '300px';
            }
        } else {
            aff.style.display ='none';
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
        photo.style.width = "178px";
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
