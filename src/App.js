import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import Delete from './components/Delete';
import Search from './components/Search';
import ViewAll from './components/ViewAll';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/view' element={<ViewAll/>}/>
        <Route path='/' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
