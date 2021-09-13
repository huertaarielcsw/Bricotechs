import Layout from '../../components/Layout';
import { Divider, Grid, Typography } from '@material-ui/core';
import ProductItem from '../../components/ProductItem';
import db from '../../utils/db';
import Product from '../../models/Product';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Rating } from '@material-ui/lab';
import Image from 'next/image';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';

function createData(name, _1, _2, _3, _4, _5) {
  return { name, _1, _2, _3, _4, _5 };
}
const rows = [
  createData(
    'Calificación de cliente',
    <Rating value={0.0} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>,
    <Rating value={5.0} precision={0.5} readOnly></Rating>,
    <Rating value={4.2} precision={0.5} readOnly></Rating>,
    <Rating value={4.8} precision={0.5} readOnly></Rating>
  ),
  createData(
    'Precio',
    '369,45 €',
    '345,00 €',
    '409,00 €',
    '388,50 €',
    '435,13 €'
  ),
  createData(
    'Dimensiones Artículo	',
    '‎150 x 54 x 50 cm',
    '-',
    '-',
    '152 x 54 x 44 cm',
    '-'
  ),
  createData('Peso Artículo', '80 kg', '‎70 kg', '‎63 kg', '‎62 kg', '72 kg'),
];

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 750,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '25%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      //backgroundImage: 'linear-gradient(147deg, #FBFCFC  0%, #979A9A 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export default function TranspaletaScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout>
      <header>
        <div>
          <h1>Transpaletas</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          En los almacenes modernos, el medio más simple y más ampliamente
          utilizado es la <strong>transpaleta</strong>. Es un equipo de
          transporte, no de elevación, que se maneja de forma manual en la
          mayoría de los casos. Estas máquinas son muy versátiles, ya que se
          pueden emplear para realizar múltiples trabajos tales como la carga y
          descarga de camiones, el traslado en distancias cortas de palets y
          contenedores, o servir como medios auxiliares de apoyo en las
          operaciones de picking. En general, las <strong>transpaletas</strong>{' '}
          y en especial las manuales son unos elementos imprescindibles y de
          escaso coste de adquisición que resuelven situaciones en todas las
          actividades de almacenaje.
        </Typography>
      </div>
      <Divider light />
      <div>
        <h2>Comparación</h2>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                {products.map((product) => (
                  <TableCell key={product.name} align="right">
                    <div>
                      <Image
                        alt={product.name}
                        src={product.image}
                        height="200px"
                        width="200px"
                      ></Image>
                    </div>
                    <div>{product.name}</div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row._1}</TableCell>
                  <TableCell align="right">{row._2}</TableCell>
                  <TableCell align="right">{row._3}</TableCell>
                  <TableCell align="right">{row._4}</TableCell>
                  <TableCell align="right">{row._5}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Divider light />
      <div>
        <h2>Las 5 transpaletas más vendidas</h2>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid container item md={4} key={product.name}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </div>

      <Divider light />
      <div>
        <h2>Opiniones de Compradores</h2>
        <Grid container spacing={3}>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/transpaletas/51-a-qhL++L._AC_SL1372_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'-'}
                  heading={'WOLFPACK LINEA PROFESIONAL Transpaleta De Almacen'}
                  body={'-'}
                />
                <Button className={buttonStyles}>Read more</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/transpaletas/51aa-CUFuKL._AC_SL1050_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Transpaleta Genial'}
                  heading={
                    'Ayerbe transpaletas - Transpaleta ay-2500-thn ruedas nylon'
                  }
                  body={
                    'Envío muy rápido, incluso antes de su posible fecha de entrega. Muy buena y robusta transpaleta'
                  }
                />
                <Button className={buttonStyles}>Read more</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/transpaletas/31IIr8eqWPS.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'-'}
                  heading={'Transpaleta Manual 2500 kg'}
                  body={'-'}
                />
                <Button className={buttonStyles}>Read more</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/transpaletas/61dkfU2y7IL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Hace su funcion!'}
                  heading={'Einhell palé Transpaleta TC de PT 2500'}
                  body={
                    'Pues yo estoy encantado con la transpaleta, para el uso que la quería cumple de sobras. Como punto fuerte las Ruedas que son de goma, no de nylon o plastico duro, por lo que no hace ruido al deslazarla.'
                  }
                />
                <Button className={buttonStyles}>Read more</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/transpaletas/51tUVKou28L._AC_SL1050_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'Calidad precio de 10'}
                  heading={'Ayerbe M110167 - Traspaleta '}
                  body={
                    'Perfecto y calidad precio inmejorable, transpalet de 10!'
                  }
                />
                <Button className={buttonStyles}>Read more</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const category = 'Transpaletas';
  const categoryFilter = { category };
  await db.connect();
  const products = await Product.find({ ...categoryFilter }).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
