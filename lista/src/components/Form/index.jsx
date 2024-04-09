/* eslint-disable react/no-typos */
import React from "react";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

import "./Form.css";

export default function Form({ handleChange, handleSubmit, novaTarefa}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />

      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.defaultProps = {
  novaTarefa: "",
}

Form.PropTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}
