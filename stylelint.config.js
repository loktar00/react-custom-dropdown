module.exports = {
    'plugins': [
        'stylelint-scss',
        'stylelint-selector-bem-pattern'
    ],
    'rules': {
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'function-comma-space-after': 'always',
        'function-url-quotes': 'never',
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-no-vendor-prefix': true,
        'max-empty-lines': 5,
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,
        'property-no-vendor-prefix': true,
        'declaration-block-no-duplicate-properties': true,
        'block-opening-brace-newline-after': 'always',
        'declaration-block-trailing-semicolon': 'always',
        'selector-list-comma-space-before': 'never',
        'selector-list-comma-newline-after': 'always',
        'selector-max-id': 0,
        'string-quotes': 'double',
        'value-no-vendor-prefix': true,
        'plugin/selector-bem-pattern': {
            'preset': 'bem',
            'componentName': '[a-z]+',
            componentSelectors (componentName) {
                const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
                const element = `(?:__${WORD})?`;
                const modifier = `(?:--${WORD}){0,2}`;
                const attribute = '(?:\\[.+\\])?';
                return new RegExp(`^\\.${componentName}${element}${modifier}${attribute}$`);
            }
        }
    }
};
