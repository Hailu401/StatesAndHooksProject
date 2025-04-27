import { useState, useEffect } from "react"


function UseEffectForTitle() {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        alert("Component is mounted! This is from Question 4 please click ok");
    },[])

    useEffect(() => {
      document.title = `${counter} times Counted`;
    }, [counter]);

    const Increase = () => {
      setCounter((prevCounter) => {
        return prevCounter + 1;
      });
    };
    const Reset = () => {
      setCounter((prevCounter) => {
        return prevCounter = 0;
      });
    };

  return (
    <>
      <div className="container">
        <h3>Question 4</h3>
        <button className="btn" onClick={Increase}>
          Click here
        </button>

        <div>
          <h1>Counter Displayer : {counter} </h1>
        </div>

        {/* <button className="btn" onClick={Reset}>
          Reset
        </button> */}
      </div>
    </>
  );
}

export default UseEffectForTitle
