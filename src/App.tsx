import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ArchitecturePage } from './components/pages/ArchitecturePage';
import { FeaturesPage } from './components/pages/FeaturesPage';
import { OutcomesPage } from './components/pages/OutcomesPage';
import { ApplicationsPage } from './components/pages/ApplicationsPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'architecture':
        return <ArchitecturePage />;
      case 'features':
        return <FeaturesPage />;
      case 'outcomes':
        return <OutcomesPage />;
      case 'applications':
        return <ApplicationsPage />;
      case 'contact':
      case 'login':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
