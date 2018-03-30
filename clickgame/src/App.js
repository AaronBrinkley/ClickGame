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
    WinCount: 0,
    LossCount: 0
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

    let WinValue = 0
    let LossValue = 0

    const pushedImages = this.state.pushedImages
    const images = this.state.images
    // const WinCount = this.state.WinCount
    // const LossCount = this.state.LossCount

    this.ShuffleImages(images)

    for (let index = 0; index < images.length; index++) {
      // const element = array[index];

      if (id !== images[index].id ) {

        // this.state.WinCount++

        WinValue++

        // pushedImages.push(id);

        this.setState({ 
          images,
          pushedImages,
          WinCount: WinValue

        });
    
        } else {

          // this.state.LossCount++

          this.setState({ 
            images,
            pushedImages,
            LossCount: LossValue
  
          });

        }
      
    }

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
        <Wins>{this.state.WinCount}</Wins>
        <Losses>{this.state.LossCount}</Losses>
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
