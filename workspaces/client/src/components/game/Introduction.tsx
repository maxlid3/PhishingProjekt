import useSocketManager from "@hooks/useSocketManager";
import { ClientEvents } from "@memory-cards/shared/client/ClientEvents";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { emitEvent } from "@utils/analytics";
import { Divider, Select } from "@mantine/core";
import GameCode from "./GameCode";

export default function Introduction() {
  const router = useRouter();
  const { sm } = useSocketManager();
  const [delayBetweenRounds, setDelayBetweenRounds] = useState<number>(2);

  useEffect(() => {
    if (router.query.lobby) {
      sm.emit({
        event: ClientEvents.LobbyJoin,
        data: {
          lobbyId: router.query.lobby,
        },
      });
    }
  }, [router]);

  const onCreateLobby = (mode: "solo" | "duo") => {
    sm.emit({
      event: ClientEvents.LobbyCreate,
      data: {
        mode: mode,
        delayBetweenRounds: delayBetweenRounds,
      },
    });

    emitEvent("lobby_create");
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl text-center">
        Willkommen bei unserem Phishing-Quiz!
      </h2>

      <Divider my="md" />

      <div className="mt-5 flex items-center flex-col gap-3">
        <button className="btn" onClick={() => onCreateLobby("duo")}>
          Lobby erstellen <br /> (Solo)
        </button>
        <GameCode/>
      </div>
    </div>
  );
}
