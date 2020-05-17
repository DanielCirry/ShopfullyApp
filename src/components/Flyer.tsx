import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { colors, fonts } from "../globals/theme";

const Flyer = (props: any) => {
  return (
    <div>
      {props && props.is_published && (
        <FLyerCard>
          <CardMediaContent
            image={`https://picsum.photos/${
              // doing this just to have different sizes pictures
              100 + props.id < 10 ? props.id + 100 : props.id + 0
            }/${props.id < 8 ? props.id + 20 : props.id + 0}`}
            title={props.retailer}
          />
          <CardContent>
            <RetailerText>{props.retailer}</RetailerText>
            <br />
            <Typograph>{props.title}</Typograph>
            <Typography component="p">{props.category}</Typography>
          </CardContent>
          <CardActions>
            <CardButton>Add to Preffered</CardButton>
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
  display: flex;
  width: 250px;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardMediaContent = styled(CardMedia)`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 56.25%;
`;

const CardButton = styled(Button)`
  && {
    color: ${({ color }) => (color ? color : colors.grey)};
  }
`;

const Typograph = styled.text`
  font-weight: bold;
  font-style: ${fonts};
  margin-bottom: 50px;
`;

const RetailerText = styled.text`
  letter-spacing: 1px;
`;
