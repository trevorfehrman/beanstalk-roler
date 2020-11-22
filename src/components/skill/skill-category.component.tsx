import * as React from 'react'

import { IKnowledgeSkills, ISocialSkills } from 'components/character-sheet/character-sheet.interface'

import { Skill } from './skill.component'

type SkillCategoryProps = {
  title: string
  skillCategory: IKnowledgeSkills | ISocialSkills
  path: string
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ skillCategory, path }) => {
  return (
    <>
      {Object.entries(skillCategory).map(([skillName, skillValue]: [string, number]) => (
        <Skill
          key={JSON.stringify(skillName)}
          leafKey={skillName}
          skillValue={skillValue}
          path={`${path}.${skillName}`}
        />
      ))}
    </>
  )
}

export { SkillCategory }
