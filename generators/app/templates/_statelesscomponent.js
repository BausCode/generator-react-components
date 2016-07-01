import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

let <%= name %> = function () {
  return (
    <h2>
      <%= name %> 
    </h2>
  );
};

export default <%= name %>;
