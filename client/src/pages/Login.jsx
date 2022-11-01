import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (

    <>
      {/* component */}
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">



          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  Sunrays Solar Ltd
                </h2>
                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Register your account
                </p>
              </div>
              <div className="mt-8">
                <form onSubmit={onSubmit}>
                  <div>

                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={email}
                      placeholder='Enter your email'
                      onChange={onChange}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label

                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      <a
                        href="/"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      value={password}
                      placeholder='Enter password'
                      onChange={onChange}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="mt-6">
                    <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Login
                    </button>
                  </div>
                </form>
                <p className="mt-6 text-sm text-center text-gray-400">
                  Don't have an account yet?{" "}
                  <a
                    href="/register"
                    className="text-green-500 focus:outline-none focus:underline hover:underline"
                  >
                    Register
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div
            className="hidden lg:block lg:w-2/3  bg-[url('./assets/img/AdobeStock_116876919.jpeg')]  bg-cover bg-center "
          > 
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">Sunrays Solar Ltd</h2>
                <p className="max-w-xl mt-3 text-gray-50">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem
                  ipsa, nulla laboriosam dolores, repellendus perferendis libero
                  suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Login
