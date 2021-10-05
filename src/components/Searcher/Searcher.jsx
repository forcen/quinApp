import React from 'react';
import PropTypes from 'prop-types';

import './Searcher.css';

const Searcher = ({ open }) => {
  return (
    <details
      open={open}
    >
      <summary className="summary">
        <span className="title">Find Launches!</span>
      </summary>
      <form>
        <label>From: <input type="date"></input></label>
        <label>To: <input type="date"></input></label>
        <button>Search</button>
      </form>
    </details>
  );
};

Searcher.propTypes = {
  open: PropTypes.bool,
};

export default Searcher;
