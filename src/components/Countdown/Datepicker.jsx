import React, { Component } from 'react'
import moment from 'moment'

class Datepicker extends Component {

  state = {
    date: '',
  }

  handleChange = (e) => {
    // console.log (e.target.value)
    this.setState({
      date: e.target.value
    })
  }

  handleDateSubmit = (e) => {
    e.preventDefault()
    console.log ( this.state)
    this.props.onDateReset( moment (this.state.date) ) 
  }

  render() {
    const { date } = this.state
    return <form onSubmit={ this.handleDateSubmit }>
      <div className="field is-grouped is-grouped-centered" style={{ marginBottom: 30 }}>
        <p className="control">
          <input className="input is-rounded is-medium"
            type="text"
            value={date}
            onChange={this.handleChange}
            placeholder="Find a repository" />
        </p>
        <p className="control">
          <button className="button is-light is-rounded is-outlined is-medium">
            Reset
        </button>
        </p>
      </div>
    </form>
  }
}

export default Datepicker