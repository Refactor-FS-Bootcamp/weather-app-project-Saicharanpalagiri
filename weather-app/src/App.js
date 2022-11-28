import './App.css';
import Header from './components/Header'
import Sider from './components/Sider';
import Navbar from './components/Navbar';
import City from './components/City';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
const sideCon=[
  {
    item:"Home",
    active:"Active"
  },
  {
    item:"Cities"
  }
]

function App() {
  return (
    <div className="App">
     
       <Router>
        <Navbar/>
        <div className='routes'>
        <Routes>
        <Route exact path='/' element={ <Home/> }/>
        <Route exact path='/cities' element={ <City/>}/>
        </Routes>
        </div>
       </Router>
    {/* <Sider sideCon={sideCon}/> */}
</div>
   );
}

export default App;
