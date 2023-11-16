import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		--size-8: 0.5rem;
		--size-16: 1rem;
		--size-24: 1.5rem;
		--size-32: 2rem;
		--size-48: 3rem;

		--fw-light: 300;
		--fw-regular: 400;
		--fw-medium: 500;
		--fw-bold: 700;
		--fw-black: 900;

		--fs-200: 0.6875rem;
		--fs-300: 0.75rem;
		--fs-350: 0.8125rem;
		--fs-375: 0.875rem;
		--fs-400: 1rem;
		--fs-500: 1.125rem;
		--fs-600: 1.5rem;
		--fs-700: 2rem;

		--primary-color: ${({ theme }) => theme.colors.red[400]};
		--bg: ${({ theme }) => theme.colors.darkBlue[900]};
		--text: ${({ theme }) => theme.colors.white};
		--text-inverse: ${({ theme }) => theme.colors.darkBlue[900]};

		font-family: ${({ theme }) => theme.fonts.family};
		line-height: 1.5;
		font-size: var(--fs-400);
		font-weight: var(--fw-regular);

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	html {
		box-sizing: border-box;
		scroll-behavior: smooth;

		@media (prefers-reduced-motion: reduce) {
			scroll-behavior: auto;

			body * {
				animation-duration: 0s !important;
				animation-delay: 0s !important;
			}
		}
	}

	*,
	*::after,
	*::before {
		box-sizing: inherit;
	}

	body {
		background-color: var(--bg);
		color: var(--text);
		height: 100%;
	}

	blockquote,
	body,
	figure,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	hr,
	li,
	ol,
	p,
	pre,
	ul {
		margin: 0;
		padding: 0;
	}

	ul:where([class]) {
		list-style: none;
	}

	button,
	input,
	select,
	textarea {
		color: inherit;
		letter-spacing: inherit;
		font: inherit;
	}

	input[type="text"],
	textarea {
		width: 100%;
	}

	fieldset {
		padding: 0;
		border: none;
	}

	legend {
		margin-bottom: 0.5rem;
		max-width: 100%;
	}

	button,
	input,
	textarea {
		border: 1px solid gray;
	}

	button * {
		pointer-events: none;
	}

	button:hover {
		cursor: pointer;
	}

	embed,
	iframe,
	img,
	object,
	svg,
	video {
		display: block;
		max-width: 100%;
	}

	svg {
		max-height: 100%;
	}

	table {
		width: 100%;
		table-layout: fixed;
	}

	[hidden] {
		display: none !important;
	}

	noscript {
		display: block;
		margin-top: 1em;
		margin-bottom: 1em;
	}

	[tabindex="-1"] {
		outline: none !important;
		box-shadow: none !important;
	}

	.material-symbols-outlined {
		font-variation-settings:
		'FILL' 0,
		'wght' 400,
		'GRAD' 0,
		'opsz' 24
	}
`;

export default GlobalStyles;
