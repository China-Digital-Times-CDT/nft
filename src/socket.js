import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() { }

    setupSocketConnection() {
        this.socket = io('http://localhost:8081');
    }
}

export default new SocketioService();