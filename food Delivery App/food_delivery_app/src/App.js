import Header from './components/Header';
import './App.css';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}




export default App;
