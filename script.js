window.sr = ScrollReveal();
sr.reveal('.showleft', {
    duration: 2000,
    origin: 'left',
    distance: '30px',
    mobile: false
});
sr.reveal('.showright', {
    duration: 2000,
    origin: 'right',
    distance: '30px',
    mobile: false
});
sr.reveal('.ro1', {
    duration: 2000,
    origin: 'left',
    distance: '30px',
    mobile: false
});
sr.reveal('.ro2', {
    duration: 2000,
    origin: 'left',
    distance: '30px',
    mobile: false
});
sr.reveal('.ro3', {
    duration: 2000,
    origin: 'left',
    distance: '30px',
    mobile: false
});
sr.reveal('.r1', {
    duration: 2000,
    origin: 'top',
    distance: '30px',
    mobile: false
});
sr.reveal('.r2', {
    duration: 2000,
    origin: 'top',
    distance: '30px',
    mobile: false
});
sr.reveal('.r3', {
    duration: 2000,
    origin: 'bottom',
    distance: '30px',
    mobile: false
});
$(document).ready(function(){
    $(".nav-item").mouseenter(function(){
      $(this).addClass("hvr-shadow radial")
    });
  });
         
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  function topFunction() {
    
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

 