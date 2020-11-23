import * as React from 'react'

import { Box, Tag } from '@chakra-ui/react'

import {
  IKnowledgeSkills,
  ISocialSkills,
  IGeneralSkills,
  ICombatSkills,
} from 'interfaces-and-types/character-sheet.interface'

import { Skill } from './skill.component'

type SkillCategoryProps = {
  title: string
  skillCategory: IKnowledgeSkills | ISocialSkills | IGeneralSkills | ICombatSkills
  path: string
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ skillCategory, path, title }) => {
  return (
    <>
      <Tag>{title}</Tag>
      <Box border="1px solid gray" padding=".5rem" margin=".5rem" paddingRight="1rem">
        {Object.entries(skillCategory)
          // Sorts alphabeically typesafe
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([skillName, skillValue]: [string, number]) => (
            <Skill
              key={JSON.stringify(skillName)}
              leafKey={skillName}
              skillValue={skillValue}
              path={`${path}.${skillName}`}
            />
          ))}
      </Box>
    </>
  )
}

export { SkillCategory }
