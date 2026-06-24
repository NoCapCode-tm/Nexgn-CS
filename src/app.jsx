import "./App.css";
import LandingPage from "./LandingPage";
import NotFound from "./NotFound";

export default function App() {
  const is404 = window.location.pathname !== "/";
  return is404 ? <NotFound /> : <LandingPage />;
}