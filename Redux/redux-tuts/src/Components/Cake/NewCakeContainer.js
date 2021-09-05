import { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux";

const NewCaceContainer = (props) => {
   const [num,setNum]= useState(1)
    return ( 
        <>
        <h2>number of Cake-{props.numOfCakes}</h2>
        <input type='number' value={num} onChange={e=>setNum(e.target.value)} />
        <button onClick={()=>props.buyCake(num)}> Buy {num} Cakes</button>
        </>
     );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: num => dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewCaceContainer) ;