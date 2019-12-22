


  //waiting screen for loading site
  $(document).ready(function(){
    $("#loading").fadeOut(2000);
    $(".sk-cube-grid").fadeOut(2000 , function(){
        $("html").css("overflow" , "auto");
    })
})

//wow.js fire function
new WOW().init();

//mixitup fire function
var mixer = mixitup('.mixit');
var mixer = mixitup(containerEl);

var mixer = mixitup(containerEl, {
  selectors: {
      target: '.project'
  },
  animation: {
      duration: 300
  }
});