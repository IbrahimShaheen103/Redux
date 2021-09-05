import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../../redux";

const NewIceCreamContainer = () => {
    const[num,setNum]=useState(1);
    const numOfIceCreams=useSelector(state=>state.iceCream.numOfIceCreams);
    const dispatch=useDispatch()
    return ( 
        <>
        <h2>Number of IceCreams -{numOfIceCreams}</h2>
        <input type='number' value={num} onChange={e=>setNum(e.target.value)} />
        <button onClick={()=>dispatch(buyIceCream(num))}>Buy {num} IceCreams</button>
 </>
 );
}
 
export default NewIceCreamContainer;