import Skills from "../Skills/Skills"
import Experience from "../Experience/Experience"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function TabPage() {
  return (
    <div className="w-full mt-10 pl-10 pr-10">
      <Tabs defaultValue="skills" className="w-[full]">
        <TabsList>
          <TabsTrigger value="skills" className="font-bold">Skills</TabsTrigger>
          <TabsTrigger value="experience" className="font-bold">Experience</TabsTrigger>
        </TabsList>
        <TabsContent value="skills">
          <Skills />
        </TabsContent>
        <TabsContent value="experience">
          <Experience />
        </TabsContent>
        </Tabs>
    </div>
  )
}

export default TabPage
