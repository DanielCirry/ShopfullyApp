import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as asyncActions from "../store/flyers/asyncAction";
import { FlyersActions, IGetFlyersResponse } from "../store/flyers/types";
import ContainerBox from "../components/ContainerBox";
import GridComponent from "../components/GridComponent";
import { IError } from "../types/general";

interface IProps {
  flyersData: IGetFlyersResponse | null;
  loading: boolean;
  error: IError | null;
  getFlyersData: () => void;
}

// interface IState {
//   modalOpen: boolean;
// }

class FlyersPage extends React.Component<IProps, any> {
  componentDidMount() {
    this.props.getFlyersData();
  }

  render() {
    return (
      <ContainerBox>
        <GridComponent {...this.props} />
      </ContainerBox>
    );
  }
}

const mapDispatcherToProps = (dispatch: Dispatch<FlyersActions>) => ({
  getFlyersData: () => asyncActions.getFlyersData(dispatch),
});
type ReduxType = ReturnType<typeof mapDispatcherToProps>;

export default connect(null, mapDispatcherToProps)(FlyersPage);

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding-bottom: 30px;
  margin-top: 50px;
`;

const ContentContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
`;
