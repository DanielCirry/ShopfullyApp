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
        <Container>
          <GridComponent {...this.props} />
        </Container>
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

const Container = styled.div`
  position: relative;
  width: calc(100vw - 2px);
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  flex-direction: column;
  white-space: pre-wrap;
  place-content: flex-start;
  padding-left: 11vh;
`;

const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;
