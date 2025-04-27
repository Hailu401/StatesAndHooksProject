import { useState } from 'react'

import MyCounter from './Components/ClassBased/MyCounter'
import IncreaseDecreaseCount from './Components/FunctionalBased/IncreaseDecreaseCount'
import UseEffectForTitle from './Components/FunctionalBased/UseEffectForTitle'




function App() {
  // to display all component conditionally
    const [view, setView] = useState(0);

  const displayComp = () =>{
   
    setView((prevState)=>{
      // console.log(prevState);
      
      return (prevState + 1) % 3

    })

  }

  return (
    <>
      {/* <MyCounter/>
     <IncreaseDecreaseCount/>
     <UseEffectForTitle/> */}

      {/* second method */}
      <div>
        {view === 0 && <MyCounter />}
        {view === 1 && <IncreaseDecreaseCount />}
        {view === 2 && <UseEffectForTitle />}
        <div className='btn_container'>
          <button className="btn" onClick={displayComp}>
            {view === 0
              ? " Next to Question 3"
              : view === 1
              ? "Next to Question 4"
              : "Back to Question 1 & 2"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App
