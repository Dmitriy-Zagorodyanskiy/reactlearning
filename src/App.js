import React from 'react';
import Header from './components/header';
import Image from "./components/image"
import logo from "./img/logo.png"

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      helpText: "Help Text",
      userData: ""
    }

    // this.inputClick = this.inputClick.bind(this)
  }

  render() {
    return (<div className='name'>
    <Header title="titleHead" />
    <h1>{this.state.helpText}</h1>
    <h2>{this.state.userData}</h2>
    <input placeholder={this.state.helpText}
      value={this.state.userData}
      onChange={event => this.setState({userData: event.target.value})}
      onClick={this.inputClick} onMouseEnter={this.mouseOver} />
      <p>{this.state.helpText == "Help Text" ? "Yes" : "No"}</p>
      <Image image={logo} />
    </div>)
  }

  inputClick = () => {
    this.setState({helpText: "changed"})
    console.log("Clicked")
  }
  mouseOver = () => {console.log("Mouse Over")}
}

export default App;