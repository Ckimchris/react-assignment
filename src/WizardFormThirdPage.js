import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import dish from './data/dishes.json';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

function checkDish(){
    let hold = [];
    for(let i = 0; i < dish.dishes.length; i++){
        for(let z = 0; z < dish.dishes[i].availableMeals.length; z++){
            if(dish.dishes[i].availableMeals[z] === 'breakfast' && dish.dishes[i].restaurant === 'Mc Donalds'){
                hold.push(dish.dishes[i].name)
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

let filtered = checkDish();

let temp = removeDuplicateUsingFilter(filtered)
const items = [1,2,3,4,5,6,7,8,9,10];

const renderDish = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value=""></option>
        {temp.map(val => <option value={val} key={val}>{val}</option>)}
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

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className = "wizardThree">
        <Field name="dish" component={renderDish} />
        <Field name="number" component={renderNumber} />
      </div>
      <div>
        <FloatingActionButton mini={true}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
      <div>
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
})(WizardFormThirdPage);
