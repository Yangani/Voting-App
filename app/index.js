var React = require('react');
var ReactDOM = require('react-dom');

var USER = {
	username:"Judas",
	imageURL: "https://avatars3.githubusercontent.com/u/13487454?v=3&s=460",
	hobby: "Swimming"
}

var Title = React.createClass({
	render: function () {
		return (
			<div>Hello {this.props.title}!</div>
		)
	}
});


var Image = React.createClass({
	render: function () {
		return <img src={this.props.image} style={{height:255, width: 255}}/>
	}
});



var Hobby = React.createClass({
	render: function () {
		return (
			<div>I love Swimming {this.props.hobby}!</div>
		)
	}
});

var Link = React.createClass({
	render: function () {
		var link = this.props.link
		return (
			<a href={"https://github.com/" + link}></a>
		) 
	}
});



var Profile = React.createClass({
	render: function () {
		return (
			<div>
				<Title title={this.props.user.username}/>
				<Image image={this.props.user.imageURL}/>
				<Hobby hobby={this.props.user.hobby}/>
				<Link link={this.props.user.username}/>
			</div>
		)
	}
});
 


ReactDOM.render(<Profile user={USER}/>, document.getElementById('app'));