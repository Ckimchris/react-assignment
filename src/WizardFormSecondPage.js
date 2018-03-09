import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import dish from './data/dishes.json';
import WizardFormFirstPage from './WizardFormFirstPage';

function checkMealType(){
    let hold = [];
    for(let i = 0; i < dish.dishes.length; i++){
        for(let z = 0; z < dish.dishes[i].availableMeals.length; z++){
            if(dish.dishes[i].availableMeals[z] === 'breakfast'){
                hold.push(dish.dishes[i].restaurant)
            }
        }
    }
    return hold;
}

function removeDuplicateUsingFilter(arr){
    let unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array
}

let filtered = checkMealType();

let temp = removeDuplicateUsingFilter(filtered)

const renderRestaurant = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value=""></option>
        {temp.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
);

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="restaurant" component={renderRestaurant} />
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
