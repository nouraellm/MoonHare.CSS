var moonHare = {};

moonHare.deepExtend = function(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        if (!obj)
            continue;

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    if (obj[key] instanceof Array == true)
                        out[key] = obj[key].slice(0);
                    else
                        out[key] = this.deepExtend(out[key], obj[key]);
                } else
                    out[key] = obj[key];
            }
        }
    }

    return out;
};

moonHare.pseudoVariant = (start, end) => function(parts, cls) {
    return this.runVariants(parts.slice(1), start + cls + end);
};

moonHare.mediaVariant = (query) => function(parts, cls) {
    var css = this.runVariants(parts.slice(1), cls);

    css[1] = css[0] + '{' + css[1] + '}';
    css[0] = query;

    return css;
};

moonHare.config = moonHare.deepExtend({
    darkMode: 'class',
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1536px',
        },
    },
    variantOrder: [
        'first',
        'last',
        'odd',
        'even',
        'visited',
        'checked',
        'group-hover',
        'group-focus',
        'focus-within',
        'hover',
        'focus',
        'focus-visible',
        'active',
        'disabled',
        'dark',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
    ],
    variants: {
        'first': moonHare.pseudoVariant('', ':first'),
        'last': moonHare.pseudoVariant('', ':last'),
        'odd': moonHare.pseudoVariant('', ':nth-child(odd)'),
        'even': moonHare.pseudoVariant('', ':nth-child(even)'),
        'visited': moonHare.pseudoVariant('', ':visited'),
        'checked': moonHare.pseudoVariant('', ':checked'),
        'group-hover': moonHare.pseudoVariant('.group:hover ', ''),
        'group-focus': moonHare.pseudoVariant('.group:focus ', ''),
        'focus-within': moonHare.pseudoVariant('', ':focus-within'),
        'hover': moonHare.pseudoVariant('', ':hover'),
        'focus': moonHare.pseudoVariant('', ':focus'),
        'focus-visible': moonHare.pseudoVariant('', ':focus-visible'),
        'active': moonHare.pseudoVariant('', ':active'),
        'disabled': moonHare.pseudoVariant('', ':disabled'),
    },
    plugins: {},
}, window.MOONHARECONFIG || {});

moonHare.cache = {};

Object.keys(moonHare.config.theme.screens).forEach(function(screen) {
    if (!moonHare.config.variants[screen]) moonHare.config.variants[screen] = moonHare.mediaVariant('@media(min-width:breakpoint)'.replace('breakpoint',
        moonHare.config.theme.screens[screen]));
});

if (moonHare.config.darkMode === 'media') moonHare.config.variants.dark = moonHare.mediaVariant('@media(prefers-color-scheme:dark)');
else moonHare.config.variants.dark = function(parts, cls) {
    var css = this.runVariants(parts.slice(1), cls);

    css[0] = '.dark ' + css[0];

    return css;
}

moonHare.styleEl = document.createElement('style');
moonHare.styleEl.id = 'MOONHARE_STYLE_ELEMENT'
moonHare.styleEl.innerHTML = ' ';
document.head.appendChild(moonHare.styleEl);
moonHare.styleSheet = moonHare.styleEl.sheet;

// @copyright - jQuery(https://tldrlegal.com/license/mit-license)
// @reference https://github.com/jquery/jquery/blob/main/src/selector/escapeSelector.js
moonHare.escapeSelector = function(sel) {
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

    function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
            if (ch === "\0") {
                return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
    }

    return (sel + "").replace(rcssescape, fcssescape);
};

moonHare.defaultVariant = function(parts, cls) {
    if (parts.length === 1) {
        var pluginParts = parts[0].split('-');
        for (var index = 0; index < pluginParts.length; index++) {
            for (var pluginName in this.config.plugins) {
                if (pluginParts.slice(0, pluginParts.length - index).join('-') === pluginName) return [cls, this.config.plugins[pluginName].call(this,
                    pluginParts.slice(pluginParts.length - index), parts[0])];
            }
        }

        var nParts = parts[0].split('[');
        if (nParts.length === 2 && CSS.supports(nParts[0].slice(0, -1), nParts[1].slice(0, -1).replace(/\|/g, ' '))) return [cls, nParts[0].slice(0, -1) +
            ':' + nParts[1].slice(0, -1).replace(/\|/g, ' ') + ';'
        ];
    }
}

moonHare.getClasses = function() {
    // Select all elements in DOM.
    [].forEach.call(window.document.querySelectorAll('*'), function(el) {

        // Get all classes.
        [].forEach.call(el.classList, function(cls) {

            // Process suitable variants for class name.
            this.processVariants(cls)
        }, this);
    }, this);
}

moonHare.cacheCheck = function(className, styles, parts, cls) {
    // Read cache to find the correct place for class.
    Object.keys(this.cache).forEach(function(cacheClass) {

        // Compare classes
        var cacheClassParts = cacheClass.split(':')
        parts.forEach(function(part, index) {

            // Correct the order of variants.
            if (this.config.variantsOrder.indexOf(part) > this.config.variantsOrder.indexOf(cacheClassParts[index])) {

                // add class to cache and add styles to stylesheet
                this.cache[cls] = this.cache[cacheClass];
                this.styleSheet.addRule(className, styles, this.cache[cacheClass]);
                this.cache[cacheClass] += 1;
                return;
            }
        }, this);
    }, this);

    // default: append styles to stylesheet
    this.styleSheet.addRule(className, styles, this.styleSheet.cssRules.length);
    this.cache[cls] = this.styleSheet.cssRules.length;
}

moonHare.runVariants = function(parts, cls) {
    return (this.config.variants[parts[0]] || this.defaultVariant).call(this, parts, cls);
}

moonHare.processVariants = function(cls) {
    if (!(cls in this.cache)) {
        var parts = cls.split(':');
        var style = this.runVariants(parts, '.' + this.escapeSelector(cls))
        if (style) this.cacheCheck(style[0], style[1], parts, cls);
    }
}

moonHare.start = function() {
    if (window.document.readyState != 'loading') this.getClasses();
    else window.document.addEventListener('DOMContentLoaded', () => this.getClasses());
};
