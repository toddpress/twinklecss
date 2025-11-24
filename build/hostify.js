/*
 *  Twinkle Hostify PostCSS Plugin
 *
 *  This PostCSS plugin processes CSS rules to expand each selector
 *  to also include a :host() wrapped version. This is useful for
 *  Web Components where styles need to apply both globally and within
 *  the shadow DOM.
 *
 *  For example, a rule like:
 *
 *    .my-class { color: red; }
 *
 *  Will be transformed to:
 *
 *    .my-class,
 *    :host(.my-class) { color: red; }
 */

module.exports = () => {
  return {
    postcssPlugin: 'twinkle-hostify',

    Rule(rule) {
      // Skip keyframes because selectors are percentages
      if (rule.parent && rule.parent.type === 'atrule' &&
          rule.parent.name === 'keyframes') {
        return;
      }

      // Expand each selector to also have its :host() counterpart
      const expanded = rule.selectors.flatMap(sel => {
        // Keep the original selector
        const original = sel.trim();

        // The host-wrapped version
        const hostWrapped = `:host(${original})`;

        return [original, hostWrapped];
      });

      // Join selectors back into a valid selector list
      rule.selector = expanded.join(',\n');
    }
  };
};

module.exports.postcss = true;
