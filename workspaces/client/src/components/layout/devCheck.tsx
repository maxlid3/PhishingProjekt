import { useRecoilState } from "recoil";
import { CurrentLobbyState } from "@components/game/states";

import useSocketManager from "@hooks/useSocketManager";

export default function DevCheck() {
  const [lobbyState, setLobbyState] = useRecoilState(CurrentLobbyState);
  const { sm } = useSocketManager();
  const clientId = sm.getSocketId()!;

  return (
    <div className="flex flex-col justify-center">
      <div onClick={() => console.log(lobbyState)} className="devButton">
        LobbyProps
      </div>
      <div onClick={() => console.log(clientId)} className="devButton">
        clientId
      </div>
      <div onClick={() => console.log("Test")} className="devButton">
        Punkte
      </div>
    </div>
  );
}
