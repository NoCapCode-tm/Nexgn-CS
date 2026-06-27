import "./App.css";
import LandingPage from "./LandingPage";
import NotFound from "./NotFound";
import ContactUs from "./Company/ContactUs";
import HelpCenter from "./Resources/HelpCenter";
import Security from "./Resources/Security";
import AboutUs from "./Company/AboutUs";
import TermsServices from "./Legal & Trust/TermsServices";
import PrivacyPolicy from "./Legal & Trust/PrivacyPolicy";
import Blog from "./Company/Blog";

export default function App() {
  const path = window.location.pathname;

  if (path === "/") return <LandingPage />;
  if (path === "/contact") return <ContactUs />;
  if (path === "/help") return <HelpCenter />;
  if (path === "/security") return <Security />;
  if (path === "/about") return <AboutUs />;
  if (path === "/term") return <TermsServices />;
  if (path === "/privacy") return <PrivacyPolicy />;
  if (path === "/blog") return <Blog />;
  return <NotFound />;
}
