import React from "react";

export class Home extends React.Component{
	constructor(props){						
		super();
		this.state={
			age:props.intialAge,
			homeLink:"Link changed"
		}

	};

	onMakeOlder(){
		this.setState({
			age:this.state.age+3
		});
	}
	onChangeLink(){
		this.props.changeLink(this.state.homeLink)
	}
	onHandleChange(event){

		this.setState({
			homeLink:event.target.value
		});
	}
	render() {
		return (
			<div>	
				<p>Your name is {this.props.name}, Your age is {this.state.age}</p>
				<button onClick={()=>this.onMakeOlder()} className="btn btn-primary">Make me Older!</button>	
				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary">Greet</button>
				<hr/>
				<input type="text" value={this.state.homeLink}
									onChange={(event)=>this.onHandleChange(event)}/>	
				<button onClick={()=>this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
				
			</div>		
		);
	}
}
Home.propTypes={
	name:React.PropTypes.string,
	intialAge:React.PropTypes.number,
	greet:React.PropTypes.func,
	initialLinkName:React.PropTypes.string
};
