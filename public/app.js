var NoteApp = React.createClass({
	render: function(){
		return (
			<div className="NoteApp col-md-6 col-lg-6 col-sm-8 col-xs-10">
				<SearchableTable notes={this.props.notes}/>
				<TextEditor notes={this.props.notes}/>

			</div>
		)
	}
});

var TextEditor = React.createClass({
	render: function(){
		return(
			<div className="TextEditor col-md-8 col-lg-8 col-sm-8 col-xs-12">
			<textarea className="textarea"/>
			</div>
			)
	}
});

var SearchableTable = React.createClass({
	render: function(){
		return (
			<div className="SearchableTable col-md-4 col-lg-4 col-sm-4 col-xs-4">
				<SearchField/>
				<NoteList notes={this.props.notes}/>
			</div>
			)
	}
});

var SearchField = React.createClass({
	render: function(){
		return(
			<input type="text" className="SearchField" />
			)
	}
});


var NoteList = React.createClass({
	render: function(){
		var titles = [];
		this.props.notes.forEach(function(note){
			titles.push(<IndivNote note={note} />)
		});

		return (
			<ul className='NoteList' > {titles} </ul>
			)

	}
});

var IndivNote = React.createClass({
	render: function(){
		return (
			<li>
				<p> {this.props.note.title} </p>
			</li>
		)
	}
});


var NOTES = [
 	{author: 'Amil', title: 'Amils Text1', text: 'This is Amil here and this is my text'},
 	{author: 'Per', title: 'Pers Text1', text: 'This is Per here and this is my text'},
 	{author: 'Ron', title: 'Rons Text1', text: 'This is Ron here and this is my text'},
 	{author: 'Amil', title: 'Amils Text2', text: 'This is Amil here and this is my text'},
 	{author: 'Per', title: 'Pers Text2', text: 'This is Per here and this is my text'},
 	{author: 'Ron', title: 'Rons Text2', text: 'This is Ron here and this is my text'}
];

React.render(<NoteApp notes={NOTES}/>, document.getElementById("content"));

//module.exports.NoteApp;
