import React, {Component} from "react";
import "./box.css";
class Box extends Component{
	render() {
		
// 		if(this.props.value === "h"){
// 			{`box ${this.props.color1}`}</border>
// 		}else{
// <div id =''border>{`box ${this.props.color2}`}</div>
// 		}
// 		}
        return(
        <div className="box">
				{this.props.value==='h' ? 				
				<img src={this.props.img}  style={{"border" : "3px solid blue"}} height="360px" width="300px"/>:				
				<img src={this.props.img}  style={{"border" : "3px solid yellow"}} height="360px" width="300px"/>
} 

				<center>{this.props.name}</center>
				<p>{this.props.des1}</p>
				<p>{this.props.des2}</p>
			</div>
			);
	}
}

export default Box;