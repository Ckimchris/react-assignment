const validate = values => {
  const errors = {};
  if (!values.mealType) {
    errors.mealType = 'Required';
  }
  if (!values.number) {
    errors.number = 'Required';
  }
  if (!values.restaurant) {
    errors.restaurant = 'Required';
  } 
  if (!values.sex) {
    errors.sex = 'Required';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required';
  }
  return errors;
};

export default validate;
