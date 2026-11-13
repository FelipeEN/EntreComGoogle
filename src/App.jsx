import React, { useState, useRef, useEffect } from 'react';
import HudBackground from './components/HudBackground';
import HeroIntro from './components/HeroIntro';
import LoginView from './components/LoginView';
import ProfileView from './components/ProfileView';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');

  const submitButtonRef = useRef(null);
  const logoutButtonRef = useRef(null);
  const prevAuthRef = useRef(isAuthenticated);

  useEffect(() => {
    if (prevAuthRef.current !== isAuthenticated) {
      if (isAuthenticated) {
        logoutButtonRef.current?.focus();
      } else {
        submitButtonRef.current?.focus();
      }
      prevAuthRef.current = isAuthenticated;
    }
  }, [isAuthenticated]);

  return (
    <div className="app-shell">
      <HudBackground />

      <main className="w-full max-w-6xl mx-auto px-7 py-12 md:px-12 md:py-20">
        <div className="layout grid grid-cols-[1fr_1fr] gap-12 md:gap-20 items-center">
          <HeroIntro />

          <section
            className="surface w-full p-6 sm:p-9 md:p-11"
            aria-label="Demonstração de conta"
          >
            {!isAuthenticated ? (
              <LoginView
                email={email}
                onEmailChange={setEmail}
                onLoginSuccess={() => setIsAuthenticated(true)}
                submitButtonRef={submitButtonRef}
              />
            ) : (
              <ProfileView
                email={email}
                onLogout={() => setIsAuthenticated(false)}
                logoutButtonRef={logoutButtonRef}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
