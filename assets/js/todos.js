// Check off todos by click
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       var todoText = $(this).val();
       $(this).val("");
       $("ul").append("<li><span>x</span> " + todoText + "</li>");
    }
});