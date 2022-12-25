$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false,
    });
});

$(document).ready(function(){
    $('.bxslider_team').bxSlider({
        pager: true,
    });
});

$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 25,
        touch: true
    });
});
$(function(){
    let filterList ={
        init: function(){
            $('.workportfolio').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap'
            });
        },
    };
    filterList.init();
});