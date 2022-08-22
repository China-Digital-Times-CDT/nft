import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() { }

    setupSocketConnection() {
        this.socket = io();
        this.socket.emit('my message', 'Hello there from Vue.');
    }
}

export default new SocketioService();