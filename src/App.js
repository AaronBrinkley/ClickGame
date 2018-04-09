import React, { Component } from 'react';
// import logo from './logo.svg';
import ImageCard from "./components/imageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Result from "./components/Result";
import Wins from "./components/Wins";
import Losses from "./components/Losses";
import images from "./images.json";
import './App.css';

class App extends Component {
  
  state = {
    images,
    PushedImages: [],
    Score: 0,
    TopScore: 0
  };


    ShuffleImages = array => {
    
    var ctr = array.length, temp, index;


    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
    return array;

    
  };

  checkCard = id => {

    let Score = this.state.Score
    let TopScore = this.state.TopScore

    let PushedImages = this.state.PushedImages
    let images = this.state.images
    let PushedIndex = PushedImages.indexOf(id)
    
    
    console.log(PushedIndex)

    

    if (PushedIndex === -1) {
      
      PushedImages.push(id)

      Score++
    
    } else {
      
      Score = 0

      PushedImages = []

    }

    if (Score > TopScore) {
      TopScore++
    }

    this.ShuffleImages(images)


        this.setState({ 
          images,
          PushedImages,
          Score,
          TopScore

        });

    

    
  };



  
  render() {

    

    return (
      <Wrapper>
        <Title>Click Game</Title>
        {/* <Result>{answer}</Result> */}
        <Wins>Score: {this.state.Score}</Wins>
        <Losses>TopScore: {this.state.TopScore}</Losses>
        {this.state.images.map(image => (
          <ImageCard
            checkCard={this.checkCard}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.photo}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
