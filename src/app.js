/*jshint ignore: start*/
// NEED TO: Put in audio clips for noice, that's what she said, and awkward...
// Style selector buttons
// Make sure title text is readable
class Layout extends React.Component {
	constructor(props) {
		super(props);
		//this.handleButtonSound = this.handleButtonSound.bind(this);
		this.handleBtnSetState = this.handleBtnSetState.bind(this);
		this.state = {
			content: "OHHHHH!!!!",
			name: "oHHAudio"
		};
	}
	handleBtnSetState(buttonName, buttonContent) {
		this.setState(() => {
			return {
				name: buttonName,
				content: buttonContent
			};
		});
	}
	// handleButtonSound(sound) {
	// 	const ohh = document.getElementById('OHHAudio');
	// 	document.getElementById(sound).load();
	// 	document.getElementById(sound).play();	
	// }
	render() {
		return (
			<div>
			<h1>Virtual Hypeman</h1>
			<h4>For when you need that extra backup</h4>
			<Hypebutton content={this.state.content} name={this.state.name} />
			<div className="container">
			<div className="row">
			<Selectorbutton content="OHHHHH!!!!" name="oHHAudio" handleBtnSetState={this.handleBtnSetState} />
			<Selectorbutton content="Noice ;)" name="noiceAudio" handleBtnSetState={this.handleBtnSetState} />
			</div>
			<div className="row">
			<Selectorbutton content="That's What SHE Said" name="thatsWhatSheSaidAudio" handleBtnSetState={this.handleBtnSetState} />
			<Selectorbutton content="(Crickets)" name="cricketsAudio" handleBtnSetState={this.handleBtnSetState} />		
			</div>
			</div>							
			<Audio />
			</div>
		);
	}
}

class Hypebutton extends React.Component {
	constructor(props) {
		super(props);
		this.soundOhh = this.soundOhh.bind(this);
	}
	// Gets audio clips ID from the name prop that is passed down from Layout.
	// Layout name prop that is passed down must be exactly the same as the audios ID
	// Example: document.getElementById(name={this.props.name}) === document.getElementById('Audio We're Trying To Play')
	soundOhh(e) {
		let soundIdentity = e.target.name;
		document.getElementById(soundIdentity).load();
		document.getElementById(soundIdentity).play();		
		//this.props.handleButtonSound(soundIdentity);
	}
	render() {
		return (
		<div className="hype-button-div">
			<button className="hype-button" name={this.props.name} onClick={this.soundOhh}>{this.props.content}</button>			
		</div>
		);
	}
}

class Selectorbutton extends React.Component {
	constructor(props) {
		super(props);
		this.changeButton = this.changeButton.bind(this);
	}
	changeButton(e) {
		 let buttonName = e.target.name;
		 let buttonContent = e.target.innerHTML; 
		 this.props.handleBtnSetState(buttonName, buttonContent);
	}
	render() {
		return (
			<button className="selector-button" name={this.props.name} onClick={this.changeButton}>{this.props.content}</button>
		);
	}
}

// Holds audio clips
class Audio extends React.Component {
	render() {
		return (
			<div>
			<audio id="oHHAudio" src="../audio/ohhhh.mp3"></audio>
			<audio id="noiceAudio" src="../audio/noice.mp3"></audio>
			<audio id="thatsWhatSheSaidAudio" src="../audio/thats-what-she-said.mp3"></audio>
			<audio id="cricketsAudio" src="../audio/crickets.mp3"></audio>
			</div>
		);
	}
}

ReactDOM.render(<Layout />, document.getElementById('app'));
