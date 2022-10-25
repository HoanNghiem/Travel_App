import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Must be between 3 and 6 characters long.')
      .max(6, 'Must be between 3 and 6 characters long.')
      .required('*Requied'),
    password: Yup.string()
      .min(3, '')
      .max(6, '')
      .required('*Requied'),
    email: Yup.string().email('Invalid email').required('Required'),
  });