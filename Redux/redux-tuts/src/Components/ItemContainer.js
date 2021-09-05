import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
    return ( 
        <div>
             <h2>Item  - {props.item}</h2>
             <button
             onClick={props.buyItem}
             >Buy Item</button>
        </div>
     );
}
 const mapStateToProps=(state,ownProp)=>{
     const itemState=ownProp.cake ? state.cake.numOfCakes:state.iceCream.numOfIceCreams;
     return{
         item:itemState
     }
 }
 const mapDispatchToProps=(dispatch,ownProps)=>{
     const dispatchFuntion= ownProps.cake?
     ()=>dispatch(buyCake())
     :()=>dispatch(buyIceCream())
     return{
         buyItem:dispatchFuntion
     }
 }
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);