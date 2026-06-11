import { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import LandingPageTablet from "./LandingPageTablet";
import LandingPageMobile from "./LandingPageMobile";
import "./App.css";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  if (width <768) return <LandingPageMobile />;
  if (width <=1024) return <LandingPageTablet />;
  return <LandingPage />;
}
