import './App.css';
import CheckOut from './CheckOut';

import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recommendation from './Recommendations';
import Login from './Login';
import CategoryPage from './CategoryPage';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
              
          <Route
            path="/"
            element={
              <>
                <Header />
         <Home />
         <CategoryPage/>
         
              </>
            }
          />
          
          <Route
            path="/checkout"
            element={
              <>
                <Header />
             <CheckOut/>
              </>
            }
          />
          <Route
            path="/recommendations"
            element={
              <>
                <Header />
               <Recommendation/>
                {/* Recommendations component can be added here */}
              </>
            }
          />

          <Route path='/login' element={
          <Login/>
          }/>


          <Route path="/under-299" element={<><Header /><CategoryPage /></>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
