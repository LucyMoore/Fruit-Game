import React from 'react'
import ReactDOM from 'react-dom'



module.exports = class recentImgs extends React.Component {
	constructor(props){
    	super(props)
	}


	render (){
	    return (
	    	<div id="fruit-pane" onClick={this.props.onClick}>
					<table>
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td id="a"></td>
							<td id="b"></td>
							<td id="c"></td>
							<td id="d"></td>
							<td id="e"></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td id="f" ></td>
							<td id="g"></td>
							<td id="h"></td>
							<td id="i"></td>
							<td id="j"></td>
							<td id="k"></td>
							<td id="l"></td>

						</tr>
						<tr>
							<td ></td>
							<td id="m"></td>
							<td id="n"></td>
							<td id="o"></td>
							<td id="p"></td>
							<td id="q"></td>
							<td id="r"></td>
							<td id="s"></td>
						</tr>
						<tr>
							<td ></td>
							<td id="t" ></td>
							<td id="u"></td>
							<td id="v"></td>
							<td id="w"></td>
							<td id="x"></td>
							<td id="y"></td>
							<td id="z"></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td id="aa"></td>
							<td id="bb"></td>
							<td id="cc"></td>
							<td id="dd"></td>
							<td id="ee"></td>
							<td></td>
						</tr>
						</tbody>
					</table>

	    	</div>
	   	)
	}
}
