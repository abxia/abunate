$(document).ready(function () {
    $('.sub').click(function(e){
        e.preventDefault();
        $('.sub .open li a:hover').css('box-shadow','inset','0 0 0 0','#ffffff');
    });
   $('.title').addClass('animate__animated animate__bounce');
});


