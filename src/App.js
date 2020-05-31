import React from "react";
import Heading from "./components/layout/Heading";
import Paragraph from "./components/layout/Paragraph";
import Layout from "./components/layout/Layout";
import Double from "./components/layout/Double";
import Subheading from "./components/layout/Subheading";
import Button from "./components/layout/Button";
import Division from "./components/layout/Division";
import "./sass/style.scss";

function App() {
	return (
		<Layout>
			<Heading title="Title from prop" subtitle="Subtitle from prop" />

			<Double number={3} multiply={true} />

			<Paragraph>This will be the children prop inside the component.</Paragraph>
		
			<Subheading heading="This is the heading" />

			<Button>Click This Button</Button>

			<Division firstNumber={12} secondNumber={4} />
		</Layout>
	);
}

export default App;
