import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComponentExample from '../../components/ComponentExample/ComponentExample';

class PageExample extends Component {
  render() {
    return (
      <div>
        <ComponentExample />
      </div>
    );
  }
}

PageExample.propTypes = {};

export default PageExample;
