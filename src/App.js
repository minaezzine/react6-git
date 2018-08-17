import React, { Component } from 'react';
import './App.css';
import Box from './Components/box';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        
        <h1 className="App-title">Notre équipe</h1>
      <div>
      <Box  color1="bleu" color2="yellow" value="h"img=".\res/image1.jpg" name='yahya bouhlel' des1="Founder" des2="CEO"/>
      &nbsp;&nbsp;&nbsp;
      <Box  color1="bleu" color2="yellow"value="h"img=".\res/image2.jpg"  name='Amin bouhlel' des1="Founder" des2="COO"/>
      &nbsp;&nbsp;&nbsp;
      <Box color1="bleu" color2="yellow" value="f"img=".\res/image3.jpg" name='Arsslen Idadi' des1="SOFTWARE ENGINEER" des2="PART TIME PRG:MANAGER"/>
      &nbsp;&nbsp;&nbsp;
      <Box color1="bleu" color2="yellow" value="f"img=".\res/image4.jpg"  name='yahya bouhlel' des1="FULL TIME PROGRAM" des2="MANAGER"/>
      </div>
     
       <header className="App-header"></header>
 </div>
    );
  }
}
export default App;
