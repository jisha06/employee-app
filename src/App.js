import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Employee/>} ></Route>
          <Route path='/addemployee' element={<AddEmployee/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
