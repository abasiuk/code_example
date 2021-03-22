module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    curly: ['error', 'multi-line'],
    'space-before-function-paren': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'nuxt/no-cjs-in-config': 'off', // This rule is for preventing using require/modules.exports/exports in nuxt.config.js
    'no-param-reassign': [2, { props: false }], // Disallow Reassignment of Function Parameters
    'padded-blocks': [2, { classes: 'never', blocks: 'never' }],
    'no-unused-expressions': 'off', // Require or disallow padding within blocks
    'linebreak-style': 0, // Enforce consistent linebreak style
    'object-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside braces
    'vue/script-indent': ['error', 2, { baseIndent: 1 }], // This rule is similar to core indent rule, but it has an option for inside of <script> tag.
    indent: 0, // Enforce consistent indentation
    'no-plusplus': 'off', // Disallow the unary operators ++ and --
    'arrow-body-style': ['error', 'as-needed'], // Require braces in arrow function body
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'always-multiline',
    }],
    'vue/html-self-closing': ['error', { // This rule aims to enforce the self-closing sign as the configured style
      html: {
        void: 'never',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/html-indent': 'off', // This rule enforces a consistent indentation style in <template>
    'vue/singleline-html-element-content-newline': 'off', // This rule enforces a line break before and after the contents of a singleline element.
    'vue/multiline-html-element-content-newline': 'off', // This rule enforces a line break before and after the contents of a multiline element.
    'vue/attributes-order': ['error', { // This rule aims to enforce ordering of component attributes. The default order is specified in the Vue
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    }],
    // 'vue/html-closing-bracket-spacing': ['warn', { // This rule aims to enforce consistent spacing style before closing brackets > of tags.
    //   'startTag': 'never',
    //   'endTag': 'never',
    //   'selfClosingTag': 'always' | 'never'
    // }],
    // 'vue/html-quotes': [1, 'double' | 'single'], // This rule reports the quotes of attributes if it is different to configured quotes.
    'vue/no-use-v-if-with-v-for': ['error', { // This rule is aimed at preventing the use of v-for directives together with v-if directives on the same element.
      allowUsingIterationVar: true,
    }],
    'vue/html-closing-bracket-newline': ['error', { // This rule aims to warn the right angle brackets which are at the location other than the configured location.
      singleline: 'never',
      multiline: 'never',
    }],
    // 'vue/mustache-interpolation-spacing': ['error', 'always' | 'never'], // This rule aims at enforcing unified spacing in mustache interpolations.
    'vue/name-property-casing': ['PascalCase' | 'kebab-case'], // This rule aims at enforcing the style for the name property casing for consistency purposes
    'vue/prop-name-casing': ['error', 'camelCase'], // This rule enforce proper casing of props in vue components(camelCase).
    'vue/attribute-hyphenation': 0,
    'vue/no-v-html': 0,
  },
}
