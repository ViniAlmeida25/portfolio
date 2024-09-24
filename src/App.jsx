import HeroSection from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import TabPage from "./components/Tabs/TabPage"
import Contact from "./components/Contact/Contact"




function App() {


  return (
    <>
      <div className="max-w-3xl justify-center m-auto">
        <HeroSection />
        <TabPage />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
