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

const directorates = [
	{
		title: 'Finance',

		description: (
			<>
				See Project
			</>
		),
	},
	{
		title: 'Information Technology',

		description: (
			<>
				See Project
			</>
		),
	},
	{
		title: 'Human Resources',

		description: (
			<>
				See Project
			</>
		),
	},

	{
		title: 'Research and Development',

		description: (
			<>
				See Project
			</>
		),
	},
	{
		title: 'Product Innovation and Development',

		description: (
			<>
				See Project
			</>
		),
	},
	{
		title: 'Supply Chain',
		description: (
			<>
				See Project
			</>
		),
	},

];

function Directorate({ title, description }) {

	return (
		<div className={clsx('col col--4', styles.directorate)}>
			<Card className={styles.cardDirectorate}>
				<CardBody>
					<h3>{title}</h3>
					<p style={{ color: "blue", paddingTop: "4%" }}>{description}</p>
				</CardBody>
			</Card>

		</div>
	);
}

export default function Direcrorate() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout title="Directorate">
			<header className={clsx('hero ', styles.heroBannerDirectorate)}>
				<div className="container">
					<div className={clsx(styles.titleHeroDirectorate)}>
						<h1 >List of <b>Directorate</b> Documentation</h1>
						<p >You can find project documentation for every directorate in Paragon</p>
					</div>



				</div>
			</header>

			<main>
				{directorates && directorates.length > 0 && (
					<section className={styles.directorates}>
						<div className="container">
							<div className="row">
								{directorates.map((props, idx) => (
									<Directorate key={idx} {...props} />
								))}

							</div>
						</div>

					</section>
				)}
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