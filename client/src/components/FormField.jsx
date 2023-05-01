const FormField = ({ type, name, placeholder, value }) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className="form-control"
      placeholder={placeholder}
      value={value}
      autoComplete="off"
      required
    />
  )
}

export default FormField
