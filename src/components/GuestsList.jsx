import Guest from './Guest'

const GuestsList = ({ guests, setGuest, deleteGuest}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {guests && guests.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Guests List</h2>
          <p className='text-lg mt-3 text-center'><span className='text-lime-700 font-bold'>Guest </span>info</p>
          {guests.map(g => (
            <Guest
              key={g.email}
              g={g}
              setGuest={setGuest}
              deleteGuest={deleteGuest}
            />
          ))}
        </>) : (
        <>
          <h2 className='font-black text-3xl text-center'>Guests List</h2>
          <p className='text-lg mt-3 text-center'>No <span className='text-lime-700 font-bold'>Guest </span>info</p>

        </>)
      }

    </div>
  )
}

export default GuestsList