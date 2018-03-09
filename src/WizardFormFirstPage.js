import React from 'react';
import { connect,  } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import Meal from './Meal'
import dish from './data/dishes.json'

const meal = ['breakfast', 'lunch', 'dinner']
const items = [1,2,3,4,5,6,7,8,9,10];

const renderMealType = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value=""></option>
        {meal.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
);

const renderNumber = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value=""></option>
        {items.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
);

let WizardFormFirstPage = props => {
  const { handleSubmit, mealTypeValue, numberValue } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="mealType" component={renderMealType} />
      <Field name="number" component={renderNumber} />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

// The order of the decoration does not matter.
  
  // Decorate with connect to read form values
  const selector = formValueSelector('wizard') // <-- same as form name
  WizardFormFirstPage = connect(state => {
    const mealTypeValue = selector(state, 'mealType')
    const numberValue = selector(state, 'number')
    return {
        mealTypeValue,
        numberValue,
    }
  })(WizardFormFirstPage)
  
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
  selector
})(WizardFormFirstPage);
