// @copyright - jQuery(https://tldrlegal.com/license/mit-license)
// @reference https://github.com/jquery/jquery/blob/main/src/selector/escapeSelector.js
moonHare.escapeClassName = function(sel) {
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
