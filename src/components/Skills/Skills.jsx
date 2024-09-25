import { Badge } from "@/components/ui/badge"


function Skills () {
  const skills = ['Javascript', 'CSS', 'Tailwind', 'TypeScript', 'Node js', 'Express', 'Git', 'C', 'C++', 'C#', 'Python', 'Software Architecture', 'AWS', 'Devops', 'Expres', '.NET', 'Azure']

  const renderSkills = skills.map((skill) => {
    return <Badge key={skill.name}>{skill}</Badge>
  })

  return (
    <div className="mt-6 gap-2 flex flex-wrap">
        {renderSkills}
    </div>
  )
}

export default Skills
