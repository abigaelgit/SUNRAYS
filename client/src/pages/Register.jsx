import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='form'> 

        <>
          {/* component */}
          <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
              <div
                className="hidden lg:block lg:w-2/3 bg-[url('./assets/img/AdobeStock_116876919.jpeg')]  bg-cover bg-center"
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

                      <div className='mb-6'>

                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                          Full Name
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          value={name}
                          placeholder='Enter your name'
                          onChange={onChange}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
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
                            htmlFor="password"
                            className="text-sm text-gray-600 dark:text-gray-200"
                          >
                            Password
                          </label>

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
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="password"
                            className="text-sm text-gray-600 dark:text-gray-200"
                          >
                            Confirm Password
                          </label>

                        </div>
                        <input
                          type='password'
                          id='password2'
                          name='password2'
                          value={password2}
                          placeholder='Confirm password'
                          onChange={onChange}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>





                      <div className="mt-6">
                        <button type='submit' className=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:green-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                          Register
                        </button>
                      </div>
                    </form>
                    <p className="mt-6 text-sm text-center text-gray-400">
                      already have an account?
                      <a
                        href="/login"
                        className="text-green-500 focus:outline-none focus:underline hover:underline"
                      >
                        Login
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

      </section>
    </>
  )
}

export default Register
