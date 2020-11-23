import * as React from 'react'
import { useFormikContext } from 'formik'

import { Box } from '@chakra-ui/react'

import { ICharacter } from '../../interfaces-and-types/character-sheet.interface'

import { SkillCategory } from 'components/skill/skill-category.component'

const Skills: React.FC = () => {
  const formik = useFormikContext<ICharacter>()

  return (
    <Box d="flex" justifyContent="space-between">
      <Box>
        <SkillCategory
          title="General Skills"
          skillCategory={formik.values.skills.generalSkills}
          path="skills.generalSkills"
        />
      </Box>
      <Box>
        <SkillCategory
          title="Combat Skills"
          skillCategory={formik.values.skills.combatSkills}
          path="skills.combatSkills"
        />
        <SkillCategory
          title="Social Skills"
          skillCategory={formik.values.skills.socialSkills}
          path="skills.socialSkills"
        />
        <SkillCategory
          title="Knowledge"
          skillCategory={formik.values.skills.knowledgeSkills}
          path="skills.knowledgeSkills"
        />
      </Box>
    </Box>
  )
}

export { Skills }
