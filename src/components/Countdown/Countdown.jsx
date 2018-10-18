import React, { Component } from 'react'
import moment from 'moment'
import Controls from './Controls'
import Datepicker from './Datepicker'

class Countdown extends Component {

  // same as setting constructor(prop) and super (prop) and then state
  state = {
    // duration: this.getRemainingTime(),
    currentDate: moment(),
    nextDate: moment({ year: moment().year() + 1 }),
    paused: false
  }

  componentDidMount() {
    this.resume();
  }

  componentWillUnmount() {
    this.pause()

  }

  getRemainingTime() {

    let { currentDate, nextDate } = this.state,
      diff = nextDate.diff(currentDate)
    return moment.duration(diff)
    // let now = moment(),
    //   newyear = moment({ year: now.year() + 1 }),
    //   diff = newyear.diff(now)
    // return moment.duration(diff)
  }

  // arrow => functions allows to bind parent this to function this.
  // also need async setState with prevState and props arguments 
  togglePaused = () => {
    console.log('Clicked !')
    this.setState((prevState, props) => {
      const paused = !prevState.paused
      if (paused) {
        this.pause()
      }
      else {
        this.resume()
      }
      return {
        paused
      }
    })
  }

  pause() {
    clearInterval(this.interval)
  }

  resume() {
    this.interval = setInterval(() => {
      this.setState({
        // duration: this.getRemainingTime()
        currentDate: moment()
      })
    }, 1000)
  }

  handleDateReset = (nextDate) =>  {
    console.log ( " Here i am here.", nextDate)
    this.setState ( {
      nextDate
    })
    
  }

  render() {

    //const duration = this.state.duration // same as below
    const { paused } = this.state,
      duration = this.getRemainingTime()

    return (
      <section className="hero is-info is-fullheight is-bold has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              New Year in Coming up.
            </h1>
            <h2 className="subtitle">
              2019 ~ Hurray!
            </h2>
            <div className="section">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title">
                      {Math.floor(duration.asDays())}
                    </p>
                    <p className="heading">Days</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title">
                      {duration.hours()}
                    </p>
                    <p className="heading">Hours</p>

                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title">
                      {duration.minutes()}
                    </p>
                    <p className="heading"> Minuntes  </p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title">
                      {duration.seconds()}
                    </p>
                    <p className="heading"> Seconds </p>
                  </div>
                </div>
              </nav>
            </div>
            <Datepicker onDateReset = { this.handleDateReset } />
            <Controls paused={paused} onPausedToggle={this.togglePaused} />
          </div>
        </div>
      </section>
    )
  }
}

// onPausedToggle passed from parent to child as function 

export default Countdown
