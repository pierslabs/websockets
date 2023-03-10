import { useEffect, useState } from 'react';
import './App.css';
import { Manager } from 'socket.io-client';

function App() {
  const [count, setCount] = useState(0);

  const manager = new Manager(import.meta.env.VITE_SOCKET_URL);
  const socket = manager.socket('/');
  useEffect(() => {}, [socket]);

  return (
    <div className="App">
      <h1>Typescript sockets</h1>
    </div>
  );
}

export default App;
