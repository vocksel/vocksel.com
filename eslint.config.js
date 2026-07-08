const js = require('@eslint/js')
const react = require('eslint-plugin-react')
const babelParser = require('@babel/eslint-parser')
const globals = require('globals')

module.exports = [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx}'],

		languageOptions: {
			parser: babelParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
		},

		plugins: {
			react,
		},

		rules: {
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
			'indent': [ 'error', 'tab' ],
			'quotes': [ 'error', 'single' ],
			'semi': [ 'error', 'never' ],
		},
	},
]
