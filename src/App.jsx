import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import NavBar from './components/NavBar/NavBar'
import PlayerCard from './components/PlayerCard/PlayerCard'
import SelectedCard from './components/SelectedCard/SelectedCard'

const fetchPlayer = async () => {
  const res = await fetch("/players.json")
return res.json()


}
 const playerPromise = fetchPlayer()

function App() {

  const [toggle, setToggle] = useState(true)
 
  const [availAbleBalance, setAvailableBalance] = useState (1000000000)

  const [purchasedPlayers, setpurchasedPlayers] = useState([])

  const removePlayer = (p) =>{
    const filterData = purchasedPlayers.filter(ply=>ply.player_name!==p.player_name)

    console.log(p)
    setpurchasedPlayers(filterData)
    setAvailableBalance(availAbleBalance+parseInt(p.price.split("BDT").join("")))
  }
  

  return (
    <>
      <NavBar availAbleBalance={availAbleBalance}></NavBar>
      
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
              <h1 className='font-bold text-2xl'>{
                toggle===true?"Available Players":`Selected (${purchasedPlayers.length}/6)`
                }</h1>
              <div className='font-bold'>
                <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?"bg-yellow-300":""}`}>Available</button>
                <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 border-l-0 rounded-r-2xl ${toggle===false?"bg-yellow-300":""}`}>Selected <span>({purchasedPlayers.length})</span></button>
              </div>
        </div>

      {
         toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl flex justify-center items-center min-h-screen mx-auto"></span>}>
        <AvailablePlayers purchasedPlayers={purchasedPlayers} setpurchasedPlayers={setpurchasedPlayers} availAbleBalance={availAbleBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
        </Suspense>:<SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>

      }


        
     

      {/* <SelectedPlayers></SelectedPlayers> */}


    </>
  )
}

export default App
