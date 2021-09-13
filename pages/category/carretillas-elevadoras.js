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
    <Rating value={0.0} precision={0.5} readOnly></Rating>,
    <Rating value={0.0} precision={0.5} readOnly></Rating>,
    <Rating value={0.0} precision={0.5} readOnly></Rating>,
    <Rating value={0.0} precision={0.5} readOnly></Rating>
  ),
  createData('Precio', '-', '1645,95 €', '-', '1190,00 €', '1190,00 €'),
  createData(
    'Dimensiones Artículo	',
    '37 x 37 x 19.3 cm',
    '-',
    '150 x 120 x 80 cm',
    '-',
    '-'
  ),
  createData('Peso Artículo', '4.0 kg', '-', '‎91 kg', '-', '‎210 kg'),
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

export default function CarretillaElevadoraScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout>
      <header>
        <div>
          <h1>Carretillas Elevadoras</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          Las <strong>carretillas elevadoras</strong> son una parte crucial
          dentro la logística y la gestión del almacén.
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
        <h2>Las 5 carretillas elevadoras más vendidas</h2>
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
                image={'/images/carretillasElevadoras/51Qp6huG5nL.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'-'}
                  heading={'Makinex 0004662 Carretilla De Mano Motorizada'}
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
                image={'/images/carretillasElevadoras/41eqdNt892L._AC_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'-'}
                  heading={'Ayerbe - Apilador manual ay-2500-apm 1000kg'}
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
                image={'/images/carretillasElevadoras/71WsEAIIb9L._SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'-'}
                  heading={'TAP 47004 Apilador manual - fuerza 400kg'}
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
                image={'/images/carretillasElevadoras/41IyjGz-2nL.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'-'}
                  heading={
                    'APILADOR MANUAL DE 1000KG DE CAPACIDAD 1600MM DE ELEVACIÓN'
                  }
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
                image={'/images/carretillasElevadoras/41PbOmMMWZL._AC_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'-'}
                  heading={
                    'Apilador Manual de 1000kg de capacidad y 1600mm de elevación'
                  }
                  body={'-'}
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
  const category = 'Carretillas Elevadoras';
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
