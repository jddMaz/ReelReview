import React  from "react";
import { Link, useNavigate } from "react-router-dom";
import movie_poster from "../images/movie_poster.jpg";
import { UserAuth } from "../context/AuthContext";


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, signUp } = UserAuth()
  const navegate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navegate('/')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full object-cover' src={movie_poster} alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py4'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my2 bg-gray-799 rounded'
                  type="email"
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my2 bg-gray-799 rounded'
                  type="password"
                  placeholder='Password'
                  autoComplete='password'
                />
                <bottom className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</bottom>
                <div className='flex justify-between item-center text-sm text-gray-600'>
                  <p><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>
                    Already had a account?
                  </span>{' '}
                  <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
