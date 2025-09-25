import React, { useState } from 'react';
import userIcon from '../../assets/userIcon.png'
import flag from '../../assets/flag.png'
const PlayerCard = ({player, setAvailableBalance, availAbleBalance, setpurchasedPlayers, purchasedPlayers}) => {
     
    const [isSelected, setIsSelected] = useState (false)

 const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("BDT").join(""))

    if (availAbleBalance<playerPrice){
        alert("Not enough coins!!")
        return
    }
         setIsSelected(true)
        setAvailableBalance(availAbleBalance-playerPrice)

setpurchasedPlayers([...purchasedPlayers,playerData])
 }

    return (
       <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img src={player.player_image} className="w-full h-[250px] object-cover" alt="Shoes" />
  </figure>
  <div className="mt-4">
    <div className='flex'>
    <img src={userIcon} alt="" />
    <h2 className="card-title ml-2">{player.player_name}</h2>
  </div>
    
    <div className='flex justify-between mt-4 border-b-1 border-gray-400 pb-2'>
        <div className='flex items-center gap-2'>
            <img className='w-[18px] h-[18px]' src={flag} alt="" />
            <span>{player.player_country}</span>
        </div>
        
        <button className='btn rounded-2xl'>{player.playing_role}</button>

    </div>

    <div className="flex justify-between font-bold">
        <span>Rating:</span>
        <span>{player.rating}</span>
    </div>

    <div className="flex justify-between mt-4">
        <span className="font-bold">{player.bating_style}</span>
        <span>{player.bowling_style}</span>
    </div>



    <div className="card-actions mt-4 flex justify-between items-center">
        <p className='font-bold'>Price: {player.price}</p>
      <button disabled={isSelected} onClick={()=>{handleSelected(player)}} className="btn rounded-xl">{isSelected===true?"Selected":"Choose Player"}</button>
    </div>
  </div>
            </div>
    );
};

export default PlayerCard;