
import React, { useState } from 'react';
import {
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowRightIcon,
  GoogleIcon,
  FacebookIcon,
  AppleIcon,
} from './Icons';
import SocialButton from './SocialButton';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-md rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-white/30 shadow-2xl ring-1 ring-white/20">
      <div className="p-8 sm:p-10">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/50">
            <ArrowRightIcon className="h-7 w-7 text-gray-700" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Sign in with email</h1>
          <p className="mt-2 text-center text-gray-600">
            Make a new doc to bring your words, data, and teams together. For free
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <MailIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-none bg-white/40 py-3 pl-12 pr-4 text-gray-800 placeholder-gray-500 transition-all duration-300 focus:bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative">
             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
               <LockIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border-none bg-white/40 py-3 pl-12 pr-12 text-gray-800 placeholder-gray-500 transition-all duration-300 focus:bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          
          <div className="text-right">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Forgot password?
              </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 py-3.5 text-lg font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-100"
          >
            Get Started
          </button>
        </form>

        <div className="my-8 flex items-center">
          <div className="flex-grow border-t border-gray-400/50"></div>
          <span className="mx-4 flex-shrink text-sm text-gray-600">Or sign in with</span>
          <div className="flex-grow border-t border-gray-400/50"></div>
        </div>

        <div className="flex justify-center gap-4">
          <SocialButton>
            <GoogleIcon className="h-6 w-6" />
          </SocialButton>
          <SocialButton>
            <FacebookIcon className="h-6 w-6" />
          </SocialButton>
          <SocialButton>
            <AppleIcon className="h-6 w-6" />
          </SocialButton>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
