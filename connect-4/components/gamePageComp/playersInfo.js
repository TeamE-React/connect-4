import React, { useContext, useEffect } from "react";
// import { Box, Divider } from "@material-ui/core";
import AppContext from "../../contexts/AppContext";
import { SpaRounded } from "@material-ui/icons";
import styles from "../../styles/Home.module.css";

const createMarkup = (player, index) => {
  return {
    __html: `
              <table>
                <tr>
                  <th className={styles.players_info_table}>
                    <p>
                      Player ${index + 1}: ${player.name}
                    </p>
                  </th>
                  <th className={styles.players_info_table}>
                    <Image
                    src="/images/ball-${player.color}.min.svg"
                    width="20px" height="20px"
                  />
                  </th>
                </tr>
              </table>
            `,
  };
};

const PlayersInfo = () => {
  const { playersList } = useContext(AppContext);

  useEffect(() => {
    console.log(playersList);
    // console.log(playersList[0]);
    {
      playersList.map((player, index) => {
        console.log(player);
      });
    }
  }, []);
  return (
    <div className={styles.players_info}>
      {playersList.map((player, index) => {
        return <div dangerouslySetInnerHTML={createMarkup(player, index)} />;
      })}
    </div>
  );
};

export default PlayersInfo;
