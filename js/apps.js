var $overlay = $('<div id="overlay"</div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$overlay.append($image);

$('body').append($overlay);

$(".photo-wrapper a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    
    $image.attr("src", imageLocation);
    
    $overlay.show();
    
    $overlay.click(function(){
       $overlay.hide(); 
    });
})