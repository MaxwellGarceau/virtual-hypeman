"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*jshint ignore: start*/
// NEED TO: Put in audio clips for noice, that's what she said, and awkward...
// Style selector buttons
// Make sure title text is readable
var Layout = function (_React$Component) {
	_inherits(Layout, _React$Component);

	function Layout(props) {
		_classCallCheck(this, Layout);

		//this.handleButtonSound = this.handleButtonSound.bind(this);
		var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

		_this.handleBtnSetState = _this.handleBtnSetState.bind(_this);
		_this.state = {
			content: "OHHHHH!!!!",
			name: "oHHAudio"
		};
		return _this;
	}

	_createClass(Layout, [{
		key: "handleBtnSetState",
		value: function handleBtnSetState(buttonName, buttonContent) {
			this.setState(function () {
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

	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					"Virtual Hypeman"
				),
				React.createElement(
					"h4",
					null,
					"For when you need that extra backup"
				),
				React.createElement(Hypebutton, { content: this.state.content, name: this.state.name }),
				React.createElement(
					"div",
					{ className: "container" },
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(Selectorbutton, { content: "OHHHHH!!!!", name: "oHHAudio", handleBtnSetState: this.handleBtnSetState }),
						React.createElement(Selectorbutton, { content: "Noice ;)", name: "noiceAudio", handleBtnSetState: this.handleBtnSetState })
					),
					React.createElement(
						"div",
						{ className: "row" },
						React.createElement(Selectorbutton, { content: "That's What SHE Said", name: "thatsWhatSheSaidAudio", handleBtnSetState: this.handleBtnSetState }),
						React.createElement(Selectorbutton, { content: "(Crickets)", name: "cricketsAudio", handleBtnSetState: this.handleBtnSetState })
					)
				),
				React.createElement(Audio, null)
			);
		}
	}]);

	return Layout;
}(React.Component);

var Hypebutton = function (_React$Component2) {
	_inherits(Hypebutton, _React$Component2);

	function Hypebutton(props) {
		_classCallCheck(this, Hypebutton);

		var _this2 = _possibleConstructorReturn(this, (Hypebutton.__proto__ || Object.getPrototypeOf(Hypebutton)).call(this, props));

		_this2.soundOhh = _this2.soundOhh.bind(_this2);
		return _this2;
	}
	// Gets audio clips ID from the name prop that is passed down from Layout.
	// Layout name prop that is passed down must be exactly the same as the audios ID
	// Example: document.getElementById(name={this.props.name}) === document.getElementById('Audio We're Trying To Play')


	_createClass(Hypebutton, [{
		key: "soundOhh",
		value: function soundOhh(e) {
			var soundIdentity = e.target.name;
			document.getElementById(soundIdentity).load();
			document.getElementById(soundIdentity).play();
			//this.props.handleButtonSound(soundIdentity);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "hype-button-div" },
				React.createElement(
					"button",
					{ className: "hype-button", name: this.props.name, onClick: this.soundOhh },
					this.props.content
				)
			);
		}
	}]);

	return Hypebutton;
}(React.Component);

var Selectorbutton = function (_React$Component3) {
	_inherits(Selectorbutton, _React$Component3);

	function Selectorbutton(props) {
		_classCallCheck(this, Selectorbutton);

		var _this3 = _possibleConstructorReturn(this, (Selectorbutton.__proto__ || Object.getPrototypeOf(Selectorbutton)).call(this, props));

		_this3.changeButton = _this3.changeButton.bind(_this3);
		return _this3;
	}

	_createClass(Selectorbutton, [{
		key: "changeButton",
		value: function changeButton(e) {
			var buttonName = e.target.name;
			var buttonContent = e.target.innerHTML;
			this.props.handleBtnSetState(buttonName, buttonContent);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"button",
				{ className: "selector-button", name: this.props.name, onClick: this.changeButton },
				this.props.content
			);
		}
	}]);

	return Selectorbutton;
}(React.Component);

// Holds audio clips


var Audio = function (_React$Component4) {
	_inherits(Audio, _React$Component4);

	function Audio() {
		_classCallCheck(this, Audio);

		return _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).apply(this, arguments));
	}

	_createClass(Audio, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement("audio", { id: "oHHAudio", src: "../audio/ohhhh.mp3" }),
				React.createElement("audio", { id: "noiceAudio", src: "../audio/noice.mp3" }),
				React.createElement("audio", { id: "thatsWhatSheSaidAudio", src: "../audio/thats-what-she-said.mp3" }),
				React.createElement("audio", { id: "cricketsAudio", src: "../audio/crickets.mp3" })
			);
		}
	}]);

	return Audio;
}(React.Component);

ReactDOM.render(React.createElement(Layout, null), document.getElementById('app'));
