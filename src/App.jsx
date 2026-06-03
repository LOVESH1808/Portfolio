import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Gallery from "./pages/Gallery";
import ArtDetail from "./pages/ArtDetail";
import Contact from "./pages/Contact";
import Work from './pages/Work';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="page-wrapper">
          {/* Ambient orbs — fixed background layer */}
          <div className="orbs" aria-hidden="true">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
          </div>

          {/* Sticky nav */}
          <Navbar />

          {/* Page content */}
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:id" element={<ArtDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work" element={<Work />} />
              {/* Catch-all → home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
