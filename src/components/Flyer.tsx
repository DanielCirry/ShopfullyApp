import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Flyer = (props: any) => {
  return (
    <div>
      {console.log(props)}
      {props.flyersData && props.flyersData.count > 0 && !props.loading && (
        <FLyerCard>
          <CardMediaContent
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
        </FLyerCard>
      )}
    </div>
  );
};

export default Flyer;

const FLyerCard = styled(Card)`
  position: relative;
  flex: 1;
  cursor: pointer;
  width: 358px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const CardMediaContent = styled(CardMedia)`
  width: 100%;
  height: 100%;
  padding-top: 56.25%;
`;

const CardButton = styled(Button)`
  && {
    color: #a0a0a0;
  }
`;
