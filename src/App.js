import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import Main from "./components/layouts/main/Main";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Sidebar />
          <Main />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
