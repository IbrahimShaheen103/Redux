import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../../redux";

const HooksIceCream = () => {
    const numOfIceCream =useSelector(state=>state.iceCream.numOfIceCreams);
    const dispatch =useDispatch();
    return ( 
        <div>
            <h2>Num Of Ice Cream -{numOfIceCream}</h2>
            <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
     );
}
 
export default HooksIceCream;