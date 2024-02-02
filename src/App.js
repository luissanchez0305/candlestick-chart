/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {

  getRandomNumbers = (min, max) => {
    const open = Math.random() * (max - min) + min;
    const high = Math.random() * (max - open) + open;
    const close = Math.random() * (high - open) + open;
    const low = Math.random() * (min - close) + close;

    return [open, high, close, low];
  }

	render() {


    const today = new Date();
    const dataPoints = [];
    for(let i = 30; i > 0; i--){
      dataPoints.push({ x: new Date().setDate(today.getDate() - i), y: this.getRandomNumbers(30, 52) });
    }
    
		const options = {
			theme: "dark2", // "light1", "light2", "dark1", "dark2"
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: "ABC Stock price"
			},
			axisX: {
				valueFormatString: "MMM YY"
			},
			axisY: {
				prefix: "$",
				title: "Price (USD)"
			},
			data: [{
				type: "candlestick",
				showInLegend: true,
				name: "ABC",
				yValueFormatString: "$###0.00",
				xValueFormatString: "MMMM YY",
				dataPoints
			}
		  ]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default App;  