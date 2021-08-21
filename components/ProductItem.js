import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
import Rating from '@material-ui/lab/Rating';
import useStyles from '../utils/styles';

export default function ProductItem({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <NextLink href={`/product/${product.slug}`} passHref>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.CardMedia}
            component="img"
            image={product.image}
            title={product.name}
          ></CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography>{product.name}</Typography>
            <Rating value={product.rating} precision={0.5} readOnly></Rating>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>${product.price}</Typography>
        <Button
          size="small"
          color="primary"
          href="https://www.amazon.es/taladros-atornilladores/b?ie=UTF8&node=3049734031"
          //onClick={() => addToCartHandler(product)}
        >
          Comprar en Amazon
        </Button>
      </CardActions>
    </Card>
  );
}
