import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const routeTitles = {
      '/': 'Home',
      '/about': 'About',
      '/divisions': 'Divisions',
      '/projects': 'Projects',
      '/careers': 'Careers',
      '/suppliers': 'Suppliers',
      '/contact': 'Contact Us',
      '/privacy-policy': 'Privacy Policy',
      '/terms': 'Terms & Conditions',
    };
    document.title = routeTitles[pathname] || 'EGC';
  }, [pathname]);
  return (
    <>
      <Header />
      <main id="main-content" className="page-fade">
        {children}
      </main>
      <Footer />
    </>
  );
}
