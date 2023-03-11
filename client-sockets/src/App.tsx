import { useEffect, useState } from 'react';
import './App.css';
import { Manager } from 'socket.io-client';

function App() {
  const [isConnected, setIsConnected] = useState('offline');

  const manager = new Manager(import.meta.env.VITE_SOCKET_URL);
  const socket = manager.socket('/');

  const connect = socket.on('connect', () => {
    setIsConnected('online');
  });

  const disconnect = socket.on('disconnect', () => {
    setIsConnected('offline');
  });

  useEffect(() => {}, [socket]);

  return (
    <div className="App">
      <h1>Typescript sockets</h1>
      <h3>
        <span style={{ color: isConnected === 'online' ? 'green' : 'red' }}>{isConnected}</span>
      </h3>
    </div>
  );
}

export default App;
