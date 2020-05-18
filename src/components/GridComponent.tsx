import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Flyer from "./Flyer";
import { IBasicFlyers } from "../store/flyers/types";
import { IError } from "../types/general";
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
      <>
        {flyersData && (
          <GridContainer container spacing={0} style={{ padding: 2 }}>
            {this.props.flyersData.map((flyer) => (
              <Grid item sm>
                <Flyer {...flyer} />
              </Grid>
            ))}
          </GridContainer>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ flyers }: IRootState) => ({
  flyersData: flyers.flyersData,
  loading: flyers.flyersDataLoading,
  error: flyers.flyersDataError,
});

type ReduxType = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, undefined)(GridComponent);

const GridContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  justify-content: space-evenly;
`;
