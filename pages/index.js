import Layout from '../components/Layout';
import { Grid } from '@material-ui/core';
import data from '../utils/data';
import ProductItem from '../components/ProductItem';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid
          container
          spacing={3}
          justifyContent="space-evenly"
          alignItems="baseline"
        >
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
