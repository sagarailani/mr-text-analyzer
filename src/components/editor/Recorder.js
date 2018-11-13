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

export default class Recorder extends React.Component {
	
	constructor() {
		super();
		this.state = {editorState: EditorState.createEmpty()};
		this.focus = () => this.refs.editor.focus();		
		this.onChange = (editorState) => this.setState({editorState});		
		this.sendAudioBlob = async(audioBlob) => {
			console.log(audioBlob);
			var fd = new FormData();			
			fd.append("audioFile", audioBlob);
			const response = fetch('http://127.0.0.1:5000/speech-to-text/', {
				method: "POST",
				body: fd
			});			
		};
	}

	recordVoice() {
		var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		var recognition = new SpeechRecognition();
		var text='';
		// var startRecording = document.getElementById("start-recording");
		var stopRecording = document.getElementById("stop-recording");
		recognition.start();
		recognition.onresult = (event) => {
			var current = event.resultIndex;
			var transcript = event.results[current][0].transcript;
			text += transcript;			
		};
		// startRecording.addEventListener('click', () => {
		// recognition.start();
		// });
		stopRecording.addEventListener('click', () => {
			console.log("Testing");
			recognition.stop();
			const contentState = ContentState.createFromText(text);
			const updatedEditorState = EditorState.createWithContent(contentState);
			this.setState({editorState: updatedEditorState});
			console.log(text);						
		});
	}

	// recordVoice() {
	// 	var stopRecording = document.getElementById("stop-recording");
	// 	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	// 	const context = new AudioContext();
	// 	console.log("Im here");
	// 	navigator.mediaDevices.getUserMedia({audio:true, video:false}).
	// 	then((stream) => {			
	// 		const mediaRecorder = new MediaRecorder(stream);
	// 		mediaRecorder.start();
	// 		const audioChunks = [];
	// 		mediaRecorder.addEventListener("dataavailable", event => {
	// 			audioChunks.push(event.data);
	// 		});			
		
	// 		mediaRecorder.addEventListener("stop", () => {
	// 			const audioBlob = new Blob(audioChunks);
	// 			console.log(audioBlob);
	// 			this.sendAudioBlob(audioBlob);
	// 			const audioURL = URL.createObjectURL(audioBlob);
	// 			const audio = new Audio(audioURL);				
	// 			audio.play();
	// 		});

	// 		stopRecording.addEventListener("click", () => {
	// 			mediaRecorder.stop();
	// 		});
	// 		// setTimeout(() => {mediaRecorder.stop();}, 3000);
	// 	});
	// }

	render() {		

		return(
			<div className="container">
				<h1>Recorder</h1>				
				<button id="start-recording" onClick={() => this.recordVoice()}>Record</button>
				<button id="stop-recording">Stop</button>
				<div style={editorStyle} onClick={this.focus}>
					<Editor 												
						editorState={this.state.editorState} 
						onChange={this.onChange}
						ref="editor"/>					
				</div>
			</div>
		);
	}
}