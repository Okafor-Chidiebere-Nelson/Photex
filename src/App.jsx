import React from 'react'
import "./App.css"
import Contact from './component/Contact'
// import number from "./images/number.jpg"
// import orangeGirl from "./images/orangeGirl.jpg"
// import number1 from "./images/number1.jpg" 
// import number3 from "./images/number3.jpg" 
// import Data from "./component/Data"
import number from "./images/number.jpg"
import number1 from "./images/number1.jpg"
import number2 from "./images/number2.jpg"
import number3 from "./images/number3.jpg"
import number4 from "./images/number4.jpg"
import number5 from "./images/number5.jpg"
import number6 from "./images/number6.jpg"
import number7 from "./images/number7.jpg"
import Header from './component/Header'


function App() {

  const Data =  [
    {
        img:`${number}`,name:"Mr Nelson", number:"(234)691 550 60",email:"nelson@gmail.com"
    },
    {
        img:`${number1}`,name:"Mr Charles", number:"(234)691 354 45",email:"charles@gmail.com"
    },
    {
        img:`${number2}`,name:"Mr Austin", number:"(234)691 550 45",email:"austin@gmail.com"
    },
    {
        img:`${number3}`,name:"Mr Alphonsus", number:"(234)634 565 66",email:"alphonsus@gmail.com"
    },
    {
        img:`${number4}`,name:"Mr Ekene", number:"(234)691 550 76",email:"ekene@gmail.com"
    },
    {
        img:`${number5}`,name:"Mrs Allison", number:"(234)691 550 69",email:"allison@gmail.com"
    },
    {
        img:`${number6}`,name:"Mrs Chimamanda", number:"(234)691 550 98",email:"chimamanda@gmail.com"
    },
    {
        img:`${number7}`,name:"Ms Victory", number:"(234)898 686 66",email:"victory@gmail.com"
    },
    ]
    
  const DataLIst = Data.map(({img,name,number,email})=>{
    return <Contact img={img} name ={name} number={number} email={email} />
    
  }) 
  return (
    <> 
      <Header/>
    <div className='app'>
     {DataLIst}
    </div>
    </>
   
  )
}
// function App() {
//   return (
//     <div className='app'>
//   <Contact img={number} name ="Mr Nelson Chidiebere" number="(234)691 550 60" email="nelson@gmail.com" />
//   <Contact img={orangeGirl} name ="Mr Charles Chiagbaizu" number="(234)691 660 34" email="charles@gmail.com" />
//   <Contact img={number1} name ="Mr Somtoo Alphonsus" number="(234)691 674 56" email="somtoo@gmail.com" />
//   <Contact img={number3} name ="Mr Austin Ezenwanne" number="(234)691 675 99" email="austin@gmail.com" />
//     </div>
//   )
// }

export default App
