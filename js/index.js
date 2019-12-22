


  //waiting screen for loading site
  $(document).ready(function(){
    $("#loading").fadeOut(2000);
    $(".sk-cube-grid").fadeOut(2000 , function(){
        $("html").css("overflow" , "auto");
    })
})

//wow.js plugsin
new WOW().init();