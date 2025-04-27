import React, {useState} from "react";

function IncreaseDecreaseCount() {
const [count, setCount] = useState(0);

const Increase = ()=>{
    setCount((prevCount)=>{
       return prevCount + 1
    })
}

const Decrease = () => {
  setCount((prevCount) => {
    return prevCount - 1;
  });
};

const Reset = ()=>{
    setCount((prevCount)=>{
        return prevCount = 0
    })
}

  return (
    <div>
      <div className="container">
        <h3>Question 3</h3>
        <div>
          <h1>Initial click count : {count}</h1>
        </div>
        <div>
          <button className="btn" onClick={Increase}>
            Increase Count
          </button>
          <button className="btn" onClick={Decrease}>
            Decrease Count
          </button>
          <button className="btn" onClick={Reset}>
            Reset Count
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncreaseDecreaseCount;
