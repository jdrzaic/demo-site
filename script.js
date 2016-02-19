toggle = function() {
    $(this).children(".articl_hidden").toggle();
}

main = function(){
    $(".spoiler").click(toggle);
}

$(document).ready(main);
