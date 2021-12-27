
import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import UseEffect from '../useEffect';
import Home from './home';

const Rout = () => {
   return (
      <>
         <Router>
            <div>
               <ul>
                  <li>
                     <Link to="/home">Home</Link>
                  </li>
                  <li>
                     <Link to="/private">Next</Link>
                  </li>
               </ul>
            </div>
            <Switch>
               <Route path="/home">
                  <div style={{ position: 'absolute', left: '20%' }}>
                     <Home />
                  </div>
               </Route>
               <Route path="/private" element={<Private />}>
                  <div style={{ position: 'absolute', left: '20%' }}>
                     <UseEffect/>
                  </div>
               </Route>
            </Switch>
         </Router>
      </>
   );
}
const Private = () => <div>private grtht yhyth tyjytjht jhyjujgu jgtuwerwt uoldseqqr bto90p</div>;
export default Rout;