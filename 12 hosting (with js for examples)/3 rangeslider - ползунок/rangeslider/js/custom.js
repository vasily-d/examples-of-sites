$(function() {

    var rangeS = $("#js-range"),
        rangeV = $(".js-range-value"),
        step = parseInt(rangeS.attr("step")),
        min = rangeS.attr("min"),
        max = rangeS.attr("max");

    rangeS.rangeslider({
        polyfill: false,
        onInit: function() {
            rangeV.text(rangeS.val());
        },
        onSlide: function(position, value) {
            rangeV.text(value);
        }
    });



    $(".js-btn").on("click", function() {

        var currentVal = parseInt(rangeS.val());

        if($(this).hasClass("minus")) {
            if(currentVal > min) {
                rangeS.val(currentVal - step).rangeslider('update', true);
            }
        } else {
            if(currentVal < max) {
                rangeS.val(currentVal + step).rangeslider('update', true);
            }
        }

    });



});
