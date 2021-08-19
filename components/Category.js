import React from 'react';
import NextLink from 'next/link';
import useStyles from '../utils/styles';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';

export default function Category(category) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <NextLink href={`/search?category=${category}`} passHref>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            image={'/images/91t9IiGMbkL._AC_SL1500_.jpg'}
            title={category}
          ></CardMedia>
        </CardActionArea>
      </NextLink>
    </Card>
  );
}
