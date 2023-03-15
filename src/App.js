import React from 'react';
import {useRoutes} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
  const routes = useRoutes();

  return (
    <div>
      <Provider store={store}>
        <Router>
          {routes}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
