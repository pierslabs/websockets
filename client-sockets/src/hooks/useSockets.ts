import { useCallback, useEffect, useMemo, useState } from 'react';
import { connect } from 'socket.io-client';
const { VITE_SOCKET_PATH } = import.meta.env;

export const useSocket = (serverPath: string | void) => {
  const [socket, setSocket] = <any>useState(null);
  const [online, setOnline] = useState(false);

  const connectSocket = useCallback(() => {
    const socketTemp = connect(VITE_SOCKET_PATH, {
      transports: ['websocket'],
      forceNew: true,
      autoConnect: true,
    });
    setSocket(socketTemp);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket]);

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket,
  };
};
