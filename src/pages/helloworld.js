import React from 'react';
import Layout from '@theme/Layout';
import ReactMarkdown from 'react-markdown'

function Hello() {
	return (
		<Layout title="Hello">
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '50vh',
					fontSize: '20px',
				}}>
				<p>
					<ReactMarkdown># Hello, *world*!</ReactMarkdown>
				</p>
			</div>
		</Layout>
	);
}

export default Hello;