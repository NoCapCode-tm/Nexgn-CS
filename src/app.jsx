import { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import LandingPageMobile from "./LandingPageMobile";
import "./App.css";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMobile ? <LandingPageMobile /> : <LandingPage />;
}