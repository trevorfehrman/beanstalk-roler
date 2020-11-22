import * as React from 'react'
import { useFormikContext } from 'formik'

import { ICharacter } from './character-sheet.interface'

import { SkillCategory } from 'components/skill/skill-category.component'

const Skills: React.FC = () => {
  const formik = useFormikContext<ICharacter>()

  return (
    <>
      <SkillCategory
        title="Knowledge"
        skillCategory={formik.values.skills.knowledgeSkills}
        path="skills.knowledgeSkills"
      />
      <SkillCategory
        title="Social Skills"
        skillCategory={formik.values.skills.socialSkills}
        path="skills.socialSkills"
      />
    </>
  )
}

export { Skills }
