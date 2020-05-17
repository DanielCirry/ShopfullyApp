import React, { Dispatch } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Flyer from "./Flyer";
import {
  IGetFlyersResponse,
  IBasicFlyers,
  FlyersActions,
} from "../store/flyers/types";
import { IError } from "../types/general";
import * as asyncActions from "../store/flyers/asyncAction";
import { IRootState } from "../store";

type Props = ReduxType;

class GridComponent extends React.Component<Props, any> {
  componentDidMount() {
    this.props.getFlyersData();
  }

  render() {
    const { flyersData } = this.props;
    return (
      <div>
        {console.log("aaaaaaa" + flyersData)}
        {flyersData ? (
          <div>
            <Grid container style={{ padding: 24 }}>
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <Flyer {...this.props} />
              </Grid>
            </Grid>
          </div>
        ) : (
          "No flyers found"
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ flyers }: IRootState) => ({
  flyersData: flyers.flyersData,
  loading: flyers.flyersDataLoading,
  error: flyers.flyersDataError,
});

const mapDispatcherToProps = (dispatch: Dispatch<FlyersActions>) => ({
  getFlyersData: () => asyncActions.getFlyersData(dispatch),
});

type ReduxType = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatcherToProps)(GridComponent);
