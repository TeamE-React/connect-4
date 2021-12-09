import React, { useContext, useState, useEffect } from 'react';

// Styling
import styles from '../../styles/Home.module.css';

// Components
import AppContext from '../../contexts/AppContext';

const PlayersInfo = () => {
  const { playersList } = useContext(AppContext);
  const [oddPlayer, setOddPlayer] = useState([]);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < playersList.length; i++) {
      if ((i + 1) % 2 !== 0) {
        array.push(playersList[i]);
      }
    }
    setOddPlayer(array);
  }, []);

  return (
    <div className={styles.players_container} style={{ marginLeft: '1rem' }}>
      {oddPlayer.map((player) => {
        return (
          <div
            className={styles.players_info}
            dangerouslySetInnerHTML={createMarkup(player, playersList)}
          />
        );
      })}
    </div>
  );
};

const createMarkup = (player, playersList) => {
  return {
    __html: `
              <p>
                Player ${playersList.indexOf(player) + 1}:&nbsp;
              </p>
              <p style="margin: 0.5rem">${player.name}</P>
              <div>
                <Image
                  src="/images/ball-${player.color}.min.svg"
                  width="20px" height="20px"
                />
              </div>
            `,
  };
};

export default PlayersInfo;
