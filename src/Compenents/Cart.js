
import {Balance} from './Balance'

const About= props => {


  const ItemList =  (props.location && props.location.ItemList) || [];
  console.log(ItemList)
    return (
      <div>
      <h1> Cart </h1>
      <Balance />

      </div>
    );
  }
  
  export default About;