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
    <Rating value={4.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.3} precision={0.5} readOnly></Rating>,
    <Rating value={4.1} precision={0.5} readOnly></Rating>,
    <Rating value={4.4} precision={0.5} readOnly></Rating>
  ),
  createData('Precio', '24,99 €', '54,99 €', '45,98 €', '61,99 €', '24,49 €'),
  createData(
    'Dimensiones Artículo	',
    '18.5 x 14.5 x 8 cm',
    '25.8 x 23 x 9 cm',
    '28 x 25 x 8  cm',
    '30 x 10 x 25 cm',
    '20.6 x 18.8 x 6.5 cm'
  ),
  createData(
    'Peso Artículo',
    '0.75 kg',
    '2.2 kg',
    '‎2.32 kg',
    '‎4.11 kg',
    '0.68 kg'
  ),
  createData(
    'Voltaje',
    '3.6 Voltios',
    '12 Voltios',
    '12 Voltios',
    '20 Voltios',
    '3.6 Voltios'
  ),
  createData('Velocidad', '180 RPM', '1500 RPM', '‎1350 RPM', '-', '-'),
  createData(
    'Fuente de alimentación',
    '‎‎Baterías',
    '‎Baterías',
    'Baterías',
    'Eléctrica_sin_cable',
    'Baterías'
  ),
  createData('Incluye baterías', 'Sí', 'Sí', 'Sí', '‎Sí', '‎Sí'),
  createData('Necesita baterías', 'No', 'Sí', 'No', '‎Sí', '‎No'),
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

export default function TaladroAtornilladorScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout
      title="Los 5 taladros atornilladores más vendidos en Amazon España"
      description="Destornillador Eléctrico 6N.m, HYCHIKA Atornillador Eléctrico Inalámbrico 3.6v Batería 2000mAh (Máximo Par 6 N.m) LED Luz, Mandril Magnético, Cargador con Cable 3.5mm, 20 Accesorios
      Taladro Atornillador 12V con 2 Baterías, HYCHIKA Destornillador Eléctrico, 30N.m Par Máx, 1.5 Ah Batería, 1 Hora de Carga Rápida, 6PCS Puntas y HSS Brocas, 5PCS Llaves de vaso, 4PCS Brocas de Madera
      Taladro Atornillador 2 Baterías, GOXAWEE 100Pcs Kit Taladro Bateria/Destornillador Eléctrico (2 Baterías de Litio 1500mAh, 30N.m Par Máx, 2 Velocidades, 10mm Portabrocas Automático)
      Taladro Atornillador 21V, TEENO 41Pcs Kit Destornillador Eléctrico (2 Baterías de Litio 1500mAh, 40N.m Par Máx, 2 Velocidades, 10mm Portabrocas Automatico)
      BLACK+DECKER BCF611CK-QW - Atornillador a batería 3.6V(1.5Ah) litio, 5.5Nm, de carga rápida"
    >
      <header>
        <div>
          <h1>Taladro Atornillador</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          Junto con los <strong>taladros percutores</strong> son, sin duda, los
          más utilizados. La principal función de estos tipos de{' '}
          <strong>taladros</strong> es la de{' '}
          <strong>atornillar y desatornillar</strong>. La agilidad del trabajo
          se ve positivamente influenciada por estos <strong>taladros</strong>,
          ya que permite
          <strong>desatornillar y atornillar</strong> cualquier tipo de tornillo
          y, y por tanto, trabajar mucho más rápidamente. Tanto el{' '}
          <strong>taladro percutor</strong> como el
          <strong>atornillador</strong> permiten obtener amplias opciones de
          taladro dependiendo de los tipos de brocas que utilices.
        </Typography>
      </div>

      <Divider light />
      <div>
        <h2>Los 5 taladros atornilladores más vendidos</h2>
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
                  '/images/taladrosAtornillador/81Kr8gxqcsL._AC_SL1500_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'Excelente producto de muy buena calidad'}
                  heading={
                    'Destornillador Eléctrico 6N.m, HYCHIKA Atornillador Eléctrico Inalámbrico 3.6v Batería 2000mAh (Máximo Par 6 N.m) LED Luz, Mandril Magnético, Cargador con Cable 3.5mm, 20 Accesorios'
                  }
                  body={
                    'Destaco sobre todo la potencia para atornillar/desatornillar que tiene el aparato, cargándose solo a través de USB (yo lo he hecho con un adaptador a corriente). También destacar el numero de diferentes cabezales que tiene, y la adaptación para poder atornillar en 35/40º o recto. Por ultimo también merece mención el tiempo que permanece funcionando con una sola carga de USB, y las dos bombillas LED que posee.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Destornillador-HYCHIKA-Atornillador-Inal%C3%A1mbrico-Accesorios/dp/B086SQK2RK?_encoding=UTF8&psc=1&refRID=JZ7WZC0127YKQZ9D6798&linkCode=ll1&tag=sarria93-21&linkId=8c28bf90553ea943cc355077905fe972&language=es_ES&ref_=as_li_ss_tl"
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
                  '/images/taladrosAtornillador/81NUfvNm4wL._AC_SL1500_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Útil para el día a día'}
                  heading={
                    'Taladro Atornillador 12V con 2 Baterías, HYCHIKA Destornillador Eléctrico, 30N.m Par Máx, 1.5 Ah Batería, 1 Hora de Carga Rápida, 6PCS Puntas y HSS Brocas, 5PCS Llaves de vaso, 4PCS Brocas de Madera'
                  }
                  body={
                    'Ha sido una de las mejores compras que he hecho. Los tornillos se ponen en un segundo y casi sin esfuerzo. La batería de momento me ha durado bastante, además voy utilizando las dos que vienen para que no se me degrade ninguna de ellas por no utlizarla. Además también he podido utilizarlo para hacer taladros en una mesa de madera. No lo recomendaría para hacer taladros en la pared ya que no creo que tenga la potencia suficiente. Para uso en madera y materiales más blandos está bien.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Atornillador-Bater%C3%ADas-HYCHIKA-Destornillador-El%C3%A9ctrico/dp/B082HTSRYV?_encoding=UTF8&psc=1&refRID=JZ7WZC0127YKQZ9D6798&linkCode=ll1&tag=sarria93-21&linkId=ecd675e84027b6f9b34c94aa5244b74f&language=es_ES&ref_=as_li_ss_tl"
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
                  '/images/taladrosAtornillador/71iF7VUX5aL._AC_SL1500_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Buen atornillador.'}
                  heading={
                    'Taladro Atornillador 2 Baterías, GOXAWEE 100Pcs Kit Taladro Bateria/Destornillador Eléctrico (2 Baterías de Litio 1500mAh, 30N.m Par Máx, 2 Velocidades, 10mm Portabrocas Automático)'
                  }
                  body={
                    'Atornillador muy completo, tienes todo lo que puedes a llegar necesitar en casa, ya que personalmente creo que es para eso, bricolaje amateur, yo lo he usado y comprado para el montaje de una habitación y me lo ha hecho fácil.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Atornillador-GOXAWEE-Destornillador-Velocidades-Portabrocas/dp/B08L7RBTW8?_encoding=UTF8&psc=1&refRID=JZ7WZC0127YKQZ9D6798&linkCode=ll1&tag=sarria93-21&linkId=94f50e1a89f979e14962352ea60a63a3&language=es_ES&ref_=as_li_ss_tl"
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
                  '/images/taladrosAtornillador/61cfqqH5u7S._AC_SL1000_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Buen kit completo'}
                  heading={
                    'Taladro Atornillador 21V, TEENO 41Pcs Kit Destornillador Eléctrico (2 Baterías de Litio 1500mAh, 40N.m Par Máx, 2 Velocidades, 10mm Portabrocas Automatico)'
                  }
                  body={
                    'No soy muy dado a estas cosas, pero lo compré a un buen precio y tenía todo lo que necesitaba y más. Funcionó perfectamente y va con dos baterías y pude trabajar tranquilamente con solo una. Al menos, para tenerlo en casa por si acaso hace falta, es perfecto. Puede que para alguien que le dé un uso fuerte no sea tan buena.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/TEENO-taladro-bater%C3%ADas-accesorios-profesionales/dp/B075FPNWM2?_encoding=UTF8&psc=1&refRID=JZ7WZC0127YKQZ9D6798&linkCode=ll1&tag=sarria93-21&linkId=725362d1617b0d1ae9cabd9c44db7e9e&language=es_ES&ref_=as_li_ss_tl"
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
                  '/images/taladrosAtornillador/71ITLPRvwyL._AC_SL1500_.jpg'
                }
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Un todo-terreno para el hogar'}
                  heading={
                    'BLACK+DECKER BCK24D2S-QW - Taladro Percutor 18V (21.000 ipm) y amoladora 125 mm 18V, con 2 baterías litio 2Ah y bolsa de transporte'
                  }
                  body={
                    'Puede parecer una tontería dudar si se necesita, pero es realmente muy util para conseguir atornillar o desatornillar tornillos sin apenas esfuerzo. Es "salud" para tu muñeca, y lo hace todo más fácil y rápido. Por poner una comparativa, es como si montas claras a mano o lo haces con un accesorio de tu batidora. Se puede hacer de ambas formas, pero hay diferencia en la comodidad.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/BLACK-DECKER-BCF611CK-QW-Atornillador-bater%C3%ADa/dp/B07TFHGZXF?_encoding=UTF8&psc=1&refRID=JZ7WZC0127YKQZ9D6798&linkCode=ll1&tag=sarria93-21&linkId=8f64e0c1b5ce5726ed532f2321b17a3c&language=es_ES&ref_=as_li_ss_tl"
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
  const category = 'Taladros Atornilladores';
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
