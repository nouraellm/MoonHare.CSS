// Export it for webpack
if (typeof module === 'object' && module.exports) {
  // Avoid breaking it for `import { u } from ...`. Add `import u from ...`
  module.exports = mh;
  module.exports.mh = mh;
}
