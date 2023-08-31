
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Homepage from './Components/Homepage';


 function App() {
    // const {state} = useContext(AuthContext);
    // console.log(state,"state here from context") 
      // const [name,setName] = useState("all")
      // console.log(name,"data");
  return (
    <div className="App">
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Homepage' element={<Homepage/>}/>


    </Routes>
  </div>
  );
}

export default App;

