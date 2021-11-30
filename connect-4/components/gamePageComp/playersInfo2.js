import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../contexts/AppContext";

// Styling
import styles from "../../styles/Home.module.css";

const PlayersInfo = () => {
  const { playersList } = useContext(AppContext);
  const [evenPlayer, setEvenPlayer] = useState([]);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < playersList.length; i++) {
      if ((i + 1) % 2 === 0) {
        array.push(playersList[i]);
      }
    }
    setEvenPlayer(array);
  }, []);

  return (
    <div className={styles.players_info} style={{ marginRight: "1rem" }}>
      {evenPlayer.map((player) => {
        return (
          <div dangerouslySetInnerHTML={createMarkup(player, playersList)} />
        );
      })}
    </div>
  );
};

const createMarkup = (player, playersList) => {
  return {
    __html: `
              <table>
                <tr>
                  <td>
                    <p style="width: 70px">
                      Player ${playersList.indexOf(player) + 1}: ${player.name}
                    </p>
                  </td>
                  <td>
                    <Image
                    src="/images/ball-${player.color}.min.svg"
                    width="20px" height="20px"
                  />
                  </td>
                </tr>
              </table>
            `,
  };
};

export default PlayersInfo;
