/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Documee',
	tagline: 'Technical You Looking For',
	url: 'https://ahmadhafizh223.github.io',
	baseUrl: '/documee',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'ahmadhafizh223', // Usually your GitHub org/user name.
	projectName: 'documee', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Documee',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					to: 'directorate/',
					activeBasePath: 'directorate',
					label: 'Directorate',
					position: 'left',
				},
				{ to: 'faq', label: 'FAQ', position: 'left' },

				{ to: 'blog', label: 'Blog', position: 'left' },

				{
					to: 'faq',
					label: 'Login',
					position: 'right',
				},
			],
		},
		// footer: {
		// 	style: 'light',
		// 	links: [
		// 		{
		// 			title: 'Docume is lorem ipsum dolor sit amet. Consectetur adipiscing elit, cras lorem ac.',

		// 		},



		// 		{
		// 			title: '© 2021, PT Paragon Technology and Innovation',

		// 		},

		// 	],
		// 	//copyright: `Copyright © ${new Date().getFullYear()} PT Paragon Technology and Innovation.`,
		// },
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
