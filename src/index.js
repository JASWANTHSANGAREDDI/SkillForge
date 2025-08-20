import {Component} from 'react'
 
class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const typeText = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'

    return (
      <div className="bgcontaine">
        <h1 className="head">Count {count}</h1>
        <p className="typeof">{typeText}</p>
        <button className="btn" onClick={this.onIncrement}>
          Increment
        </button>

         
      </div>
    )
  }
}

export default EvenOddApp
