import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Dispatch } from "redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IError } from "../types/general";
import { IBasicFlyers, IGetFlyersResponse } from "../store/flyers/types";
import { paginate } from "../selectors/flyers";

// interface IProps {
//   flyersData: IGetFlyersResponse | null;
//   loading: boolean;
//   error: IError | null;
//   getFlyersData: () => void;
// }

// interface IState {
//   page: number;
//   limit: number;
//   visibleFlyers: Array<IBasicFlyers>;
// }

// class Flyer extends React.Component<IProps, IState> {
//   public state: IState = {
//     page: 1,
//     limit: 100,
//     visibleFlyers: new Array<IBasicFlyers>(),
//   };

//   componentDidMount = () => {
//     this.props.getFlyersData();
//   };

//   componentDidUpdate(prevProps: IProps, prevState: IState) {
//     const { flyersData, loading } = this.props;
//     const { page, limit } = this.state;

//     console.log("AAAA: " + flyersData);
//     if (
//       prevProps.loading &&
//       !loading &&
//       flyersData &&
//       flyersData.results.map((flyer) => flyer.is_published)
//     ) {
//       this.setState({
//         visibleFlyers: paginate(flyersData.results, limit, page),
//       });

//       if (flyersData && prevState.page !== page) {
//         this.setState({
//           visibleFlyers: paginate(flyersData.results, limit, page),
//         });
//       }
//     }
//   }

//   public render() {
//     const { flyersData, loading, error } = this.props;
//     const { limit, visibleFlyers } = this.state;
const Flyer = (props: { flyersData: { results: any[] } }) => {
  return (
    <div>
      {props.flyersData && (
        <Card>
          <CardMediaContent
            style={{ height: 0, paddingTop: "56.25%" }}
            image={`https://picsum.photos/${props.flyersData.results.map(
              (flyer: { id: any }) => flyer.id
            )}/${props.flyersData.results.map(
              (flyer: { id: number }) => flyer.id + flyer.id / 3
            )}`}
            title={"kkk"}
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              {props.flyersData.results.map(
                (flyer: { retailer: any }) => flyer.retailer
              )}
            </Typography>
            <Typography component="p">
              {props.flyersData.results.map(
                (flyer: { title: any }) => flyer.title
              )}
            </Typography>
            <Typography component="p">
              {props.flyersData.results.map(
                (flyer: { category: any }) => flyer.category
              )}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={"//"} target="_blank">
              Add to Preffered
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default Flyer;

const CardMediaContent = styled(CardMedia)`
  width: 100%;
  height: 100%;
  padding-top: 56.25%;
`;
