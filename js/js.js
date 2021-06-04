
if(window.matchMedia("(max-width: 760px)").matches){
    function menuDeroulant(id) {
    let niv1 = document.getElementById(id);
    let niv2 = niv1.children; //enfantS
    let titreId = niv2.item(0).id; //id de l'enfant n°1
    let titre = document.getElementById(titreId);
    let niv3 = niv2.item(1).id; //id de l'enfant n°2
    let niv4 = document.getElementById(niv3);
    let niv5 = niv4.id; // id de l'enfant ul
    let aff = document.getElementById(niv5); //récup du dernier élément par l'id
    let test = aff.style.display;

    if (aff.style.display === 'none' || test===""){
        aff.style.display ='block';
        titre.style.borderBottomLeftRadius = '0px';
        titre.style.borderBottomRightRadius = '0px';
    } else {
        aff.style.display ='none';
        titre.style.borderBottomLeftRadius = '25px';
        titre.style.borderBottomRightRadius = '25px';
    }
}
}else if(window.matchMedia("(min-width: 760px)").matches){
    function menuDeroulant(id) {
        let niv1 = document.getElementById(id);
        let niv2 = niv1.children; //enfantS
        let titreId = niv2.item(0).id; //id de l'enfant n°1
        let titre = document.getElementById(titreId);
        let niv3 = niv2.item(1).id; //id de l'enfant n°2
        let niv4 = document.getElementById(niv3);
        let niv5 = niv4.id; // id de l'enfant ul
        let aff = document.getElementById(niv5); //récup du dernier élément par l'id
        let test = aff.style.display;

        if (aff.style.display === 'none' || test===""){
            aff.style.display ='block';
            titre.style.borderBottomLeftRadius = '0px';
            titre.style.borderBottomRightRadius = '0px';
            aff.style.width = '150px';
            aff.style.marginTop = '44px';

        } else {
            aff.style.display ='none';
            titre.style.borderBottomLeftRadius = '25px';
            titre.style.borderBottomRightRadius = '25px';
        }
    }
   
}



