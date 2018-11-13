import React from 'react';
import {Editor, EditorState, ContentState} from 'draft-js';

const editorStyle = {	
	fontSize: '18px',
	border: '1px solid #E1E1D0',
	background: '#F4F2EE',	
	cursor: 'text',
	height: '65vh',
	width: '100%',
	padding: '10px',
};

const submitStyle = {
	background: "#5c008d",
	color: 'white',
	border: '1px solid #E1E1D0',
	'font-size': '3vh',
	'margin-top': '2vh',
	'font-weight': '100',
	'margin-right': '2vh'
};

export default class TextEditor extends React.Component {

	constructor(props) {
		super(props);
		this.state = {editorState: EditorState.createEmpty()};
		this.focus = () => this.refs.editor.focus();		
		this.onChange = (editorState) => this.setState({editorState});
		this.extractText = async() => {
			let text = this.state.editorState.getCurrentContent().getPlainText();						
			const textresponse = await fetch('http://127.0.0.1:5000/spellchecker/', {
				method: "POST",				
				headers: {"Content-Type":"application/json"},
				body: JSON.stringify({text}),
			});				
			const content = await textresponse.json();
			const contentState = ContentState.createFromText(content.text);
			const updatedEditorState = EditorState.createWithContent(contentState);
			this.setState({editorState: updatedEditorState});
		};		
	}

	render() {		
		return(
			<div className="container">				
				<div style={editorStyle} onClick={this.focus}>
					<Editor 												
						editorState={this.state.editorState} 
						onChange={this.onChange}
						ref="editor"/>					
				</div>
				<button style={submitStyle} className="btn navbar-right" onClick={this.extractText}>Submit</button>
			</div>
		);
	}

}