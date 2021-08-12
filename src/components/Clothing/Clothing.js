import './assets/scss/style.scss';
import React, { useState } from 'react';

function App() {
// ATM you need to manually add new items and update the total values per item 
const [dressupState, setDressupState] = useState({
  clothing: {current: 0, total: 5},
});

function next(item){
  let next_num = dressupState[item].current + 1
  // if next_num exceeds total, restart (set current to 0)
  let new_current = next_num < dressupState[item].total ? next_num : 0
  updateDressUp(item, new_current)
}

function updateDressUp(item,new_current){
  setDressupState({
    ...dressupState,
    [item]: {
      current: dressupState[item].current = new_current, 
      total: dressupState[item].total
    }
  })
}


return (
  <div className="App">
    <div id="container">
      <div id="background">
          <div id="body"></div>
          <div id="clothing" className={"clothing"+(dressupState["clothing"].current+1)} ></div>
      </div>
    </div>

    { Object.keys(dressupState).map((item) => 
        <input type="button" value={"next "+item} key={item} id={"next"+item} onClick={() => next(item)}/>
      )
    }

    

  </div>
);
}

export default App;
