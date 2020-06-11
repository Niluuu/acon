import React from "react";
import Content from "../components/index/content";
import { connect } from "react-redux";
import { fetchHome } from "../redux/index/action";

class indexPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchHome());
  }

  render() {
    console.log("home", this.props);
    return (
      <React.Fragment>
        <Content />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(indexPage);
