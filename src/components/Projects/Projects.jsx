import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Task from './task.png'
import Akira from './akira.png'

function Projects () {
  return (
      <div className="mt-10 mb-10 pl-10 pr-10">
        <h3 className="text-3xl font-bold">Projects</h3>
        <Tabs defaultValue="validation" className="w-[full] mt-6">
        <TabsList>
          <TabsTrigger value="validation" className="font-bold">
            Validation form
          </TabsTrigger>
          <TabsTrigger value="task" className="font-bold">
            Task Manager
          </TabsTrigger>
        </TabsList>
        <TabsContent value="validation">
          <Card>
              <CardContent className='p-5'>
                <img src={Akira} height="300px"/>
              </CardContent>
              <CardHeader>
                <CardTitle>
                  <a href="https://form-validation-exercise.netlify.app/"
                  target="_blank" className="hover:underline">
                    Form Validation
                  </a>
                </CardTitle>
                <CardDescription>
                  I design and optimize Notion templates to be clutter-free, so you can focus on what's important and get things done.
                </CardDescription>
              </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="task">
          <Card>
              <CardContent className='p-5'>
                <img src={Task} height="300px"/>
              </CardContent>
              <CardHeader>
                <CardTitle>
                  <a href="https://task-grid-exercise.netlify.app/" target="_blank" className="hover:underline">
                    Task Manager
                  </a>
                </CardTitle>
                <CardDescription>
                  I design and optimize Notion templates to be clutter-free, so you can focus on what's important and get things done.
                </CardDescription>
              </CardHeader>
          </Card>
        </TabsContent>
        </Tabs>
        </div>
  )
}

export default Projects
