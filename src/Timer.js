import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './Style.css'

var interval;

class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        // time: 10
        time: new Date().toLocaleTimeString()
      }
    }
    componentDidMount(){
        // console.log("componentDidMount");
        
         interval=setInterval(()=>{
            this.setState({
              // time: this.state.time - 1
              time: new Date().toLocaleTimeString()
            })
          },1000)
    }
    componentDidUpdate(){
        // console.log(this.state.time);
        if(this.state.time === 0){
            clearInterval(interval);
        }
        
    }
    componentWillUnmount(){

    }
    render(){
        console.log("render");
        
      return(
        <>
          <h2 className='timer'>It is {this.state.time}</h2>
          <button onClick={this.props.handleSetTitle}>Change</button>
        </>
      )
    }
  }

  export default Timer;
  