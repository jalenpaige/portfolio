import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Music from "./components/Music/music";
import Contacts from "./components/Contacts/contacts";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Music/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
