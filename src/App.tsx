import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
// Go back to using BasicProjectPage since the enhanced version has issues
import BasicProjectPage from './components/projects/BasicProjectPage';
import CreateProjectPage from './components/projects/CreateProjectPage';
import AboutPage from './components/about/AboutPage';
import FAQPage from './components/faq/FAQPage';
import { toast } from 'sonner';

// Simple error boundary component
function ErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Something went wrong</h2>
        <p className="mb-4">We're sorry, but there was an error loading this page.</p>
        <button
          onClick={() => window.location.href = '/'}
          className="px-4 py-2 bg-gradient-to-r from-red-500 to-amber-400 rounded-md text-white"
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);

  // Initialize app and remove loader
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Remove the loading screen
        const loader = document.getElementById('initial-loader');
        if (loader) {
          loader.classList.add('fade-out');
          setTimeout(() => {
            if (loader.parentNode) {
              loader.parentNode.removeChild(loader);
            }
          }, 500);
        }
        // Set app as ready
        setIsReady(true);
      } catch (error) {
        console.error('Error initializing app:', error);
        // Still mark as ready so the app can render even if there was an error
        setIsReady(true);
      }
    };

    // Wait a bit before initializing to ensure DOM is fully loaded
    setTimeout(initializeApp, 1000);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!isReady) {
    return null; // Return nothing until the app is ready, loader is shown from HTML
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Use BasicProjectPage instead of EnhancedProjectPage */}
        <Route path="/projects" element={<BasicProjectPage />} />
        <Route path="/create-project" element={
          <ErrorBoundaryWrapper>
            <CreateProjectPage />
          </ErrorBoundaryWrapper>
        } />
        <Route path="/about" element={
          <ErrorBoundaryWrapper>
            <AboutPage />
          </ErrorBoundaryWrapper>
        } />
        <Route path="/faq" element={
          <ErrorBoundaryWrapper>
            <FAQPage />
          </ErrorBoundaryWrapper>
        } />
        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

// Error boundary wrapper component
function ErrorBoundaryWrapper({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error('Error rendering component:', error);
    toast.error('Something went wrong');
    return <ErrorFallback />;
  }
}

// Not found page
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-400">
        404 - Page Not Found
      </h1>
      <p className="text-gray-400 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="px-4 py-2 bg-gradient-to-r from-red-500 to-amber-400 rounded-md text-white"
      >
        Go back home
      </button>
    </div>
  );
}
