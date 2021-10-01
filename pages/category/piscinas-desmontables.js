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
    <Rating value={4.6} precision={0.5} readOnly></Rating>,
    <Rating value={4.3} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.5} precision={0.5} readOnly></Rating>,
    <Rating value={3.8} precision={0.5} readOnly></Rating>
  ),
  createData(
    'Precio',
    '129,00 €',
    '167,50 €',
    '195,00 €',
    '11,99 €',
    '79,96 €'
  ),
  createData(
    'Dimensiones Artículo	',
    '300 x 200 x 75 cm',
    '87.6 x 88 x 29 cm',
    '‎305 x 305 x 76 cm',
    '86.4 x 86.4 x 25.4 cm',
    '30 x 29.5 x 57.5 cm'
  ),
  createData(
    'Peso Artículo',
    '20.7 kg',
    '23.32 kg',
    '‎2.00 kg',
    '830 Gramos',
    '8.79 kg'
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

export default function PiscinaDesmontableScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout
      title="Las 5 piscinas desmontables más vendidas en Amazon España"
      description="Intex 28272NP Small Frame - Piscina desmontable, 300 x 200 x 75 cm, 3.834 litros, azul
      Bestway 56416 - Piscina Desmontable Tubular Steel Pro Max 366x76 cm Depuradora de Cartucho 1.249 litros/hora
      Intex 28202NP - Piscina redonda metal frame intex 305x76 cm 4485 litros + depuradora
      INTEX-57100NP Piscina infantil hinchable cuadrada, colores aleatorios, 86 x 86 x 25 cm, 1 unidad
      Bestway 57270 - Piscina Desmontable Autoportante Fast Set 305x76 cm Depuradora de cartucho de 1.249 litros/hora"
    >
      <header>
        <div>
          <h1>Piscinas Desmontables</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          La <strong>diversión acuática en verano</strong> puede estar al
          alcance de todos. Las
          <strong>piscinas desmontables</strong> te permiten refrescarte y hacer
          frente a las altas temperaturas sin tener que llevar a cabo una gran
          inversión económica. Las <strong>piscinas desmontables</strong>{' '}
          ofrecen casi todas las ventajas de una{' '}
          <strong>piscina de obra</strong>. Permiten refrescarse en los
          calurosos días de verano,{' '}
          <strong>chapotear y realizar juegos acuáticos a los niños</strong> e,
          incluso, realizar algo de ejercicio a los adultos. Y, todo ello, con
          un
          <strong>presupuesto mucho menor que el de una piscina de obra</strong>
          .
        </Typography>
      </div>

      <Divider light />
      <div>
        <h2>Las 5 piscinas desmontables más vendidas</h2>
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
                image={
                  '/images/piscinasDesmontables/71hukYKs-KL._AC_SL1500_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'Su montaje'}
                  heading={'Intex 28272NP Small Frame - Piscina desmontable'}
                  body={
                    'Viene muy bien preparada estoy muy satisfecho con la compra'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Intex-28272NP-Small-Frame-desmontable/dp/B001IWNDDA?_encoding=UTF8&refRID=9BGXWGCA2MAEVJAYYCTR&th=1&linkCode=ll1&tag=sarria93-21&linkId=efff86aada0d21b5efb3f4855ab76fb6&language=es_ES&ref_=as_li_ss_tl"
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
                image={
                  '/images/piscinasDesmontables/91vDhbmeTWL._AC_SL1500_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Bendita compra'}
                  heading={
                    'Bestway 56416 - Piscina Desmontable Tubular Steel Pro Max 366x76 cm'
                  }
                  body={
                    'La compré hace 2 veranos para un campo, por tanto, montada y desmontada 2 veces. Este verano "confinado" ha sido la única manera de refrescarnos, por lo que la inversión ha sido excelente.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Bestway-56416-Desmontable-depuradora-Cartucho/dp/B014FHBB4W?_encoding=UTF8&refRID=9BGXWGCA2MAEVJAYYCTR&th=1&linkCode=ll1&tag=sarria93-21&linkId=c6dd207aa4eafb006f53c7d38743c663&language=es_ES&ref_=as_li_ss_tl"
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
                image={
                  '/images/piscinasDesmontables/61NmriFzPFS._AC_SL1500_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Muy buena compra, materiales de calidad.'}
                  heading={
                    'Intex 28202NP - Piscina redonda metal frame intex 305x76 cm 4485 litros + depuradora'
                  }
                  body={
                    'Perfecta y muy bonita. El montaje es sencillo, aunque lleve bastante tiempo, sobre 1 hora una persona. Los materiales son de buena calidad.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Intex-Metal-Frame-Piscina-desmontable/dp/B00FCT255C?_encoding=UTF8&refRID=9BGXWGCA2MAEVJAYYCTR&th=1&linkCode=ll1&tag=&linkId=7a926e2ff7d913c272fbe637a37e8c4f&language=es_ES&ref_=as_li_ss_tl"
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
                image={
                  '/images/piscinasDesmontables/71VIDjgR4rL._AC_SL1500_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Piscina bebes'}
                  heading={'INTEX-57100NP Piscina infantil hinchable cuadrada'}
                  body={
                    'Piscina correcta para bebés. Al ser cuadrada si el bebé se apoya en los laterales es más difícil que vuelquen.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Intex-infantil-hinchable-cuadrada-surtidos/dp/B00C6A5OOO?_encoding=UTF8&psc=1&refRID=9BGXWGCA2MAEVJAYYCTR&linkCode=ll1&tag=sarria93-21&linkId=e336687c3db3c549d5ee00a76b5c58ec&language=es_ES&ref_=as_li_ss_tl"
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
                image={
                  '/images/piscinasDesmontables/81CST2YJICL._AC_SL1500_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Piscina hinchable'}
                  heading={
                    'Bestway 57270 - Piscina Desmontable Autoportante Fast Set'
                  }
                  body={
                    'Buen producto la tengo hace una semana y de momento todo perfecto'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Lola-Home-Bestway-57268-depuradora/dp/B014FHC96G?_encoding=UTF8&psc=1&refRID=9BGXWGCA2MAEVJAYYCTR&linkCode=ll1&tag=sarria93-21&linkId=79ebf2b2a250f9dbe8ffbde87fdf9d46&language=es_ES&ref_=as_li_ss_tl"
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
  const category = 'Piscinas desmontables';
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
