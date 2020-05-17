import React, { Dispatch } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Flyer from "./Flyer";
import { FlyersActions, IBasicFlyers } from "../store/flyers/types";
import { IError } from "../types/general";
import * as asyncActions from "../store/flyers/asyncAction";
import { IRootState } from "../store";
import styled from "styled-components";

interface IProps {
  flyersData: Array<IBasicFlyers>;
  loading: boolean;
  error: IError | null;
  getFlyersData: () => void;
}

class GridComponent extends React.Component<IProps, any> {
  componentDidMount() {
    this.props.getFlyersData();
  }

  render() {
    const { flyersData } = this.props;
    return (
      <div>
        {flyersData ? (
          <div>
            <GridContainer container style={{ padding: 24 }}>
              <GridContainer item xs={12} sm={6} lg={4} xl={3}>
                <Flyer {...this.props} />
              </GridContainer>
            </GridContainer>
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

// const mapDispatcherToProps = (dispatch: Dispatch<FlyersActions>) => ({
//   getFlyersData: () => asyncActions.getFlyersData(dispatch),
// });

type ReduxType = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, undefined)(GridComponent);

const GridContainer = styled(Grid)`
  height: 100%;
  width: 100%;
  background-color: #a1a;
`;
