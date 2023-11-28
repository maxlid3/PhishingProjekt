import SocketManager from "@components/websocket/SocketManager";
import { ClientEvents } from '@memory-cards/shared/client/ClientEvents';

const socketManager = new SocketManager();
export function sendForceStartToServer(ForceStart: boolean): void {
    const GameState = { 
        event: ClientEvents.ForceStart,
        data: ForceStart };
    socketManager.emit(GameState);
  }
