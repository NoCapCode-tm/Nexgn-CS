import "./App.css";
import LandingPage from "./LandingPage";
import NotFound from "./NotFound";
import GetInTouchWithNexgn from "./GetintouchwithNexgn";
import FindanswersGetthingsdone from "./FindanswersGetthingsdone";

export default function App() {
  const path = window.location.pathname;

  if (path === "/") return <LandingPage />;
  if (path === "/contact") return <GetInTouchWithNexgn />;
  if (path === "/help") return <FindanswersGetthingsdone />;
  return <NotFound />;
}