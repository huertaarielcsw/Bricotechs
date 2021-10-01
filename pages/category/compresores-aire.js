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
    <Rating value={4.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.3} precision={0.5} readOnly></Rating>,
    <Rating value={4.2} precision={0.5} readOnly></Rating>
  ),
  createData('Precio', '130,50 €', '85,37 €', '69,00 €', '67,44 €', '70,00 €'),
  createData(
    'Dimensiones Artículo',
    '38 x 38 x 35 cm',
    '30 x 15 x 10 cm',
    '15 x 10 x 10 cm',
    '32.5 x 16 x 3.8 cm',
    '30.5 x 17.2 x 21 cm'
  ),
  createData(
    'Peso Artículo',
    '9.00 kg',
    '0.4 kg',
    '‎1.2 kg',
    '0.88 Libras',
    '998 Gramos'
  ),
  createData(
    'Voltaje',
    '230 Voltios',
    '4 Voltios',
    '12 Voltios',
    '‎230 Voltios',
    '230 Voltios'
  ),
  createData(
    'Máxima presión',
    '‎8 Bar',
    '10,3 Bar',
    '‎7 Bar.',
    '‎8 Bar',
    '11 Bar'
  ),
  createData(
    'Fuente de alimentación',
    '‎‎‎Neumática',
    '‎Funciona con batería',
    'Cable eléctrico',
    '-',
    'Cable eléctrico'
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

export default function CompresorAireScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout
      title="Los 5 compresores de aire más vendidos en Amazon España"
      description="Stanley DN200/8/6 - Compresor de aire
      Bosch compresor de aire a batería EasyPump (batería de 3,0 Ah, 3,6 voltios, función de parada automática, 150 psi, 10,3 bar, LED, recargable mediante cable USB-C, en caja)
      MICHELIN 9519 Compresor de aire portatil programable, 12 V
      MICHELIN - Inflador con medidor de presión de neumáticos - Presión máxima: 10 bar - Homologado, negro, norme
      Black+Decker ASI300-QS - Compresor de aire, 160 PSI, 11 bar, Fuente de alimentación: Cable eléctrico, Rojo/Negro"
    >
      <header>
        <div>
          <h1>Compresores de aire</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          El <strong>compresor de aire</strong> es una máquina diseñada para
          aumentar la presión del aire por medio de la compresión. Los usos de
          los <strong>compresores de aire</strong> son muy diversos, los más
          comunes son los usos que se llevan a cabo de manera intermitente como
          por ejemplo{' '}
          <strong>
            el inflado de neumáticos, el uso de herramientas neumáticas como por
            ejemplo una pistola neumática o bien en pistolas de pintura
          </strong>
          .
        </Typography>
      </div>

      <Divider light />
      <div>
        <h2>Los 5 compresores de aire más vendidos</h2>
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
                image={'/images/compresoresAire/71KbeNPd9rS._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Maquinón portable'}
                  heading={'Stanley DN200/8/6 - Compresor de aire'}
                  body={
                    'ya no me da pereza hacer bricolaje, aguanta muy bien y trabaja muy bien hasta 8 bares, no necesita mantenimiento y tiene potencia más que suficiente para mi nivel de bricolaje (clavar, grapar, etc).'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Stanley-DN200-8-6-Compresor/dp/B00IRA7GTS?_encoding=UTF8&refRID=TGE2Z6548S9XKC7K9XAG&th=1&linkCode=ll1&tag=sarria93-21&linkId=fe40de424a22e1e71308728382230a4d&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/compresoresAire/61TJILXpA5L._AC_SL1000_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={
                    'Su fabricante siempre ha sido una buena referencia.'
                  }
                  heading={
                    'Bosch compresor de aire a batería EasyPump (batería de 3,0 Ah, 3,6 voltios, función de parada automática, 150 psi, 10,3 bar, LED, recargable mediante cable USB-C, en caja)'
                  }
                  body={
                    'El conjunto cumple su función , para reajustar la presión de las ruedas del coche, incluida la de repuesto.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/compresor-EasyPump-autom%C3%A1tica-recargable-mediante/dp/B08HQHW4LS?_encoding=UTF8&psc=1&refRID=TGE2Z6548S9XKC7K9XAG&linkCode=ll1&tag=sarria93-21&linkId=1178b72e2d966a0940ac38c0b3862b42&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/compresoresAire/51f1fkUfI+L._AC_SL1009_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'Increíblemente preciso'}
                  heading={
                    'MICHELIN 9519 Compresor de aire portatil programable, 12 V'
                  }
                  body={
                    'El aparato es increíblemente preciso y fácil de usar. Es robusto y denota calidad por los cuatro costados.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Michelin-009519-Compresor-Digital-12-V/dp/B00KMZZJWC?_encoding=UTF8&refRID=TGE2Z6548S9XKC7K9XAG&th=1&linkCode=ll1&tag=sarria93-21&linkId=1b88abc98e20865505614aa19f77ac20&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/compresoresAire/712uua9pfmL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Homologado'}
                  heading={
                    'MICHELIN - Inflador con medidor de presión de neumáticos - Presión máxima: 10 bar - Homologado, negro, norme'
                  }
                  body={
                    'Buen producto de la empresa Michelin como todos los que produce.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Michelin-CA-6211860003-Inflador-presi%C3%B3n-homologado/dp/B00SRX9MQA?_encoding=UTF8&refRID=TGE2Z6548S9XKC7K9XAG&th=1&linkCode=ll1&tag=sarria93-21&linkId=0a99c2ee0fc1e30ae003e62395b907ec&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/compresoresAire/61Tc9ul2hvL._AC_SL1000_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'  Buen producto'}
                  heading={'Black+Decker ASI300-QS - Compresor de aire'}
                  body={
                    'Opino despues de 3 años de uso,debo decir que va como el primer dia ,mi uso es para hinchar colchonetas,balones y presion del coche,ya que siempre lo llevo en el coche,cumple ?? si!!'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Black-Decker-ASI300-QS-Compresor-aire/dp/B003A5ZBY2?_encoding=UTF8&refRID=TGE2Z6548S9XKC7K9XAG&th=1&linkCode=ll1&tag=sarria93-21&linkId=cb51261fea3257ccbcfeefecfe631b69&language=es_ES&ref_=as_li_ss_tl"
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
  const category = 'Compresores de aire';
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
