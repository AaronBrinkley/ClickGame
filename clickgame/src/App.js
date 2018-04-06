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
  // Setting this.state.friends to the friends json array
  state = {
    images,
    PushedImages: [],
    Score: 0,
    TopScore: 0
  };


    ShuffleImages = array => {
    
    var ctr = array.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
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
    
    // const WinCount = this.state.WinCount
    // const LossCount = this.state.LossCount
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

    // for (let index = 0; index < images.length; index++) {
    //   // const element = array[index];

    //   if (id !== images[index].id ) {

    //     // this.state.WinCount++

    //     WinValue++

    //     // pushedImages.push(id);

    //     this.setState({ 
    //       images,
    //       PushedImages,
    //       WinCount: WinValue

    //     });
    
    //     } else {

    //       // this.state.LossCount++

    //       this.setState({ 
    //         images,
    //         PushedImages,
    //         LossCount: LossValue
  
    //       });

    //     }
      
    // }

    // const imageArray = this.state.images

    
    
    //if else statement
    // const images = this.state.images.map(image => images.id !== id); ? (
      
    // 

    //  ) : (
    //   // Filter this.state.friends for friends with an id not equal to the id being removed
    // const images = this.state.images.filter(image => images.id !== id);

    // ShuffleImages(images)
    // // Set this.state.friends equal to the new friends array
    // this.setState({ images });

    //  )
    

    
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    // let answer
    // //sophisticate condition
    // if  (this.state.WinCount++) {
      
    //   answer = "Correct"
    
    // }

    // if  (this.state.LossCount++) {
      
    //   answer = "Wrong"
    
    // }
    
    // const div = isLoggedIn ? (
    //   <LogoutButton onClick={this.handleLogoutClick} />
    // ) : (
    //   <LoginButton onClick={this.handleLoginClick} />
    // );

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
            occupation={image.occupation}
            location={image.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
