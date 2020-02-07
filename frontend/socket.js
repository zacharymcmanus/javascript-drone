import io from 'socket.io-client';

// url for connecting to backend
const socket = io('http://localhost:6767');

export default socket;
