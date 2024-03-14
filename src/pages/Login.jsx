const Login = () => {
  return (
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full object-cover' src={movie_poster} alt="/" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            <form>
              <input type="email" placeholder='Email' autoComplete='email' />
              <input type="password" placeholder='Password' autoComplete='password' />
              <bottom className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</bottom>
              <div className='flex justify-between item-center text-sm text-gray-600'>
                <p><input className='mr-2' type="checkbox" />Remember me</p>
                <p>Need Help?</p>
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>
                  Don't have an account yet?
                </span>{' '}
                <Link to='/signup'>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
