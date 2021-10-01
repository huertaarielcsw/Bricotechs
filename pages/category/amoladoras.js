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
    <Rating value={4.7} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>
  ),
  createData('Precio', '24,93 €', '79,00 €', '34,00 €', '35,99 €', '89,99 €'),
  createData(
    'Dimensiones Artículo	',
    '32.5 x 12 x 11.5 cm',
    '35.5 x 11.5 x 12 cm',
    '27.1 x 22.5 x 11.3  cm',
    '‎32.2 x 14.4 x 12.5  cm',
    '‎35.7 x 20 x 16.8 cm'
  ),
  createData(
    'Peso Artículo',
    '1.85 kg',
    '1.61 kg',
    '‎2.00 kg',
    '‎3.26 kg',
    '3.83 kg'
  ),
  createData(
    'Voltaje',
    '-',
    '230 Voltios',
    '230 Voltios',
    '-',
    '‎18 Voltios (CC)'
  ),
  createData(
    'Potencia eléctrica',
    '‎710 vatios',
    '720 vatios',
    '‎850 vatios',
    '‎860 vatios',
    '‎72 vatios'
  ),
  createData(
    'Fuente de alimentación',
    '‎‎-',
    '‎‎Cable eléctrico',
    'Cable eléctrico',
    '-',
    '‎Funciona con Batería 18V'
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

export default function AmoladoraScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout
      title="Las 5 amoladoras más vendidas en Amazon España"
      description="Black+Decker BEG010-QS - Amoladora 115mm, 710W, 12.000 rpm 
      Bosch Professional GWS 7-115 E - Amoladora angular (720 W, 2800 – 11000 rpm, Ø Disco 115 mm, protección rearranque, en caja)
      Einhell Amoladora angular TC-AG 125 (850W, 12.000 1/min de velocidad, disco de 125mm-ø, protector de disco, bloqueo de husillo, cabezal de engranaje plano de aluminio)
      Amoladora Angular Profesional,Tilswall 860W 12000 RPM 125mm,Amoladora Angular con 3 Discos de Corte y 2 Esmerilado,Cubierta Protectora para Esmerilado/Pulido/Corte
      Amoladora Angular 18V, HYCHIKA Radial Angular Inalámbrico, 8500RPM con 4.0Ah Batería, 4*Discos para Lijar y 1*para Cortar, Mango Ajustable, Cargador Rápido, Amoladora Angular a Batería para Multiusar"
    >
      <header>
        <div>
          <h1>Amoladoras</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          A grandes rasgos podemos afirmar que la{' '}
          <strong>amoladora eléctrica</strong> nos sirve para{' '}
          <strong>lijar, abrillantar, pulir, desbastar y cortar</strong>{' '}
          determinados materiales ya sean blandos o duros. Como hemos mencionado
          anteriormente, los usos de la <strong>amoladora</strong> son muy
          diversos y es que es una herramienta muy versátil. La{' '}
          <strong>amoladora</strong> nos permite realizar todo tipo de trabajos
          a nivel <strong>doméstico o profesional</strong> en función de los
          discos que usemos así como de la potencia y el motor de la propia
          herramienta eléctrica. Tendrás que tener en cuenta qué tipo de
          <strong>amoladora</strong> se adapta mejor a tus necesidades, si la{' '}
          <strong>amoladora eléctrica</strong>
          que se suele utilizar más para trabajos industriales, o la{' '}
          <strong>amoladora</strong> a batería destinada para labores de{' '}
          <strong>bricolaje casero</strong>.
        </Typography>
      </div>

      <Divider light />
      <div>
        <h2>Las 5 amoladoras más vendidas en Amazon España</h2>
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
                image={'/images/amoladoras/81M6s7FW1uL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'amoladora casi regalada'}
                  heading={
                    'Black+Decker BEG010-QS - Amoladora 115mm, 710W, 12.000 rpm'
                  }
                  body={
                    'Perfecta en relación calidad precio. El resto cumple sobradamente para pequeños trabajos de bricolaje.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/BLACK-DECKER-BEG010-QS-Amoladora-12-000/dp/B07N17F4BL?_encoding=UTF8&refRID=TA4Z8TTZ9RF8AJWMX8CG&th=1&linkCode=ll1&tag=sarria93-21&linkId=1b30c2a015bdedde3d1f8b8c234858cd&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/amoladoras/81HD9lo7FrL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Calidad precio'}
                  heading={
                    'Bosch Professional GWS 7-115 E - Amoladora angular (720 W, 2800 – 11000 rpm, Ø Disco 115 mm, protección rearranque, en caja)'
                  }
                  body={
                    'Me gustó todo, no hay nada que objetar sobre esta herramienta que a mi me vino sin ningún problema y funcionando perfectamente. '
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Bosch-GWS-7-115-Professional-Miniamoladora/dp/B018YPAI9A?_encoding=UTF8&refRID=TA4Z8TTZ9RF8AJWMX8CG&th=1&linkCode=ll1&tag=sarria93-21&linkId=568aacd357007c7d2b68d25ef269b2ab&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/amoladoras/51lNAaPVRIL._AC_SL1464_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'Relacion calidad precio'}
                  heading={
                    'Einhell Amoladora angular TC-AG 125 (850W, 12.000 1/min de velocidad, disco de 125mm-ø, protector de disco, bloqueo de husillo, cabezal de engranaje plano de aluminio)'
                  }
                  body={
                    'Tiene buena potencia y no vibra mucho,para uso doméstico va perfecta'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Einhell-4430619-125-di%C3%A1metro-850/dp/B00TFZFVL4?_encoding=UTF8&refRID=TA4Z8TTZ9RF8AJWMX8CG&th=1&linkCode=ll1&tag=sarria93-21&linkId=78b7bf0ce3fe53441fa795c0a56ded98&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/amoladoras/81OvGYvmurL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'  Robusta'}
                  heading={
                    'Amoladora Angular Profesional,Tilswall 860W 12000 RPM 125mm,Amoladora Angular con 3 Discos de Corte y 2 Esmerilado,Cubierta Protectora para Esmerilado/Pulido/Corte'
                  }
                  body={
                    'Muy robusta y suave al corte. La pillè en oferta y de momento va de lujo. '
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Amoladora-Profesional-Tilswall-Esmerilado-Protectora/dp/B07VQ5MPZL?_encoding=UTF8&psc=1&refRID=TA4Z8TTZ9RF8AJWMX8CG&linkCode=ll1&tag=sarria93-21&linkId=4a2390399e542069107edd08b32035ac&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/amoladoras/81ByBSsvBOL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'  Recomiendo esta amoladora'}
                  heading={
                    'Amoladora Angular 18V, HYCHIKA Radial Angular Inalámbrico, 8500RPM con 4.0Ah Batería, 4*Discos para Lijar y 1*para Cortar, Mango Ajustable, Cargador Rápido, Amoladora Angular a Batería para Multiusar'
                  }
                  body={
                    'Como siempre, hychika marca de calidad y fiable a precio de mortales...'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/HYCHIKA-BETTER-TOOLS-FOR-LIFE/dp/B08DJ4NWHS?_encoding=UTF8&psc=1&refRID=TA4Z8TTZ9RF8AJWMX8CG&linkCode=ll1&tag=sarria93-21&linkId=1495d2d2148aaf57a6a957123c6ae2fe&language=es_ES&ref_=as_li_ss_tl"
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
  const category = 'Amoladoras';
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
