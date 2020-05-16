import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { getFlyersData } from "../../actions/flyers";
import { connect } from "tls";

export default class Flyers extends React.Component<any, any> {
  componentDidMount() {
    this.props.getFlyersData();
  }

  render() {
    const data = this.props.flyersData;
    return <>abcdfr</>;
  }
}
const mapStateToProps = (state) => ({
  flyersData: state.flyers.flyersData,
});

const mapDispatchToProps = (dispatch) => ({
  getFlyersData: () => dispatch(getFlyersData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flyers);
