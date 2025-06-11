import React from 'react';
import Button from './components/Button';
import Contador from './components/Contador';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddProduto from './components/AddProduto';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <h2> Aula sobre componentes e Routas</h2>
        <Button label="Clique aqui" />
        <Button label="Enviar" />
        <div>
          <Contador />
        </div>
        <nav>
          <a href="/">Home</a> <br/>
          <a href="/adicionar-produto">Adicionar Produto</a> <br/>
          <a href="/login">Login</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/adicionar-produto" element={<AddProduto/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;