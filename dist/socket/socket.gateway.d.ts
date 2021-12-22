import { Server } from 'socket.io';
export declare class SocketGateway {
    server: Server;
    listenForMessages(data: string): void;
}
