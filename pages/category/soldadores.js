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
    <Rating value={4.3} precision={0.5} readOnly></Rating>,
    <Rating value={3.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.5} precision={0.5} readOnly></Rating>,
    <Rating value={4.1} precision={0.5} readOnly></Rating>,
    <Rating value={4.5} precision={0.5} readOnly></Rating>
  ),
  createData('Precio', '13,99 €', '21,36 €', '44,00 €', '36,99 €', '160,00 €'),
  createData(
    'Dimensiones Artículo	',
    '‎26.4 x 6.8 x 6.6 cm',
    '26 x 12 x 15 cm',
    '19 x 2.5 x 2.5 cm',
    '‎29.3 x 23.8 x 7.7 cm',
    '‎25.4 x 10 x 17 cm'
  ),
  createData('Peso Artículo', '320 g', '400 g', '‎135 g', '1.31 kg', '2.4 kg'),
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

export default function SoldadorScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout>
      <header>
        <div>
          <h1>Soldadores</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          La <strong>soldadura</strong> es un proceso de fijación en el cual se
          realiza la unión de dos o más piezas de un material (generalmente
          metales o termoplásticos), usualmente logrado a través de la
          coalescencia (fusión), en la cual las piezas son soldadas fundiendo,
          se puede agregar un material de aporte (metal o plástico), que, al
          fundirse, forma un charco de material fundido entre las piezas a
          soldar (el baño de soldadura) y, al enfriarse, se convierte en una
          unión fija a la que se le denomina cordón.
        </Typography>
      </div>

      <Divider light />
      <div>
        <h2>Los 5 soldadores más vendidos</h2>
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
                image={'/images/soldadores/61sONbaNn2L._AC_SL1000_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Tº ajustable y buen precio'}
                  heading={
                    'E·Durable Soldadores de Estaño Electronica, 60W 220V Kit del Soldador 5pcs Puntas Diferentes,Alambre de Soldadura Soporte,Cortador,Pinzas,destornillador'
                  }
                  body={
                    '... la compra es totalmente recomendable, relación calidad precio muy buena, además tiene regulación de temperatura.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/%C2%B7Durable-Soldador-electrico-Destornilladores-Soldadura/dp/B07MW64Z9H?_encoding=UTF8&refRID=QJGZR3QF2MEDPG5TDGNC&th=1&linkCode=ll1&tag=sarria93-21&linkId=0fa13090428ae9c59d045b6597d670bb&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/soldadores/71erzy6QM5L._SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Su calidad y precio'}
                  heading={'Campingaz 2000026173 - Soldador'}
                  body={
                    'Muy buena antorcha, practica y manuable su peso es muy práctico y se pueden hacer muchos trabajos.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Campingaz-2000026173-Soldador/dp/B01AJE8OH2?_encoding=UTF8&psc=1&refRID=QJGZR3QF2MEDPG5TDGNC&linkCode=ll1&tag=sarria93-21&linkId=09bf3607a3174248b93dc9b61fe3eb2d&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/soldadores/61lpNdFHpdL._SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Una maravilla'}
                  heading={
                    'Dremel Versatip 2000 - Pirograbador a gas butano con 6 puntas para soldadura, pirografo, fusión, corte en caliente, compresión (duración de encendido máximo 90 min)'
                  }
                  body={
                    'De todos los soldadores de gas que he tenido, este, con diferencia, es el mejor.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Dremel-Versatip-2000-6-encendido-accesorios/dp/B000QGC6XW?_encoding=UTF8&refRID=QJGZR3QF2MEDPG5TDGNC&th=1&linkCode=ll1&tag=sarria93-21&linkId=860d72f1c92269e161575a85d678ffee&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/soldadores/91srqH+z+2L._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Calidad precio utilidad'}
                  heading={
                    'Bostar Máquinas de Soldadura de Parachoques Automáticos 220V'
                  }
                  body={
                    'Genial muy fácil de usar la verdad q un gran invento para hacer bricos y arreglar plásticos que veías imposibles con pegamentos, una máquina que me sorprendió muy completa y de fácil manipulación.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Bostar-Parachoques-Autom%C3%A1ticos-Herramienta-Guardafango/dp/B08GXBJHR5?_encoding=UTF8&psc=1&refRID=QJGZR3QF2MEDPG5TDGNC&linkCode=ll1&tag=sarria93-21&linkId=11d1e7bb5e801d98f1167b37ae565a3c&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/soldadores/81zYf8eKdZS._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'Perfecta'}
                  heading={
                    'STAYER 1.2381 Equipo de Soldadura Inverter, Super Plus 160 GEK'
                  }
                  body={
                    'Es la máquina ideal para trabajos en casa pero si necesitas algo potente también sirve muy satisfecho'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/STAYER-1-2381-Equipo-Soldadura-Inverter/dp/B08YRSM21X?_encoding=UTF8&psc=1&refRID=QJGZR3QF2MEDPG5TDGNC&linkCode=ll1&tag=sarria93-21&linkId=3c3853d791a5700d9775c18e59e99d5f&language=es_ES&ref_=as_li_ss_tl"
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
  const category = 'Soldadores';
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
