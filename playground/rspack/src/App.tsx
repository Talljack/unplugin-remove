import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	debugger
	// eslint-disable-next-line prettier/prettier
	console.log(
		'hello world',
		'world hello',
		123
	)

	console.log('00000')
	const a = true;
	// https://github.com/Talljack/unplugin-remove/issues/8
	!a && console.log('1111111')

	a || console.log(2222)

	a ?  2 : console.log('010101')

	function test0() {
		const b = a && console.log(111)
		console.log(b)
	}

	console.log('hello world')

	const test = (val: number) => {
		return 123 + val;
	}

	console.log('🚀 ~ test test: test:()', test(10));

	// https://github.com/Talljack/unplugin-remove/issues/82
	console.log(`🚀 ~ onUnmounted ~ removeCardServiceSubscription(cardServicesSubscription): ${test(1)}`)

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Rspack + React + TypeScript</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Rspack and React logos to learn more
			</p>
		</div>
	);
}

export default App;
