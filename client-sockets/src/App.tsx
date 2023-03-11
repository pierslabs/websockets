import './App.css';

import { useEffect } from 'react';
import { useSocket } from './hooks/useSockets';

function App() {
  const { connectSocket } = useSocket();

  useEffect(() => {
    console.log('connected');
    connectSocket();
  }, [connectSocket]);

  return (
    <div className="App">
      <h1>Typescript sockets</h1>
      <h3>
        {/* <span style={{ color: isConnected === 'online' ? 'green' : 'red' }}>
          {isConnected === 'online' ? 'online' : 'offline'}
        </span> */}
      </h3>
      <h3>userID: </h3>
    </div>
  );
}

export default App;
