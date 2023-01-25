import { Paper, Tab, Tabs } from '.';

export default function Skills() {
	return (
		<Tabs>
			<Paper>
				<Tab label="Main skills">
					<ul>
						<li className="ml-2 relative before:block before:w-1 before:h-1 before:rounded-full before:bg-red-800 before:absolute before:-translate-x-full before:-translate-y-1/2 before:top-1/2">
							React
						</li>
						<li className="mt-5 ml-2 relative before:block before:w-1 before:h-1 before:rounded-full before:bg-red-800 before:absolute before:-translate-x-full before:-translate-y-1/2 before:top-1/2">
							MUI
						</li>
					</ul>
				</Tab>

				<Tab label="Other skills">tab2</Tab>

				<Tab label="Learning">tab3</Tab>
			</Paper>
		</Tabs>
	);
}
