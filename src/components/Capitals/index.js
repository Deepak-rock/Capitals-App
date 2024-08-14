import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getActiveCapitalId = () => {
    const {activeCapitalId} = this.state
    const activeCountryAndCapitals = countryAndCapitalsList.find(
      eachId => eachId.id === activeCapitalId,
    )
    return activeCountryAndCapitals.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getActiveCapitalId(activeCapitalId)
    return (
      <div className="app-container">
        <div className="question-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capital-select">
            <select
              className="capital"
              value={activeCapitalId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(capital => (
                <option className="option" key={capital.id} value={capital.id}>
                  {capital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
