import React, { Component } from "react";
import { navigate } from "gatsby";

export default class HomepagePresenter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onEAPSignUpClick = info => {
    navigate(`/signup${info && info.email ? `?email=${info.email}` : `/`}`);
  };


  render() {
    return React.cloneElement(
      React.Children.only(this.props.children),
      {
        kloudbar: this.HomeKloudbar,
        onEAPSignUpClick: this.onEAPSignUpClick,
        onFormSubmit: this.onEAPSignUpClick,
      }
    );
  }
}
