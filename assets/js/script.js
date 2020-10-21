$(document).ready(function(){
    
    $('.js--courses').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    })
});