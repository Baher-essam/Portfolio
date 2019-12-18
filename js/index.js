


  //waiting screen for loading site
  $(document).ready(function(){
    $("#loading").fadeOut(2000);
    $(".sk-cube-grid").fadeOut(2000 , function(){
        $("html").css("overflow" , "auto");
    })
})
  

//fullpage plugsin
new fullpage('#fullpage',{
  autoscrokking: true,
  navigation : true,
  anchors:[  'Header' , 'AboutMe' , 'Skills' , 'Portfolio' , 'Contact' ],
  navigationTooltips: ['Header' , 'About Me' , 'Skills' , 'Portfolio' , 'Contact'],
  showActiveTooltip: true,
  scrollingSpeed: 650,
  controlArrows:false,
  slidesNavigation: true,
  scrollBar: false,
  parallax: true,
  parallaxOptions: {type: 'reavel', percentage: 80, property: 'translate'},
  lazyLoading: true
})


//wow.js plugsin
new WOW().init();