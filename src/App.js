import { Route, Switch } from "react-router-dom";
import AllEvents from "./Pages/AllEvents";
import Favourites from "./Pages/Favourites";
import NewEvents from "./Pages/NewEvents";
import Layout from "./Components/Layout/Layout";

const App=()=> {
  return (
    <>

        <Layout>

          <Switch>
            <Route path='/' exact>
                  <AllEvents />
                </Route>
                  
            <Route path='/new-events'>
                  <NewEvents />
                </Route>

                <Route path='/favourites'>
                      <Favourites />
                    </Route>
          </Switch>

        </Layout>

     </>
  );
}

export default App;
