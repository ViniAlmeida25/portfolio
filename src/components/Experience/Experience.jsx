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
            <CardTitle>Frontend Developer</CardTitle>
            <CardDescription>Criando Valor Tecnologia e Inovação</CardDescription>
            <CardDescription>march 2022 | Working here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>• Developed a responsive website optimized for desktop and mobile, increasing user engagement by 35%.</p>
            <p>• Implemented a single-page application using React and Redux, improving performance and usability.</p>
            <p>• Utilized HTML, CSS, and JavaScript to create a dynamic, interactive user interface, enhancing user experience.</p>
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
            <CardTitle>UI Design instructor</CardTitle>
            <CardDescription>Soitech - Escola de Tecnologia</CardDescription>
            <CardDescription>may 2019 | febuary 2022</CardDescription>
          </CardHeader>
          <CardContent>
            <p>• Taught the principles of UI Design, including usability, color theory, and icon and font sizing.</p>
            <p>• Prototyped mockups and instructed how to version files, ensuring a starting point in case changes needed to be reverted in the project.</p>
            <p>• Covered the best practices and essential tools every UI Designer should use to achieve the desired results.</p>
            <p>• Practical creation of attractive designs and mockups aimed at building portfolios.</p>
            <p>• Used real examples to demonstrate the application of design concepts in the development of visual projects.</p>
          </CardContent>
          <CardFooter className="gap-2 flex-wrap">
            <Badge>Figma</Badge>
            <Badge>Ux Design</Badge>
            <Badge>Ui Design</Badge>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Web Developer</CardTitle>
            <CardDescription>Monkey Bussiness</CardDescription>
            <CardDescription>april 2011 | may 2016</CardDescription>
          </CardHeader>
          <CardContent>
            <p>• Create modern and responsive layouts for websites and e-commerce pages, ensuring high performance through integrations with
            WordPress.</p>
            <p>• Participated in the entire development process, from client interviews to project completion on the WordPress platform, ensuring best
            practices and a client-focused approach.</p>
            <p>• Focused on HTML semantics, clean CSS, and JavaScript DOM manipulation to enhance user experience, creating pages that ranked well
            on Google and loaded efficiently on any device.</p>
          </CardContent>
          <CardFooter className="gap-2 flex-wrap">
            <Badge>Javascript</Badge>
            <Badge>CSS</Badge>
            <Badge>Sass</Badge>
            <Badge>Wordpress</Badge>
            <Badge>Seo</Badge>
            <Badge>Bootstrap</Badge>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Experience
