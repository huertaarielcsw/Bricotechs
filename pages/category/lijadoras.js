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
    <Rating value={4.2} precision={0.5} readOnly></Rating>,
    <Rating value={4.3} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>
  ),
  createData('Precio', '36,39 €', '68,93 €', '34,99 €', '36,99 €', '24,49 €'),
  createData(
    'Dimensiones Artículo	',
    '16.2 x 10 x 25.7 cm',
    '11.9 x 29.4 x 26 cm',
    '‎21.3 x 15.2 x 13.2  cm',
    '‎23 x 16.5 x 13.2 cm',
    '20.6 x 18.8 x 6.5 cm'
  ),
  createData(
    'Peso Artículo',
    '0.9 kg',
    '0.9 kg',
    '1.4 kg',
    '1.76 kg',
    '0.68 kg'
  ),
  createData(
    'Voltaje',
    '-',
    '‎230 Voltios',
    '-',
    '‎230 Voltios',
    '3.6 Voltios'
  ),
  createData(
    'Potencia eléctrica',
    '‎55 vatios',
    '100 vatios',
    '‎‎200 vatios',
    '‎300 vatios',
    '-'
  ),
  createData(
    'Fuente de alimentación',
    '‎‎‎Cable eléctrico',
    '‎Eléctrico con cable',
    'Eléctrico con cable',
    'Eléctrico con cable',
    'Baterías'
  ),
  createData('Incluye baterías', 'No', 'No', 'No', '‎No', '‎Sí'),
  createData('Necesita baterías', 'No', 'No', 'No', '‎No', '‎No'),
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

export default function LijadoraScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout
      title="Las 5 lijadoras más vendidas en Amazon España"
      description="BLACK+DECKER Lijadora de Detalle Mouse 55W 11.000RPM Diametro Orbita 1.5mm Incluye 15 Accesorios y Bolsa de Transporte BEW230BC-QS
      Bosch PSM 100 A - Multilijadora, 3 hojas de lija K 80/ K 120/ K 160, maletín (100 W, nº de carreras en vacío: 26.000 opm, Ø circuito oscilante: 1,4 mm)
      Lijadora Eléctrica 200W Tilswall, 15000RPM Lijadora de Detalles Mouse de Diámetro Orbital 1,6mm, con 12 Piezas Lijas de 60 grano y de 120 grano para Alisar Madera y Quitar Pintura
      Lijadora Orbital 300W, HYCHIKA Lijadora Eléctrica con Motor de Cobre Puro, 6 Velocidad, 13000RPM, 12PCS Lija de 125mm (240/120/80 Grano), con Bolsillo Lavable de Recogida, para Lijar Madera y Metal
      Lijadora Eléctrica, TECCPO Máquina Lijadora Compacta para Madera, 15500 RPM con Recolección de Polvo Reutilizable, 12 Piezas de Papel de Lija Incluidos - TAMS23P"
    >
      <header>
        <div>
          <h1>Lijadora</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          Las <strong>lijadoras</strong> son las herramientas perfectas para
          mejorar los acabados de diferentes superficies. La función de estas
          herramientas es obvia, pero dependiendo de la{' '}
          <strong>lijadora</strong> en particular, ofrecerá una característica
          destacable: velocidad, precisión, grandes superficies de trabajo...
        </Typography>
      </div>

      <Divider light />
      <div>
        <h2>Las 5 lijadoras más vendidas</h2>
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
                image={'/images/lijadoras/71rSLwgwSgL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Que mas se puede pedir por el precio que tiene'}
                  heading={
                    'BLACK+DECKER Lijadora de Detalle Mouse 55W 11.000RPM Diametro Orbita 1.5mm Incluye 15 Accesorios y Bolsa de Transporte BEW230BC-QS'
                  }
                  body={
                    'una relación calidad/precio increíble, viene con un montón de lijas, es un abrir y usar. Ademas funciona de maravilla, el uso que le he dado ha sido para lijado de paredes y muebles de madera, sin pega ninguna.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/BEW230BC-QS-Lijadora-di%C3%A1metro-Accesorios-Transporte/dp/B07MKNMDD4?_encoding=UTF8&refRID=NSBTMPGBAZ5NXZB52ZWR&th=1&linkCode=ll1&tag=sarria93-21&linkId=43ec299f17f1a79f2707558c4f052909&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/lijadoras/81r-zQLJMOL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'  Mejor imposible'}
                  heading={
                    'Bosch PSM 100 A - Multilijadora, 3 hojas de lija K 80/ K 120/ K 160, maletín (100 W, nº de carreras en vacío: 26.000 opm, Ø circuito oscilante: 1,4 mm)'
                  }
                  body={
                    'Mejor imposible, me llegó en menos de un día, perfecto, en su caja oficial, con una lija de cada tipo. Tras conectarla y probarla IMPRESIONANTE.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Bosch-Multilijadora-hojas-malet%C3%ADn-carreras/dp/B00IPIYLO0?_encoding=UTF8&psc=1&refRID=NSBTMPGBAZ5NXZB52ZWR&linkCode=ll1&tag=sarria93-21&linkId=65f27e01389253c62a4024520bf89d57&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/lijadoras/71xGEsZulBL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'  Eficaz y manejable'}
                  heading={
                    'Lijadora Eléctrica 200W Tilswall, 15000RPM Lijadora de Detalles Mouse de Diámetro Orbital 1,6mm, con 12 Piezas Lijas de 60 grano y de 120 grano para Alisar Madera y Quitar Pintura'
                  }
                  body={
                    'Buscaba una lijadora para proyectos caseros de bricolaje. Y no puedo estar mas contenta.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Lijadora-El%C3%A9ctrica-Tilswall-Detalles-15000RPM/dp/B07X8ZR5WD?_encoding=UTF8&psc=1&refRID=NSBTMPGBAZ5NXZB52ZWR&linkCode=ll1&tag=sarria93-21&linkId=a935cb4f629525e24d0ee280474df994&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/lijadoras/81hz0B-fX9S._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'  Tamaño medio ergonómica y un largo cable'}
                  heading={
                    'Lijadora Orbital 300W, HYCHIKA Lijadora Eléctrica con Motor de Cobre Puro, 6 Velocidad, 13000RPM, 12PCS Lija de 125mm (240/120/80 Grano), con Bolsillo Lavable de Recogida, para Lijar Madera y Metal'
                  }
                  body={
                    ' Buena lijadora para uso en bricolaje y semi profesional,su tamaño es medio ,poco peso agarre ergonómico variador de velocidad y recogida de polvo una lijadora muy práctica...'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Lijadora-HYCHIKA-Velocidad-Ajustable-El%C3%A9ctrica/dp/B08DHP1D2X?_encoding=UTF8&psc=1&refRID=NSBTMPGBAZ5NXZB52ZWR&linkCode=ll1&tag=sarria93-21&linkId=5fe374b9d5bb54a83212d7ee1c48191d&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/lijadoras/71uclaE+mLL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'Buena calidad'}
                  heading={
                    'Lijadora Eléctrica, TECCPO Máquina Lijadora Compacta para Madera, 15500 RPM con Recolección de Polvo Reutilizable, 12 Piezas de Papel de Lija Incluidos - TAMS23P'
                  }
                  body={
                    'La he podido usar en dos ocasiones para manualidades y va perfecta. El muy fácil de usar, solo tiene un botón el cual hay que mover para ponerla en marcha y apagarla. Deja la superficie lisa con poco esfuerzo.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/El%C3%A9ctrica-TECCPO-Professional-Contenedor-Reutilizable/dp/B07VPQLZ6T?_encoding=UTF8&psc=1&refRID=NSBTMPGBAZ5NXZB52ZWR&linkCode=ll1&tag=sarria93-21&linkId=b449e2db79349481bbf8f636b1e2ba23&language=es_ES&ref_=as_li_ss_tl"
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
  const category = 'Lijadoras';
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
