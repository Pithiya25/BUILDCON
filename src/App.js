import Navbar from "./Components/Navbar";
import Aboutus from "./Container/Aboutus";
import ContactUs from "./Container/ContactUs";
import Hero from "./Container/Hero";
import OurProject from "./Container/OurProject";
import OurTeam from "./Container/OurTeam";
import Services from "./Container/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <OurProject />
      <OurTeam />
      <ContactUs />
    </>
  );
}

export default App;
