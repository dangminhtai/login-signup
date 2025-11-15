
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const EboltLogo: React.FC<IconProps> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#1F2937"/>
    <path d="M12 5V11L17 8L12 5Z" fill="white"/>
    <path d="M12 19V13L7 16L12 19Z" fill="white"/>
    <path d="M11 12L8 14V10L11 12Z" fill="white"/>
    <path d="M13 12L16 10V14L13 12Z" fill="white"/>
  </svg>
);

export const MailIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const LockIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const EyeIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const EyeSlashIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243L6.228 6.228" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const GoogleIcon: React.FC<IconProps> = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Google</title>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.62 1.98-4.66 1.98-3.56 0-6.47-2.92-6.47-6.55s2.91-6.55 6.47-6.55c2.03 0 3.36.85 4.17 1.62l2.55-2.55C18.12 3.25 15.6 2 12.48 2 7.1 2 3.1 6.02 3.1 11.33s4 9.33 9.38 9.33c2.73 0 4.93-.91 6.57-2.55 1.73-1.68 2.24-4.23 2.24-6.81 0-.64-.07-1.25-.16-1.85H12.48z" fill="#4285F4"/>
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Facebook</title>
    <path d="M22.675 0h-21.35C.589 0 0 .589 0 1.325v21.351C0 23.41.589 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.818c.736 0 1.325-.59 1.325-1.325V1.325C24 .589 23.411 0 22.675 0z" fill="#1877F2"/>
  </svg>
);

export const AppleIcon: React.FC<IconProps> = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Apple</title>
    <path d="M12 2.032c-2.348 0-4.43.9-5.99 2.368-1.552 1.46-2.642 3.52-2.642 5.688 0 2.21.922 4.49 2.476 5.968 1.512 1.492 3.54 2.34 5.62 2.34 1.138 0 2.2-.31 3.26-.93.09-.05.18-.09.28-.15.11-.07.23-.15.35-.23.18-.13.36-.26.54-.4.29-.22.58-.45.87-.69 1.48-1.2 2.35-2.98 2.35-4.88 0-1.92-1.12-3.83-2.62-5.06-1.5-1.24-3.6-1.95-5.52-1.95zm-2.9 14.352c.62-.97.93-2.09.93-3.37 0-1.29-.31-2.43-.93-3.42-.62-.98-1.55-1.47-2.79-1.47-.28 0-.55.04-.81.12-.27.08-.53.19-.79.33-.26.14-.51.31-.75.5-.24.18-.46.39-.68.62-1.13 1.16-1.7 2.71-1.7 4.65 0 1.9.58 3.46 1.74 4.68.6.61 1.33.92 2.2.92.29 0 .58-.06.88-.19.3-.12.58-.28.84-.48.27-.19.52-.42.75-.68.22-.26.43-.54.61-.85z" fill="#000000"/>
  </svg>
);
