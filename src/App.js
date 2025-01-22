import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './Style.css'
import Hello from './Hello';
import Timer from './Timer';
import SabtTime from './SabtTime';
import { TestContext } from './TestContext';




//روش اول: کامپوننت نوع کلاسی
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state ={
//       title:"This is a Props!"
//     }
//   }

//   handleSetTitle =()=>{
//     this.setState({
//       title:"Welcome To Site!"
//     })
//   }

//   render(){
//     return(
//       <div className='main'>
//         <h2>It is {new Date().toLocaleDateString()}</h2>
//         <Hello title={this.state.title}/>     
//         <Timer handleSetTitle={this.handleSetTitle}/>      
//       </div>
//     )
//   }
 
// }

// روش 2: کامپوننت های نوع تابعی (روش مناسبتر)
const App =()=>{
  const [title , setTitle]=useState("This is a Props!");
  const [isLight , setIsLight]=useState(false);
  const [timeArr , setTimeArr]=useState(["00:05:00","00:06:00"]);

  // const handleSetTitle=()=>{
  //   setTitle("Welcome To Site!")
  // }

  const handleSetIsLight=()=>{
    setIsLight(!isLight)
  }
   
  useEffect(()=>{
    console.log("useEffect");
    return()=>{
//انجام دستور بعد از بسته شدن صفحه،صورت می گیرد
    }
  },[isLight])

  return(
      // <TestContext.Provider value="white">
      <TestContext.Provider value={{
        timeArr:timeArr,
        setTimeArr:setTimeArr
      }}>
        <div className='main' style={{background:isLight ? "white": "black"}}>
            <h2>It is {new Date().toLocaleDateString()}</h2>
            <Hello title={title}/>     
            {/* <Timer handleSetTitle={handleSetTitle}/>       */}
            <Timer
            // timeArr={timeArr}
            // setTimeArr={setTimeArr} 
            isLight={isLight} handleSetIsLight={handleSetIsLight}/>
  
          </div>
      </TestContext.Provider>
          

        )
}
export default App;