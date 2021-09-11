import Layout from '../components/Layout';
import { Divider, Grid, Typography } from '@material-ui/core';
import ProductItem from '../components/ProductItem';
import Category from '../components/Category';
import db from '../utils/db';
import Product from '../models/Product';
import data from '../utils/data';

export default function Home(props) {
  const { products } = props;
  return (
    <Layout>
      <header>
        <div>
          <h1>Para Apasionados del Bricolaje</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          Últimamente considerada como una actividad de recreo,{' '}
          <strong>
            el bricolaje o DIY (Do it Yourself o “hazlo tú mismo”)
          </strong>
          , al igual que en deportes, música o cultura, despierta pasiones. El
          número de personas que utilizan el bricolaje para arreglar los objetos
          que están en sus hogares, sigue aumentando cada vez más.{' '}
          <strong>
            {' '}
            Para muchas personas es una actividad sencilla, entretenida,
            apasionante, motivadora, y con un aporte de utilidad para el hogar o
            para la familia, e incluso hasta beneficiosa para la salud.
          </strong>
        </Typography>

        <Typography variant="body1" gutterBottom>
          El bricolaje es una actividad extensa en su práctica y que precisa de{' '}
          <strong>
            herramientas y materiales indispensables para su desarrollo como un
            banco o lugar específico donde trabajar, un taladro, una lijadora,
            una caladora, etc.
          </strong>
          , dependiendo de la actividad a realizar. Dedicamos mucho tiempo a
          analizar y comparar todos los modelos y tipos de herramientas para
          ofrecer nuestra experiencia a los clientes con el fin de ayudarles a
          llevar a cabo su pasión, aconsejándoles y garantizando siempre el
          mejor precio y calidad. En nuestra web podrás encontrar{' '}
          <strong>los 5 productos más vendidos</strong> de las distintas
          categorías que te ofrecemos junto a una comparativa entre ellos para
          facilitar tu elección.
        </Typography>
      </div>
      <Divider light />
      <div>
        <h2>Categorías</h2>
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
        <h2>Productos</h2>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid container item md={4} key={product.name}>
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
