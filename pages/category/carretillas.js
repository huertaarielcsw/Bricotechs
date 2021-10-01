import Layout from '../../components/Layout';
import { Divider, Grid, Typography, Link } from '@material-ui/core';
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
import NextLink from 'next/link';

function createData(name, _1, _2, _3, _4, _5) {
  return { name, _1, _2, _3, _4, _5 };
}
const rows = [
  createData(
    'Calificación de cliente',
    <Rating value={4.5} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.1} precision={0.5} readOnly></Rating>,
    <Rating value={4.0} precision={0.5} readOnly></Rating>,
    <Rating value={4.0} precision={0.5} readOnly></Rating>
  ),
  createData('Precio', '49,90 €', '75,73 €', '27,99 €', '48,67 €', '69,99 €'),
  createData(
    'Dimensiones Artículo	',
    '‎110 x 43 x 39 cm',
    '‎119 x 51 x 46 cm',
    '42.9 x 29.3 x 9.1 cm',
    '‎23.5 x 8 x 44.5 cm',
    '‎60 x 45 x 109 cm'
  ),
  createData(
    'Peso Artículo',
    '3.2 kg',
    '13.4 kg',
    '‎1.56 kg',
    '‎1.28 kg',
    '11.7 kg'
  ),
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

export default function CarretillaScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout
      title="Las 5 carretillas más vendidas en Amazon España"
      description="ATHLON TOOLS Carretilla plegable de aluminio | zona de carga con almohadillas antideslizantes | ruedas con bandas de rodadura suaves | incl. 2 cuerdas extensibles
      Stanley SXWTD-HT523 - Carretilla de mano de acero, 200 kg, Amarilla
      Hivexagon Carrito de Equipaje Plegable, Compacto Ligero Duradero de Aluminio Capacidad de Carga de 40kg/88lbs para Equipaje, Viajes, de compras, Uso en Oficina y Transporte HG405
      Meister 8985730 - Carretilla, 45 kg, mini, plegable
      DURHAND Carretilla Plegable para Escalera con Ruedas Carga 150kg Carretilla de Mano Portátil para Entrega Almacenes Mercado Viajar Mudarse"
    >
      <header>
        <div>
          <h1>Carretillas</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          La <strong>carretilla</strong> es un vehículo con una sola rueda o
          dos, que se utiliza para transportar pequeños montos de carga y sólo
          se necesita el trabajo de una persona para ponerla en funcionamiento.
          Las <strong>carretillas</strong>
          con dos ruedas son mucho más útiles para transportar objetos muy
          pesados que son difíciles de controlar con sólo una rueda. La
          <strong>carretilla</strong> es importante para las empresas que
          transportan muchas cargas pequeñas de un lugar a otro, o bien para el
          uso hogareño.
        </Typography>
      </div>

      <Divider light />
      <div>
        <h2>Las 5 carretillas más vendidas</h2>
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
                    <div>
                      <NextLink href={product.link} passHref>
                        <Link>{product.name}</Link>
                      </NextLink>
                    </div>
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
        <h2>Opiniones de Compradores</h2>
        <Grid container spacing={3}>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/carretillas/71sUmgjClRL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Facil manejo y resistente'}
                  heading={'ATHLON TOOLS Carretilla plegable de aluminio'}
                  body={
                    'Lo utilizo para el trabajo y cumple perfectamente mis necesidades de carga de maletin de herramientas y mochila de trabajo. Excelente producto.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/ATHLON-TOOLS-Carretilla-almohadillas-antideslizantes/dp/B07QN5JQG9?_encoding=UTF8&psc=1&refRID=35D07WK77N1YWC2VVG6B&linkCode=ll1&tag=sarria93-21&linkId=99a8c09f9664b63d6ba797448b9f3a8b&language=es_ES&ref_=as_li_ss_tl"
                >
                  Leer más
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/carretillas/51NB8SH6kuL._AC_SL1000_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'Lo he puesto a prueba y la ha superado'}
                  heading={'Stanley SXWTD-HT523 - Carretilla de mano de acero'}
                  body={
                    'Pues bien, he transportado hasta 90kg de una vez y varias veces y se ha comportado de 10.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Stanley-SXWTD-HT523-Steel-Hand-Truck/dp/B01N95171E?_encoding=UTF8&refRID=35D07WK77N1YWC2VVG6B&th=1&linkCode=ll1&tag=sarria93-21&linkId=3a5de79629b45e6bf7b3a12d3a70870e&language=es_ES&ref_=as_li_ss_tl"
                >
                  Leer más
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/carretillas/618lpV9TV8L._SL1001_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Impresionado por el momento'}
                  heading={'Hivexagon Carrito de Equipaje Plegable'}
                  body={
                    'Con mas de 3 semanas de uso, aveces INTENSIVO, estoy muy impresionado por la resistencia de este carrito.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Hivexagon-Equipaje-Plegable-Capacidad-Transporte/dp/B07R8BQ6V3?_encoding=UTF8&psc=1&refRID=35D07WK77N1YWC2VVG6B&linkCode=ll1&tag=sarria93-21&linkId=aa7ef7989c2f68b36ec5f047e9998ed0&language=es_ES&ref_=as_li_ss_tl"
                >
                  Leer más
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/carretillas/71aIYrucbPL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Da el apaño.'}
                  heading={
                    'Meister 8985730 - Carretilla, 45 kg, mini, plegable'
                  }
                  body={
                    'Para transportar algunas cajas de herramientas viene muy bien, no es para llevar gran peso pero si para liberarte de cargar con las herramientas de mano.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Meister-8985730-Carretilla-45-plegable/dp/B01MS1Q3QT?_encoding=UTF8&psc=1&refRID=35D07WK77N1YWC2VVG6B&linkCode=ll1&tag=sarria93-21&linkId=9594710adf7d443da66b03ee1778cb62&language=es_ES&ref_=as_li_ss_tl"
                >
                  Leer más
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid container item md={12}>
            <Card className={cx(styles.root)}>
              <CardMedia
                className={styles.media}
                image={'/images/carretillas/616KnVzTapL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'Manejable'}
                  heading={
                    'DURHAND Carretilla Plegable para Escalera con Ruedas'
                  }
                  body={
                    'Resistente, practica , las ruedas te ayudan a bajar y subir escaleras . Yo la uso para trabajar y es perfecta .'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/DURHAND-Carretilla-Plegable-Escalera-Almacenes/dp/B081511DHT?_encoding=UTF8&psc=1&refRID=35D07WK77N1YWC2VVG6B&linkCode=ll1&tag=sarria93-21&linkId=a06afc15f8d6bdb0a18eaea633976739&language=es_ES&ref_=as_li_ss_tl"
                >
                  Leer más
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const category = 'Carretillas';
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
