import { Badge } from "@/components/ui/badge"


function Skills () {
  const skills = ['Excel', 'PowerBI', 'Tableau', 'SQL', 'ETL', 'Data Storytelling', 'Numpy', 'Metaplotlib']

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
