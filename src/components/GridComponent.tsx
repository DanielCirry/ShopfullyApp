import React from "react";
import { Dispatch } from "redux";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Flyer from "./Flyer";
import {
  FlyersActions,
  IGetFlyersResponse,
  IBasicFlyers,
} from "../store/flyers/types";
import * as asyncActions from "../store/flyers/asyncAction";
import { IError } from "../types/general";
import { IRootState } from "../store";

interface IProps {
  flyersData: IGetFlyersResponse | null;
  loading: boolean;
  error: IError | null;
  getFlyersData: () => void;
}

export default class GridComponent extends React.Component<IProps, any> {
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
