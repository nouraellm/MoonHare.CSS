moonHare.getClasses = function() {
    var classList = [];

    [].slice.call(window.document.querySelectorAll('*')).forEach(function(el) {
        [].push.apply(classList, el.classList);
    });

    return classList;
}
