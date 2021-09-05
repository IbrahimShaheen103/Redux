import './App.css'
import { Provider } from 'react-redux';
import  store  from "./redux/store";

import CakeContainer from './Components/Cake/CakeContainer'
import NewCakeContainer from './Components/Cake/NewCakeContainer'
import HooksCakeContainer from './Components/Cake/HooksCakeContainer';

import IceCreamContainer from './Components/IceCream/IceCreamContainer';
import HooksIceCream from './Components/IceCream/HooksIceCream';
import NewIceCreamContainer from './Components/IceCream/NewIceCremContainer';

import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/Users/UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer iceCream/>
        <hr/>
        <CakeContainer />
        <IceCreamContainer/>
         <hr/>
        <h4>redux with hooks </h4>
        <HooksCakeContainer />
        <HooksIceCream/>
        <hr/>
        <h4>Payload</h4>
        <NewCakeContainer />
        <h4>payload with hooks</h4>
        <NewIceCreamContainer/>
      </div>
      <hr/>
      <UserContainer/>
    </Provider>

  );
}

export default App;
