
import React from 'react';
import LoginForm from './components/LoginForm';
import { EboltLogo } from './components/Icons';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#D5E6F6]">
      {/* Nền gradient và hiệu ứng mây */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A5C9EB] to-[#D5E6F6]"></div>
      <div className="absolute bottom-[-20%] left-[-20%] h-2/5 w-3/5 rounded-full bg-white/50 blur-3xl filter"></div>
      <div className="absolute bottom-[-20%] right-[-20%] h-2/5 w-3/5 rounded-full bg-white/40 blur-3xl filter"></div>
      
      {/* Header */}
      <header className="absolute top-0 left-0 p-6 md:p-8 z-10">
        <div className="flex items-center gap-3">
          <EboltLogo className="h-8 w-8 text-gray-800" />
          <span className="text-2xl font-bold text-gray-800">Ebolt</span>
        </div>
      </header>

      {/* Vùng chứa form đăng nhập */}
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <LoginForm />
      </div>
    </main>
  );
};

export default App;
