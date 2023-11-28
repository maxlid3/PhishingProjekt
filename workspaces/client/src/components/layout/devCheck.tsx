import { useRecoilState } from "recoil";
import { CurrentLobbyState } from "@components/game/states";

import useSocketManager from "@hooks/useSocketManager";
//TODO setLobbyState unused, intentionally?
export default function DevCheck() {
  const [lobbyState, setLobbyState] = useRecoilState(CurrentLobbyState);
  const { sm } = useSocketManager();
  const clientId = sm.getSocketId()!;
//TODO as already mention, why missuse a div? <a> or <button> are designed for this
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
