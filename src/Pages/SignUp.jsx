import React, { useContext } from 'react';
import { Link } from 'react-router';
import { valueContext } from '../LayOut/MainLayout';

const SignUp = () => {
   
    const {handleSignup,googleLogin} = useContext(valueContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.user_name.value
        const photo = e.target.image_url.value
        const email = e.target.email.value
        const password = e.target.password.value

       if (!/^.{6,}$/.test(password)) {
          return alert("password Should be at least 6 character")
       }
       if (!/^(?=.*[A-Z]).+$/.test(password)) {
        return alert("password Should have at least one uppercase letter")
       }
       if (!/^(?=.*[a-z]).+$/.test(password)) {
        return alert("password Should have at least one lowercase letter")
       }
       if(!name) {
         return alert("please enter your name")
       }
       if(!photo) {
        return alert("please enter your photo Url")
      }
        handleSignup(email,password,name,photo)
           
        
    }

    return (
        <div>
            <div className="flex justify-center mt-5 pb-10">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 bg-white">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign up here </h1>
        <p className="text-sm dark:text-gray-600">
          Create a new account
        </p>
      </div>
      <div className=" space-y-4">
          <button
             onClick={googleLogin}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current text-red-500"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p className='text-red-500'>Login with Google</p>
          </button>
          
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              User Name
            </label>
            <input
              type="text"
              name="user name"
              id="user_name"
              placeholder="User name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Image URL
              </label>
              
            </div>
            <input
              type="text"
              name="Image URL"
              id="image_url"
              placeholder="image URL"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="cursor-pointer w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
            >
              Sign up
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already have an account?
            <Link to='/login'
           rel="noopener noreferrer"
           className="focus:underline hover:underline">
          
           
          
           Log in here
          
          </Link>
            .
          </p>
        </div>
      </form>
    </div>
    </div>
        </div>
    );
};

export default SignUp;