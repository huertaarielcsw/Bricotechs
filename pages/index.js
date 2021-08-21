import Layout from '../components/Layout';
import { Divider, Grid } from '@material-ui/core';
import ProductItem from '../components/ProductItem';
import Category from '../components/Category';
import db from '../utils/db';
import Product from '../models/Product';
import data from '../utils/data';

export default function Home(props) {
  const { products } = props;
  return (
    <Layout>
      <div>
        <h1>Categorías</h1>
        <Grid container spacing={2}>
          {data.categoriesList.map((category) => (
            <Grid item md={2} xs={6} key={category.name}>
              <Category category={category} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Divider light />
      <div>
        <h1>Productos</h1>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid container item md={4} xs={6} key={product.name}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
