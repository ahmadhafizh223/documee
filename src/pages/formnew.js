import React from 'react';
import Layout from '@theme/Layout';
import qoreContext from "../context/qoreContext";
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

function Formnew() {
	const { data: allMember, status } = qoreContext.view("allMember").useListRow({

		limit: 10,
		order: "asc"
	});
	return (
		<Layout title="Formnew">
			<div
				style={{
					textAlign: 'center',
					justifyContent: 'center',
					alignItems: 'center',
					height: '50vh',
					fontSize: '20px',
				}}>
				<h1>Coba</h1>

				{allMember.length}
				{allMember.map(user => (
					<Card style={{ padding: "2rem 0", backgroundColor: "blue", marginTop: "1.5rem" }}>
						<CardHeader>
							<h3 className="mb-0 text--warning">INI USER</h3>
						</CardHeader>
						<CardBody>
							<span>{user.email}</span>
						</CardBody>
					</Card>
				))}

			</div>
		</Layout>
	);
}

export default Formnew;