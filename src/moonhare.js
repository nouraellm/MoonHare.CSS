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

moonHare.config = moonHare.deepExtend({
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
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
    ],
    variants: {},
    plugins: {
        decoration: parts => '-webkit-box-decoration-break:' + parts[0] + ';box-decoration-break:' + parts[0],
        box: parts => 'box-sizing' + ':' + parts[0] + '-box',
        hidden: () => 'display:none',
        inline: (p, cls) => 'display:' + cls,
        block: () => 'display:block',
        contents: () => 'display:contents',
        flow: () => 'display:flow',

        table: (p, cls) => 'display:' + cls,

        flex: () => 'display:flex', // TODO: handle other flex classes

        'flow-root': () => 'display:flow-root',
        grid: () => 'display:grid',
        'list-item': () => 'display:list-item',

        float: (parts) => 'float:' + parts[0],

        clear: (parts) => 'clear:' + parts[0],

        isolate: () => 'isolation:isolate',
        'isolation-auto': () => 'isolation:auto',

        object: (parts) => ['contain', 'cover', 'fill', 'none', 'scale-down'].indexOf(parts[0]) ? 'object-fit:' + parts[0] : 'object-position:' + parts[
            0].replace('-', ' '),

        overflow: (parts) => 'overflow' + ':' + parts[0],
        'overflow-x': (parts) => 'overflow-x' + ':' + parts[0],
        'overflow-y': (parts) => 'overflow-y' + ':' + parts[0],

        overscroll: (parts) => 'overscroll-behavior' + ':' + parts[0],
        'overscroll-x': (parts) => 'overscroll-behavior-x' + ':' + parts[0],
        'overscroll-y': (parts) => 'overscroll-behavior-y' + ':' + parts[0],

        static: () => 'position:static',
        fixed: () => 'position:fixed',
        absolute: () => 'position:absolute',
        relative: () => 'position:relative',
        sticky: () => 'position:sticky',

        bg: (parts) => {
            switch (parts[0]) {
                case 'fixed':
                case 'local':
                case 'scroll':
                    return 'background-attachment:' + parts.join(',')

                case 'bottom':
                case 'center':
                case 'left':
                case 'right':
                case 'top':
                    return 'background-position:' + parts.join(' ')

                case 'no':
                    return parts[1] == 'repeat' && 'background-repeat:' + parts.join(' ').replace('no repeat', 'no-repeat')

                case 'repeat':
                    if (parts.length === 1) return 'background-repeat:' + parts[0];
                    else if (parts[1] === 'x' || parts[1] === 'y') return 'background-repeat:' + parts.join('-');
                    else if (parts.length === 2) return 'background-repeat:' + parts[1];
                    else return 'background-repeat:' + parts.join(' ').replace('no repeat', 'no-repeat');

                case 'clip':
                case 'origin':
                    return parts[1] && 'background-' + parts[0] + ':' + parts[1] + (parts[1] == 'text' ? '' : '-box')

                case 'blend':
                    return // TODO

                    // .bg-gradient-to-r => linear-gradient(to right, ...)
                    // .bg-gradient-to-r => linear-gradient(to right, ...)
                case 'gradient':
                    return // TODO
            }

            if (parts[0].startsWith('#') || parts[0].startsWith('rgb') || parts[0].startsWith('hsl')) return 'background-color:' + parts[0];

            return 'background-size:' + parts[0];
        },
    }
}, window.MOONHARECONFIG || {});

moonHare.cache = {};

Object.keys(moonHare.config.theme.screens).forEach(function(screen) {
    moonHare.config.variants[screen] = function(parts, cls) {
        var css = this.runVariants(parts.slice(1), cls);

        css[1] = css[0] + '{' + css[1] + '}';
        css[0] = '@media(min-width:breakpoint)'.replace('breakpoint', moonHare.config.theme.screens[screen]);

        return css;
    }
});

moonHare.styleEl = document.createElement('style');

moonHare.styleEl.id = 'MOONHARE_STYLE_ELEMENT'

// Append <style> element to <head>
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
                if (pluginParts.slice(0, pluginParts.length - index).join('-') === pluginName) return [cls, this.config.plugins[pluginName].call(
                    this, pluginParts.slice(pluginParts.length - index), parts[0])];
            }
        }
    }
    if (parts.length === 2) return [cls, parts[0] + ':' + parts[1] + ';'];
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
            if (this.config.variantsOrder.indexOf(cacheClassParts[index]) > this.config.variantsOrder.indexOf(cacheClassParts[
                    index])) {

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
        this.cacheCheck(style[0], style[1], parts, cls);
    }
}

moonHare.start = function() {
    if (window.document.readyState != 'loading') this.getClasses();
    else window.document.addEventListener('DOMContentLoaded', function() {
        this.getClasses()
    });
};
