import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
//import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
//import data from '../../utils/data';
import NextLink from 'next/link';
import useStyles from '../../utils/styles';
import Image from 'next/image';
import Product from '../../models/Product';
import db from '../../utils/db';

export default function ProductScreen(props) {
  const { product } = props;
  const classes = useStyles();
  //const router = useRouter();
  //const { slug } = router.query;
  //const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Producto No Encontrado</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Volver A Productos</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={4} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={642}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={5} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Categoría: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Marca: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.rating} estrellas ({product.numReviews}{' '}
                valoraciones)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Descripción:</Typography>
            </ListItem>
            <ListItem>
              <List>
                {product.description.map((element) => (
                  // eslint-disable-next-line react/jsx-key
                  <ListItem>{element}</ListItem>
                ))}
              </List>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Precio</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{product.price}€</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Disponibilidad</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>
                      {product.countInStock > 0
                        ? 'Disponible'
                        : 'No Disponible'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Comprar en Amazon
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
