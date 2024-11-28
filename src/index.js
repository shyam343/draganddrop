import $ from "jquery";
import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "formBuilder in React"
  },
  {
    type: "paragraph",
    label: "This is a demonstration of formBuilder running in a React project."
  }
];


class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({ formData });
  }

  render() {
    return (
      <div className="bg-gray-100 p-4">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="alert alert-info mb-4">
          This is an example of how to use formBuilder with React. The JSON data for this form was set programmatically.
        </div>
        <div id="fb-editor" ref={this.fb} />
      </div>
    </div>
    )
  }
}

ReactDOM.render(<FormBuilder />, document.getElementById("root"));
