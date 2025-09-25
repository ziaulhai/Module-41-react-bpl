import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import SelectedCard from '../SelectedCard/SelectedCard';

const AvailablePlayers = ({playerPromise, setAvailableBalance, availAbleBalance, setpurchasedPlayers, purchasedPlayers}) => {
      
    const playerData = use(playerPromise)
    

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

        {
            playerData.map(player=> <PlayerCard setpurchasedPlayers={setpurchasedPlayers} purchasedPlayers={purchasedPlayers} availAbleBalance={availAbleBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>  )
        }
           
           




        </div>
    );
};

export default AvailablePlayers;