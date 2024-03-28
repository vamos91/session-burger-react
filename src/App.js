import React, { useState } from "react";
import Burger from './Burger'
import './App.css'

const App = () => {
  const [burgerName, setBurgerName] = useState('')
  const [sauce, setSauce] = useState([])
  const burgerNames = ['Le new yorker', 'Le chicken', 'Le veggie']
  const getInfoFromChild = (burger) => {
    setBurgerName(burger)
  }

  const addSauce = (mySauce) => {
    if (!sauce.includes(mySauce)) {
      setSauce([...sauce, mySauce])
    } 
  }

  return(
   <div>
      Vous avez commandé le burger: {burgerName}
      <div>
        <p>Choisissez votre sauce: {sauce.join(',')}</p>
        <button onClick={() => addSauce('Ketchup')}>Ketchup</button>
        <button onClick={() => addSauce('Mayo')}>Mayo</button>
      </div>
    <div className="burgers">
        {
          burgerNames.map((e) => (
            <Burger burgerName={e} handleClickParent={getInfoFromChild}/>
          ))
        }
    </div>
    </div>
  )
}

export default App;