import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormControl,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	ListGroupItem,
	ListGroup,
	Container,
	Row,
	Col
} from "reactstrap";

const benefits = [
	{

		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.
			</>
		),
	},
	{

		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.
			</>
		),
	},
	{

		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.
			</>
		),
	},
	{

		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.
			</>
		),
	},

];
const features = [
	{
		title: 'Simple with Markdown',
		imageUrl: 'img/simple-markdown.png',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.
			</>
		),
	},
	{
		title: 'It is React',
		imageUrl: 'img/react.png',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.
			</>
		),
	},
	{
		title: 'Easy to Search',
		imageUrl: 'img/easy-search.png',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.
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


function Benefits({ description }) {

	return (
		<ul>

			{(<li>{description}</li>)}

		</ul>
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
				{benefits && benefits.length > 0 && (
					<section className={styles.benefits}>
						<div className={clsx('container', styles.containerBenefits)}>
							<div className="row">
								<div className="col col--6">
									<div className="text--center">
										<img src='../../static/img/benefits.png' alt='benefits' />
									</div>
								</div>
								<div className="col col--6" style={{ paddingTop: "17%" }}>
									<h1 className={clsx(styles.benefitTitle)} > Your Benefits</h1>
									{benefits.map((props, idx) => (
										<Benefits key={idx} {...props} />
									))}
								</div>

							</div>
						</div>
					</section>
				)}
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
								<div className={clsx('col col--4 col--offset-2', styles.feature)}>

									<div className="text--center">
										<img className={styles.featureImage} src='../../static/img/history.png' alt='Provide File History' />
									</div>

									<h3>Provide File History</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
								</div>
								<div className={clsx('col col--4', styles.feature)}>

									<div className="text--center">
										<img className={styles.featureImage} src='../../static/img/Saly-31.png' alt='Language Translation' />
									</div>

									<h3>Language Translation</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
								</div>
							</div>
						</div>


					</section>
				)}

				<section className={styles.beforeFooter}>
					<div className="container" style={{ marginTop: "-3%", paddingBottom: "2%" }}>
						<h1>Ready to Publish Your Docs?</h1>
						<div className={styles.buttons} style={{ marginTop: "3%" }}>
							<Link
								className={clsx(
									'button button--primary button--lg',
									styles.getStarted,
								)}
								to={useBaseUrl('docs/')}>
								Write a Doc
            	</Link>

						</div>
					</div>
				</section>
			</main>
			<footer>
				<div className={clsx('container', styles.containerFooter)}>
					<div className="row">
						<div className="col col--6">
							<span>Docume is lorem ipsum dolor sit amet. <br />Consectetur adipiscing elit, cras lorem ac.</span>
						</div>
						<div className="col col--2">

						</div>
						<div className="col col--4">
							<span>© 2021, PT Paragon Technology and Innovation</span>
						</div>


					</div>
				</div>
			</footer>
		</Layout>
	);
}
