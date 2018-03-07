import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const socket = io.connect("http://node.alnassrnews.com/");
socket.on('message', msg => console.log(msg));
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
ReactDOM.render(
    <SocketProvider socket={socket}>
        <App />
    </SocketProvider>
, document.getElementById('root'));
registerServiceWorker();
