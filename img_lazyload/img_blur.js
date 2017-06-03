window.onload = function() {
    $('.post img').each(function () {
        var el = this;
        var image = new Image();
        image.src = $(el).parent().attr('data-src');
        image.onload = function () {
            $(el).parent().addClass('loaded');
            $(el).parent().append(image);
        }
    })

}