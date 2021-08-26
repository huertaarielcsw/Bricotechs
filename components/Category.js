import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
import useStyles from '../utils/styles';

export default function Category({ category }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <NextLink href={`/search?category=${category.name}`} passHref>
        <CardActionArea>
          <CardMedia
            className={classes.CardMedia}
            component="img"
            image={category.image}
            title={category.name}
          ></CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {category.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
}
