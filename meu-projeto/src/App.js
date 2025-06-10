import React from 'react';
import Button from './components/Button';
import Contador from './components/Contador';

const App = () => {
  return (
    <div>
      <h2> Aula sobre componentes </h2>
      <Button label="Clique aqui" />
      <Button label="Enviar" />

      <div>
        <Contador></Contador>
      </div>
    </div>

  );
};

export default App;