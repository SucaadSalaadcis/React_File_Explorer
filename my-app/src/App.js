import React,{useState} from 'react'
// import Car from './components/car'
import './App.css'
// App is parent other inside app componnet is child
function App() {
  return (
    <div>
      {/* one component rendering multiple components as childerens 
       childerens kas oo ah array oo si ah within objects
      
      */}
    <Folder name='desktop'>
      <Folder name='music'>
      <File name='Somali_songs' />
      <File name='English_songs' />
      </Folder>
    <File name='dog.jpeg'/>
    <File name='cats.png'/>
  
    </Folder>
    <Folder name='Applications'/>
          
  
    <Hello/>
     {/* <Car/>
     */}
    </div>
  )
}

const Folder = (props) =>{
  // console.log(props)
//  console.log(useState())
  const [isOpen,setIsOpen] = useState(true);
  const {name,children} = props;
  const direction = isOpen? 'down':'right';

  const handleClick = () => setIsOpen(!isOpen);
  
  

  //  console.log(children)
 return <div>
  {/* <span onClick={() => setIsOpen(!isOpen)}>{name}</span> */}
  <span onClick={handleClick}>
    <i className='yellow folder icon'></i>
    <i className={`black caret ${direction} icon`}></i>
    {name}
    </span>
    

  <div style={{marginLeft: '17px'}}>
  {isOpen? children : null}
  </div>

 </div>
}

const File= (props) =>{
  const {name} = props;
  const fileExtention = name.split('.')[1];
  const fileIcons= {
    // mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
  }
  return <div>
     <i className={` ${fileIcons[fileExtention]} icon`}></i>
    {name}
  
    </div>

}




const Hello = ()=>{

  const [backgroundColor,setBackgroundColor]= useState('yellow') 
  const [textColor,setTextColor]= useState('red')
 
  const colo=()=>{
    setBackgroundColor("hotPink")
    setTextColor("black")
    // console.log("hi")
  }
  return (
    <div>
      <button onClick={colo}
       style={{
        backgroundColor:backgroundColor,
        color:textColor, 
        width:'100px' ,
        height: '50px',
        border: 'none',
        fontSize:'20px'
         
         }}>
        save
      </button>
    </div>
  )
}

export default App


// function App() {
//   return (
//     <div>
//       <Child title='Hello ReactJs' />
//     </div>
//   )
// }

// function Child(props) {
//   return (
//     //.props wuxu ku keyna all wxi attribute qabtid
//     <div>{props.title}</div>
//   )
// }
// export default App


/* import React from 'react'
// import {x as s,y} from './module'
import {default as Testing} from './module'

function App() {
  return (
    <div>{Testing()}</div>
  )
}
 */
/* 



import React, { useState } from 'react'
import Items from './components/Items'

function App() {
    const [state,setState] = useState(
      Items=[
        {id:'1', name:'suu' ,address:'madina'},
        { id:'2', name:'dudi', address:'wadajir'}
  
      ]
    )

  return (
    <div className='App'>
    List Items
    <Items  Items={Items} />
    </div>
  )
}

export default App */

/* 

import React from 'react'

function App() {
  const handleChange= (e) =>{
    console.log(e.target.value)
    // target:input
    
  // eventPhase:3
  } 
  return (
    <div className='App'>
      Form1
      <form>
        <input type='text' onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App */