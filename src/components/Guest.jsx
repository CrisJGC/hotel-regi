
const Guest = ({ g, setGuest, deleteGuest }) => {

  const { name, card, email, checkIn, checkOut, id } = g

  const handlerDelete = () => {
    const res = confirm('you are about to delete Guest-info, are you sure?')
    if (res) {
      deleteGuest(id)
    }
  }

  return (
    <div className='m-4 bg-slate-50 rounded-lg shadow-md py-6 px-8'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Name:
        <span className='font-nomral normal-case'> {name}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Card number:
        <span className='font-nomral normal-case'> {card}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>email:
        <span className='font-nomral normal-case'> {email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Date 1:
        <span className='font-nomral normal-case'> {checkIn}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Date 2:
        <span className='font-nomral normal-case'> {checkOut}</span>
      </p>
      <div className="flex justify-evenly">
        <button
          type="button"
          className="mr-6 py-2 px-10 bg-lime-700 hover:bg-lime-800 transition-all font-semibold uppercase text-slate-50"
          onClick={() => setGuest(g)}
        >Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-700 hover:bg-red-800 transition-all font-semibold uppercase text-slate-50"
          onClick={handlerDelete}
        >Delete
        </button>
      </div>
    </div>
  )
}

export default Guest