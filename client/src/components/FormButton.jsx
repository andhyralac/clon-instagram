const FormButton = ({ type, name, className }) => {
  return (
    <button type={type} className={className}>
      {name}
    </button>
  )
}

export default FormButton
