import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() { }

    setupSocketConnection() {
        this.socket = io();
    }
}

export default new SocketioService();