
var mediaQuery = window.matchMedia('(min-width: 768px)');

function handleTabletChange(e) {


/********************************************************/
    /*Si la taille de l'écran est superieur à 700px => le hover ouvre en auto les titres (.titre)*/
    if (mediaQuery.matches) {
        $('.titre, .titre1').click(function () {
            $(this).children('.deroulant').fadeToggle("slow");
        })
    /*Sinon il faut cliquer pour la version en dessous de 700px*/
    } else {
        $("img").attr("src","img/pat1.png");
        $('.titre, .titre1').click(function () {
            $(this).children('.deroulant').fadeToggle("slow");
        })
    }
}
/********************************************************/

mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);

if(mediaQuery.matches){
    $(".masque").mouseenter(function(){
    $("img").attr("src","img/pat1.png");
  });

  $(".masque").mouseleave(function(){
    $("img").attr("src","img/pat.png");
  });
}

