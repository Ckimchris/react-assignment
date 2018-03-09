import React from 'react';
import ReactDOM from 'react-dom';
import WizardForm from './WizardForm';

it('Verify that it renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WizardForm />, div);
  ReactDOM.unmountComponentAtNode(div);  
});