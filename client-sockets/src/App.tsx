import './App.css';

import { useEffect } from 'react';
import { useSocket } from './hooks/useSockets';

function App() {
  const { connectSocket, online } = useSocket();
  console.log(online);
  useEffect(() => {
    console.log('connected');
    connectSocket();
  }, [connectSocket]);

  const messages = [
    { name: 'pier', message: ' hola que tal?' },
    { name: 'pasku', message: ' hola que tal?' },
    { name: 'lilian', message: ' hola que tal?' },
  ];

  return (
    <div className="container-fluid">
      <h1>Typescript sockets</h1>
      <hr />

      <div className="row">
        <div className="col-4">
          <form className="card p-3">
            <input type="text" placeholder="message" className="form-control mt-2 " />
            <button className="btn btn-primary mt-4">Send</button>
          </form>
        </div>

        {/*  */}
        <div className="col-8">
          <div className="container border border-primary p-4">
            <div className="border-light">
              {messages.map((msg) => (
                <div className="container p-1 m-2 bg-light " key={msg.name}>
                  <p className="text-primary text-start fw-light">{msg.name}</p>
                  <p className="text-start m-2 text-dark ">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
