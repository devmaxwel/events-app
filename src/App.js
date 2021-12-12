import { Route, Switch } from "react-router-dom";
import AllEvents from "./Pages/AllEvents";
import Favourites from "./Pages/Favourites";
import NewEvents from "./Pages/NewEvents";

function App() {
  return (
     <Switch>
       <Route path='/' exact={true}>
             <AllEvents />
          </Route>
             
       <Route path='/new-events'>
             <NewEvents />
          </Route>

          <Route path='/favourites'>
            <Favourites />
             </Route>
     </Switch>
  );
}

export default App;
