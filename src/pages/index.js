import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
	{
		title: 'Easy to Use',
		imageUrl: 'img/undraw_docusaurus_mountain.svg',
		description: (
			<>
				Docusaurus was designed from the ground up to be easily installed and
				used to get your website up and running quickly.
			</>
		),
	},
	{
		title: 'Focus on What Matters',
		imageUrl: 'img/undraw_docusaurus_tree.svg',
		description: (
			<>
				Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
			</>
		),
	},
	{
		title: 'Powered by React',
		imageUrl: 'img/undraw_docusaurus_react.svg',
		description: (
			<>
				Extend or customize your website layout by reusing React. Docusaurus can
				be extended while reusing the same header and footer.
			</>
		),
	},
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--4', styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

export default function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Description will go into a meta tag in <head />">
			<header className={clsx('hero ', styles.heroBanner)}>
				<div className={clsx('container', styles.containerHero)}>

					<h1 className={clsx(styles.titleHero)}>Technical <b>Documentation</b> You Looking For</h1>
					<p className={clsx(styles.subtitleHero)}>{siteConfig.tagline}</p>

					<div className={styles.containerButtons} style={{ display: "flex" }}>
						<div className={styles.buttons}>
							<Link
								className={clsx(
									'button button--warning button--lg',
									styles.getStarted,
								)}
								to={useBaseUrl('docs/')}>
								Get Started
            </Link>

						</div>
						<div className={styles.buttons2}>
							<Link
								className={clsx(
									'button button--outline button--info button--lg',
									styles.getStarted,
								)}
								to={useBaseUrl('docs/')}>
								See Documentation
            </Link>

						</div>
					</div>
					<p className={clsx(styles.titleFaq)}>Do you have questions?
						<Link
							className={clsx(
								styles.getStarted,
							)}
							to={useBaseUrl('faq/')}>
							<b>  FAQ</b>
						</Link>
					</p>

				</div>
			</header>

			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}
