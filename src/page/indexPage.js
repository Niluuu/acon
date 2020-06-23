import React from "react";
import Content from "../components/index/content";
import { connect } from "react-redux";
import { fetchHome } from "../redux/index/action";

class indexPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.dispatch(fetchHome());
  }

  render() {
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
