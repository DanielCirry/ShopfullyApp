import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "../store";
import * as asyncActions from "../store/flyers/asyncAction";
import { FlyersActions, IBasicFlyers } from "../store/flyers/types";
import ContainerBox from "../components/ContainerBox";
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
      <Container>
        <GridComponent {...this.props} />
      </Container>
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
