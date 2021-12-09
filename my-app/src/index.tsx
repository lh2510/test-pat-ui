import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'pat-ui/dist/index.css'
import { Button } from 'pat-ui'
import { Carousel } from 'pat-ui'
ReactDOM.render(
	<>
		<Button btnType='primary'>PRESS ME</Button>
		<Carousel
			style={{
				width: 600,
				height: 240,
			}}
		>
			<div>
				<img src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp' />
			</div>
		</Carousel>
	</>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
