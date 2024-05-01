// eslint.config.js
export default [
	{
		rules: {
			"no-unused-vars": 2,
			"max-len": [1, 300],
			"max-params": [1, 3],
		},
		ignores: [".config/*", "/dist", "**/*.min.js", "/node_modules", "dist/**/*"],
	},
];
