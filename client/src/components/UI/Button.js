
const Button = (props) => {
  return (
    <div
      class="flex cursor-pointer items-center bg-green-400 px-3 py-0.5 text-gray-50 font-semibold rounded-md shadow-md hover:bg-green-500"
      onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button
