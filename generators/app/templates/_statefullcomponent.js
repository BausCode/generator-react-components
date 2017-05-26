import React, { Component } from 'react';
import PropTypes from 'prop-types';

if (process.env.BROWSER) {
  require('./style.scss');
}

class <%= name %> extends Component {
  render () {
    return (
      <div>
        <h2>
          <%= name %> 
        </h2>
      </div>
    );
  }
}

<%= name %>.propTypes = {
  name: PropTypes.string
};

export default <%= name %>;
