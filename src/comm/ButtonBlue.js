const ButtonBlue = ({caption, handleClick}) => {
  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    {caption}
  </button>
  )
}

export default ButtonBlue
