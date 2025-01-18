import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './Style.css'

var interval;

class Timer extends React.Component{
    constructor(){
      super();
      this.state={
        hour:0,
        minute:0,
        second:0,
        isStart:false
      }
    }
    startInterval=()=>{
      if(this.state.isStart == false){
        this.setState({
          isStart:true
        })
        interval=setInterval(()=>{
          this.setState({
            second: this.state.second + 1            
          })
          if(this.state.second == 59){
            this.setState({
              second:0,
              minute:this.state.minute + 1
            })
          if(this.state.minute == 59){
            this.setState({
              minute:0,
              hour:this.state.hour + 1
            })
          }
          }
        },100)
      }
      }
      

    stopInterval=()=>{
      this.setState({
        isStart:false
      })
      clearInterval(interval);      
    }

    resetInterval=()=>{
      this.stopInterval();
      this.setState({
        hour:0,
        minute:0,
        second:0
      })
    }
    
    render(){
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        
      return(
        <>
          <h2 className='timer'>
            {/* {this.state.hour+":"+this.state.minute+":"+this.state.second} */}
            {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
          </h2>
          <div className='button_box'>
            <button onClick={this.props.handleSetTitle}>Change</button>
            <span className='action_button start_button' onClick={this.startInterval}>Start</span>
            <span className='action_button stop_button' onClick={this.stopInterval}>Stop</span>
            <span className='action_button reset_button' onClick={this.resetInterval}>Reset</span>
          </div>
        </>
      )
    }
  }

  export default Timer;
  