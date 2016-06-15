import React from 'react'
import ReactDOM from 'react-dom'



module.exports = class recentImgs extends React.Component {
	constructor(props){
    	super(props)
	}


	render (){
	    return (
	    	<div id="fruit-pane" onClick={this.props.onClick}>>
					<table>
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td id="a" onClick={this.props.onClick}></td>
							<td id="b"></td>
							<td id="c"></td>
							<td id="d"></td>
							<td id="e"></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td id="f" ></td>
							<td id="g"></td>
							<td id="h"></td>
							<td id="i"></td>
							<td id="j"></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td id="k" ></td>
							<td id="l"></td>
							<td id="m"></td>
							<td id="n"></td>
							<td id="o"></td>
							<td></td>
						</tr>
						</tbody>
					</table>

	    	</div>
	   	)
	}
}
