// import logo from './logo.svg';
import './App.css';
import React from 'react';

class Image extends React.Component {
  render() {
    return(
      <img src={this.props.url} alt='star-wars-image' className="star-wars-image" />
    )
  }
}

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      image: null,
      name: null,
      height: null,
      homeworld: null,
      species: null,
    }
  }
  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          image: data.image,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          species: data.species,
          loadedCharacter: true,
        })
      })
  }
  render() {
      return (
        <div>
          {
            this.state.loadedCharacter && //true
            <div>
                <span>
                  <Image url= {this.state.image} />
                </span>
                <h1>{this.state.name}</h1>
                <p>Height: {this.state.height} m</p>
                <p><a href={this.state.homeworld} className='homeworld-link'>Homeworld: {this.state.homeworld}</a></p>
                <p>Species: {this.state.species}</p>
              </div>  
          }
          <button 
            type='button' 
            onClick={() => this.getNewCharacter()} 
            className="btn"
          >
            Randomize Character
          </button>
        </div>
      )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;