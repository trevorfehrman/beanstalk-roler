import { ICharacter } from 'interfaces-and-types/character-sheet.interface'
import { FieldInputProps, FormikHelpers } from 'formik'

export type FormikProps = {
  form: FormikHelpers<keyof ICharacter>
  field: FieldInputProps<keyof ICharacter>
}
