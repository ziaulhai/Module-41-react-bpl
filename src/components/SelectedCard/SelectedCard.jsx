import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
  
    const handleRemove =()=>{
        removePlayer(player)
    }
    
    return (
         <div className='mt-4 border-2 border-gray-200 rounded-2xl p-3 flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src={player.player_image} className='h-[50px] w-[50px] rounded-xl' alt="" />
                    <div className='ml-2'>
                        <h1 className='font-bold'>{player.player_name}</h1>
                        <p className='text-xs'>{player.playing_role}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                   <img src="https://i.ibb.co.com/MDRnLjHZ/Frame.png" alt="" />
                </div>

            </div>
    );
};

export default SelectedCard;