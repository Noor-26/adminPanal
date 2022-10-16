import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Contents/Home/Home';

function App() {
  
  return (
    <div className="App">
<Routes>
<Route
              path="/"
              element={<SideNav />
              }
            >
              <Route index element={<Home />} />
          
              
            </Route>
</Routes>
    </div>
  );
}

export default App;
