
const Button = (props) => {
  return (
    <div
      className="flex cursor-pointer justify-center items-center bg-green-400 px-3 py-2 text-gray-50 font-semibold rounded-md shadow-md hover:bg-green-500"
      onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button
