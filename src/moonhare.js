(function(window) {

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

    moonHare.variantOrder = [
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

    moonHare.cache = {};

    moonHare.plugins = {
        'decoration': function(baseClass) { return 'box-decoration-break' + ':' + baseClass.slice(11); },
        'box': function(baseClass) { return 'box-sizing' + ':' + baseClass.slice(4) + '-box'; },
    };

    ['block', 'inline-block', 'inline', flex, inline-flex, table, inline-table, table-caption,

    Object.keys(moonHare.theme.screens).forEach(function(screen) {
        moonHare.variants[screen] = function(parts, cls) {
            var css = this.runVariants(parts.slice(1), cls);

            css[1] = css[0] + '{' + css[1] + '}';
            css[0] = '@media(min-width:breakpoint)'.replace('breakpoint', moonHare.theme.screens[screen]);

            return css;
        }
    });

    moonHare.styleEl = window.document.createElement('style');

    moonHare.styleEl.id = 'MOONHARE_STYLE_ELEMENT'

    // Append <style> element to <head>
    window.document.head.appendChild(moonHare.styleEl);

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
            Object.keys(this.plugins).map(function(pluginName) {
                if (parts[0].startsWith(pluginName)) return [cls, this.plugins[pluginName].call(this, parts[0])];
            }, this);
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
            });
        });

        // default: append styles to stylesheet
        this.styleSheet.addRule(className, styles, this.styleSheet.cssRules.length);
        this.cache[cls] = this.styleSheet.cssRules.length;
    }

    moonHare.runVariants = function(parts, cls) {
        return (this.variants[parts[0]] || this.defaultVariant).call(this, parts, cls);
    }

    moonHare.processVariants = function(cls) {
        if (!(cls in this.cache)) {
            var parts = cls.split(':');
            var style = this.runVariants(parts, '.' + this.escapeSelector(cls))
            this.cacheCheck(style[0], style[1], parts, cls);
        }
    }

    moonHare.start = function() {
        this.getClasses()
    };

    if (window.document.readyState != 'loading') moonHare.start();
    else window.document.addEventListener('DOMContentLoaded', function() {
        moonHare.start()
    });

}(window));
