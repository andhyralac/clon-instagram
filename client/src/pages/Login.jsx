import { FormButton, FormField } from '../components'

import logo from '../assets/Instagram_logo.svg'

const Login = () => {
  return (
    <>
      <div className="col-md d-flex justify-content-center align-items-center vh-100">
        <form className="col-md-4 p-5 border">
          <img src={logo} alt='logo-letter' width={250} className='img-fluid mx-auto d-block mb-4' />
          <div className="mb-3">
            <FormField
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <FormField
              name="passowrd"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3">
            <FormButton
              type="submit"
              name="Enter"
              className="btn btn-primary w-100"
            />
          </div>
          <hr />

          <div className='d-flex justify-content-center'>
            <button
              type="button" className="btn" style={{ color: '#145299'}}
            >
              <i className="bi bi-facebook"></i>
              Inicia sesión con Facebook
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
