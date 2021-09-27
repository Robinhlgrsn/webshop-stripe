
const Button = (props) => {
  return (
    <div
      className="flex cursor-pointer justify-center items-center bg-green-400 px-3 py-2 text-gray-50 font-semibold rounded-md shadow-lg transition duration-500 ease-in-out transform hover:shadow-none"
      onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button
