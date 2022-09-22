import Header from './components/Header'
import Form from './components/Form'
import GuestsList from './components/GuestsList'
import { useState, useEffect } from 'react'

function App() {

  const [guests, setGuests] = useState([])
  const [guest, setGuest] = useState({})

  useEffect(()=>{
    const getLocalStorage = () =>{
      const guestLS = JSON.parse(localStorage.getItem('guests')) ?? []
      setGuests(guestLS)
    }
    getLocalStorage()
  },[])

  useEffect(() => {
    localStorage.setItem('guests', JSON.stringify(guests))
  }, [guests])


  const deleteGuest = id => {
    const guestAct = guests.filter(guest => guest.id !== id)
    setGuests(guestAct)
  }

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className='mt-5 md:flex'>
        <Form
          guests={guests}
          setGuests={setGuests}
          guest={guest}
          setGuest={setGuest}
        />
        <GuestsList
          guests={guests}
          setGuest={setGuest}
          deleteGuest={deleteGuest}
        />
      </div>

    </div>
  )
}

export default App
