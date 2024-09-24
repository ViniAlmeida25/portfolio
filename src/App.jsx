import HeroSection from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import TabPage from "./components/Tabs/TabPage"
import Contact from "./components/Contact/Contact"
import { Skeleton } from "@/components/ui/skeleton"





function App() {


  return (
    <>
      <div className="max-w-3xl justify-center m-auto">
        <HeroSection />
        <TabPage />
        <Projects />
        <Contact />
        <Skeleton />
      </div>
    </>
  )
}

export default App
