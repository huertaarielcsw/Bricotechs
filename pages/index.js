import Layout from '../components/Layout';
import { Grid } from '@material-ui/core';
import ProductItem from '../components/ProductItem';
//import Category from '../components/Category';
import db from '../utils/db';
import Product from '../models/Product';

export default function Home(props) {
  const { products } = props;
  return (
    <Layout>
      <div>
        <h1>Productos</h1>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
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
