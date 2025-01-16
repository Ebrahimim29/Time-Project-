import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './Style.css'
import Hello from './Hello';
import Timer from './Timer';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      title:"This is a Props!"
    }
  }

  handleSetTitle =()=>{
    this.setState({
      title:"Welcome To Site!"
    })
  }

  render(){
    return(
      <div className='main'>
        <h2>It is {new Date().toLocaleDateString()}</h2>
        <Hello title={this.state.title}/>     
        <Timer handleSetTitle={this.handleSetTitle}/>      
      </div>
    )
  }
 
}

export default App;