/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
//scollanimation
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    // $(window).scroll( function(){
    
    //     /* Check the location of each desired element */
    //     $('.hideme').each( function(i){
            
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(this).outerHeight();
            
    //         /* If the object is completely visible in the window, fade it it */
    //         if( bottom_of_window >= bottom_of_object ){
                
    //             $(this).animate({'opacity':'1'},300);
                    
    //         }
            
    //     }); 

    $('.hideme').hide();
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) { //use `this`, not `document`
    $('.hideme').fadeIn(300);
  } 
});  
    });
  
