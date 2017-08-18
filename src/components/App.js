import React, {Component} from 'react';
import '../styles/App.css';
import Vehicles from './Vehicles.js'

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props){
    super(props)

  this.state = {
    vehicles: [],
    value: '',
    pilot: '',
   }
  }

  _nameChange = event => {
    this.setState({
      pilot: event.target.value
    })
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  _submit = event => {
    event.preventDefault()
      const pilot= {
        pilot: this.state.pilot
      }
      // const pilot = this.state.planes;
      // pilot.push(piloting)
      //
      // this.setState({
      //   pilot: pilot,
      //   pilot: ""
      // })
  }
      /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    //)

      // let vehicles = this.state.vehicles.map(vehicles => {
      render() {
        return (
          <div className="App">
            <div className="container">
              <div className="jumbotron">
                <h1>Star Wars Ships</h1>
                <p>The Vehicles of Star Wars</p>
              </div>
              <div>
                <form onSubmit={this._submit} className="form">
                  <label>
                    <p>What's your name pilot?</p>
                    <input
                      onChange={this._nameChange}
                      type="text"
                      name="pilot"
                      value={this.state.pilot}
                    />
                  </label>
                  <p>Welcome {this.state.pilot}, you're needed at your station immediately.</p>
                </form>
              </div>
              <div>
                <Vehicles />
              </div>
            </div>
          </div>
      )
    }
  }

export default App;
