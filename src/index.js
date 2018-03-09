import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import WizardForm from "./WizardForm";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const rootEl = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <WizardForm onSubmit={showResults} />
    </MuiThemeProvider>
  </Provider>,
  rootEl
);

