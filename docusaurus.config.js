/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Documee',
	tagline: 'Technical You Looking For',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Documee',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{ to: 'blog', label: 'Blog', position: 'left' },
				{ to: 'faq', label: 'FAQ', position: 'left' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
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
