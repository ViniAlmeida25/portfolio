import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"


function Experience () {

  return (
    <div className="w-full">
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Lorem ipsum</CardTitle>
            <CardDescription>Lorem ipsum in dolor</CardDescription>
            <CardDescription>march 2022 | Working here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>• Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam optio excepturi porro cupiditate sunt saepe doloribus nam, sed expedita libero ad, rem nisi odit, nostrum dolorum. Soluta esse dignissimos dolorum!.</p>
            <p>• Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quisquam sunt iste dicta a accusamus ipsum temporibus! Autem ratione voluptates in soluta consequuntur vitae neque unde? Dolor voluptates aspernatur necessitatibus.</p>

          </CardContent>
          <CardFooter className="gap-2 flex-wrap">
            <Badge>Javascript</Badge>
            <Badge>CSS</Badge>
            <Badge>HTML</Badge>
            <Badge>React</Badge>
            <Badge>Sass</Badge>
            <Badge>Tailwind</Badge>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Lorem ipsum</CardTitle>
            <CardDescription>Lorem ipsum in dolor</CardDescription>
            <CardDescription>may 2002 | febuary 2022</CardDescription>
          </CardHeader>
          <CardContent>
          <p>• Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam optio excepturi porro cupiditate sunt saepe doloribus nam, sed expedita libero ad, rem nisi odit, nostrum dolorum. Soluta esse dignissimos dolorum!.</p>
          <p>• Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quisquam sunt iste dicta a accusamus ipsum temporibus! Autem ratione voluptates in soluta consequuntur vitae neque unde? Dolor voluptates aspernatur necessitatibus.</p>
          </CardContent>
          <CardFooter className="gap-2 flex-wrap">
            <Badge>Javascript</Badge>
            <Badge>CSS</Badge>
            <Badge>HTML</Badge>
            <Badge>React</Badge>
            <Badge>Sass</Badge>
            <Badge>Tailwind</Badge>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Lorem ipsum</CardTitle>
            <CardDescription>Lorem ipsum in dolor</CardDescription>
            <CardDescription>april 2011 | may 2016</CardDescription>
          </CardHeader>
          <CardContent>
          <p>• Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam optio excepturi porro cupiditate sunt saepe doloribus nam, sed expedita libero ad, rem nisi odit, nostrum dolorum. Soluta esse dignissimos dolorum!.</p>
          <p>• Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quisquam sunt iste dicta a accusamus ipsum temporibus! Autem ratione voluptates in soluta consequuntur vitae neque unde? Dolor voluptates aspernatur necessitatibus.</p>
          </CardContent>
          <CardFooter className="gap-2 flex-wrap">
            <Badge>Javascript</Badge>
            <Badge>CSS</Badge>
            <Badge>HTML</Badge>
            <Badge>React</Badge>
            <Badge>Sass</Badge>
            <Badge>Tailwind</Badge>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Experience
