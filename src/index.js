(function (window) {

    var moonHare = window.moonHare = window.moonHare || {};

    moonHare.theme = {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1536px',
        },
    };

    moonHare.variantOrder: [
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
    ];

    moonHare.variants = {};

    moonHare.plugins = {};

    Object.keys(moonHare.theme.screens).forEach(function (screen) {
        moonHare.variants[screen] = function (parts, styleSheet) {
            var css = this.runPlugins('.' + this.escapeSelector(parts.join(':')), parts.slice(1), styleSheet);

            if (css) {
                if (!styleSheet[-1] || styleSheet[-1]/* last style block */[0]/* selector */ !== '@media(min-width:breakpoint)'.replace('breakpoint', moonHare.theme.screens[screen]))
                    styleSheet.push(['@media(min-width:breakpoint)'.replace('breakpoint', moonHare.theme.screens[screen]), css]);
                else [].push.apply(styleSheet[-1]/* last style block */[1]/* rules */, css);
            }

            return styleSheet;
        }
    });

    moonHare.styleEl = window.document.createElement('style');

    moonHare.styleEl.id = 'MOONHARE_STYLE_ELEMENT'

    // Append <style> element to <head>
    window.document.head.appendChild(moonHare.styleEl);

    // @copyright - jQuery(https://tldrlegal.com/license/mit-license)
    // @reference https://github.com/jquery/jquery/blob/main/src/selector/escapeSelector.js
    moonHare.escapeSelector = function (sel) {
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

    moonHare.runPlugins = function (className, parts, styleSheet) {
        if (parts.length === 1) {
            Object.keys(this.plugins).map(function (pluginName) {
                if (parts[0].startsWith(pluginName)) return this.plugins[pluginName].call(this, parts, styleSheet);
            }, this);
        }
        if (parts.length === 2) return [[className, parts[0] + ':' + parts[1] + ';']];
    }

    moonHare.defaultVariant = function (parts, styleSheet) {
        var css = this.runPlugins(parts, styleSheet);

        if (css) [].push.apply(styleSheet, css);
        return styleSheet;
    }

    moonHare.addStyles = function (styles) {
        this.styleEl.innerHTML = styles;
    }

    moonHare.clearStyles = function () {
        this.styleEl.innerHTML = '';
    }

    moonHare.getClasses = function () {
        var classList = [];

        [].slice.call(window.document.querySelectorAll('*')).forEach(function (el) {
            [].push.apply(classList, el.classList);
        });

        return classList;
    }

    moonHare.generateVariants = function (classList) {
        var styleSheet = [];

        classList.forEach(function (cls) {
            var parts = cls.split(':');
            styleSheet = (this.variants[parts[0]] || this.defaultVariant).call(this, parts, styleSheet);
        }, this);

        return styleSheet;
    }

    moonHare.generateCSS = function (styleSheet) {
        var styleString = '';

        styleSheet.forEach(function (rule) {
            var selector = Array.isArray(rule[0]) ? rule[0].join(',') : rule[0],
                styles = Array.isArray(rule[1]) ? this.generateCSS(rule[1]) : rule[1];

            styleString += selector + '{' + styles + '}';
        }, this);

        return styleString;
    }

    moonHare.start = function () {
        this.clearStyles();
        this.addStyles(
            this.generateCSS(
                this.generateVariants(
                    this.getClasses()
                )
            )
        );
    };

    if (window.document.readyState != 'loading') moonHare.start();
    else window.document.addEventListener('DOMContentLoaded', function () {
        moonHare.start()
    });

}(window));
