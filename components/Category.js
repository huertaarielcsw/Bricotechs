/* eslint-disable @next/next/no-img-element */
import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from './Card/Card.js';
import CardBody from './Card/CardBody.js';
import Button from './CustomButtons/Button.js';

import imagesStyles from '../styles/jss/nextjs-material-kit/imagesStyles.js';

import { cardTitle } from '../styles/jss/nextjs-material-kit.js';

import Rating from '@material-ui/lab/Rating';
import { Typography } from '@material-ui/core';

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards({ product }) {
  const classes = useStyles();
  return (
    <Card style={{ width: '20rem' }}>
      <img
        style={{ height: '180px', width: '100%', display: 'block' }}
        className={classes.imgCardTop}
        src={product.image}
        alt={product.name}
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{product.name}</h4>
        <Rating value={product.rating} precision={0.5} readOnly></Rating>
        <Typography>${product.price}</Typography>
        <Button
          size="small"
          color="primary"
          href="https://www.amazon.es/taladros-atornilladores/b?ie=UTF8&node=3049734031"
        >
          Comprar en Amazon
        </Button>
      </CardBody>
    </Card>
  );
}
