import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "../store";
import * as asyncActions from "../store/flyers/asyncAction";
import { FlyersActions, IBasicFlyers } from "../store/flyers/types";
import GridComponent from "../components/GridComponent";
import { IError } from "../types/general";

interface IProps {
  flyersData: Array<IBasicFlyers>;
  loading: boolean;
  error: IError | null;
  getFlyersData: () => void;
}

class FlyersPage extends React.Component<IProps, any> {
  componentDidMount() {
    this.props.getFlyersData();
  }

  render() {
    return (
      <ContentContainer>
        <GridComponent {...this.props} />{" "}
      </ContentContainer>
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

type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps>;

export default connect(mapStateToProps, mapDispatcherToProps)(FlyersPage);

const ContentContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  padding: 2px;
`;
