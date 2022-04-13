import Head from 'next/head';
import React from 'react';
import { Cursor, Layout } from '../components';

const Home = () => {
	return (
		<Layout>
			<Head>
				<title>Strona główna</title>
			</Head>

			<Cursor />
		</Layout>
	);
};

export default Home;
