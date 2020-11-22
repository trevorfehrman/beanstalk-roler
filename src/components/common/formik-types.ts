import { ICharacter } from 'components/character-sheet/character-sheet.interface'
import { FieldInputProps, FormikHelpers } from 'formik'

export type FormikProps = {
  form: FormikHelpers<keyof ICharacter>
  field: FieldInputProps<keyof ICharacter>
}
