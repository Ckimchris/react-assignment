import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
const type = ['breakfast', 'lunch', 'dinner']
for (let i = 0; i < type.length; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`${type[i]}`} />);
}

/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */
export default class Meal extends Component {
  state = {
    value: null,
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  render() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
        maxHeight={200}
      >
        {items}
      </SelectField>
    );
  }
}