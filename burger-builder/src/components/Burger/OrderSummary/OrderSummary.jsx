import React from 'react';
import Aux from '../../../hoc/Aux';
const orderSummary=(props)=>{
  const ingredientSummary=Object.keys(props.ingredients).map(igKey=>{
    return<li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey} :{props.ingredients[igKey]}</span> </li>
  })
return(
  <Aux>
  <h3>Your Order</h3>
  <p>A delicous burger with </p>
  <ul>
  {ingredientSummary}
  </ul>
<p>Continue checking out</p>
<button>CANCEL</button>
<button>CONTINUE</button>

  </Aux>
)
};

export default orderSummary
