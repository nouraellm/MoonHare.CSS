moonHare.generateVariants = function(classList) {
    var styleSheet = [];

    classList.forEach(function(cls) {
        var parts = cls.split(':');
        styleSheet = (this.variants[parts[0]] || this.defaultVariant).call(this, parts, styleSheet);
    }, this);

    return styleSheet;
};
