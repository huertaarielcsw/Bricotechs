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
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

export default function ProductItem({ product }) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <NextLink href={`/product/${product.slug}`} passHref>
        <CardActionArea>
          <CardMedia
            className={cx(styles.media, mediaStyles.root)}
            image={product.image}
          />
          <CardContent>
            <Typography>{product.name}</Typography>
            <Rating value={product.rating} precision={0.5} readOnly></Rating>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>{product.price}€</Typography>
        <Button
          size="small"
          color="primary"
          href="https://www.amazon.es/taladros-atornilladores/b?ie=UTF8&node=3049734031"
        >
          Comprar en Amazon
        </Button>
      </CardActions>
    </Card>
  );
}
