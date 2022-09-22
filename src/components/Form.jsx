import React, { useState, useEffect } from "react"
import Error from "./Error"

const Form = ({ guests, setGuests, guest, setGuest }) => {

  const [name, setName] = useState('')
  const [card, setCard] = useState('')
  const [email, setEmail] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(guest).length > 0) {
      setName(guest.name)
      setCard(guest.card)
      setEmail(guest.email)
      setCheckIn(guest.checkIn)
      setCheckOut(guest.checkOut)
    }
  }, [guest])

  const generarId = () => {
    const random = Math.random().toString(36);
    const fecha = Date.now().toString(36)
    return random + fecha
}

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([name, card, email, checkIn, checkOut].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    const objGuest = {
      name, card, email, checkIn, checkOut
    }

    if(guest.id){
      objGuest.id = guest.id
      const guestAct = guests.map(guestState => guestState.id === guest.id? objGuest : guestState)
      
      setGuests(guestAct)
      setGuest({})
    }else{

      objGuest.id = generarId()
      setGuests([...guests, objGuest])
    }

    setName('')
    setCard('')
    setEmail('')
    setCheckIn('')
    setCheckOut('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Guest input</h2>
      <p className='text-lg mt-3 text-center'>Reservations {''}
        <span className='text-lime-700 font-bold'>Admin</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='mb-5 mt-4 bg-slate-50 shadow-md rounded-lg py-6 px-8'>
        {error && <Error msj='All fields are required' />}
        <div>
          <label className='block text-gray-700 uppercase font-bold'>
            Name:
          </label>
          <input
            className='p-1 mt-2 mb-3 placeholder-gray-400 bg-slate-50 border-2 w-full'
            type="text"
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className='font-bold block text-gray-700 uppercase'>
            Card number:
          </label>
          <input
            className='border-2 w-full p-1 mt-2 mb-3 bg-slate-50 placeholder-gray-400'
            type="text"
            placeholder='4242-4242-4242-4242'
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />

          <label className='font-bold block text-gray-700 uppercase'>
            Email:
          </label>
          <input
            className='border-2 w-full p-1 mt-2 mb-3 bg-slate-50 placeholder-gray-400'
            type="text"
            placeholder='example@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className='font-bold block text-gray-700 uppercase'>
            Check-in:
          </label>
          <input
            className='border-2 w-full p-1 mt-2 mb-3 bg-slate-50 placeholder-gray-400'
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <label className='font-bold block text-gray-700 uppercase'>
            Check-out:
          </label>
          <input
            className='border-2 w-full p-1 mt-2 mb-3 bg-slate-50 placeholder-gray-400'
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
          <input
            type='submit'
            className='transition-all mt-3 bg-lime-700 p-2 w-full rounded-md text-slate-50 font-bold uppercase hover:bg-lime-800'
            value={guest.id  ? 'Edit' : 'Register'}></input>

        </div>
      </form>
    </div>
  )
}

export default Form