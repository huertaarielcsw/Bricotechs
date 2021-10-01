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
    <Rating value={4.6} precision={0.5} readOnly></Rating>,
    <Rating value={3.4} precision={0.5} readOnly></Rating>,
    <Rating value={4.6} precision={0.5} readOnly></Rating>,
    <Rating value={4.2} precision={0.5} readOnly></Rating>
  ),
  createData('Precio', '29.50 €', '39.55 €', '69.99 €', '150.51 €', '149.99 €'),
  createData(
    'Dimensiones Artículo	',
    '28 x 9 x 27 cm',
    '27.2 x 6.8 x 22.1 cm',
    '35 x 23 x 7 cm',
    '24 x 8 x 24 cm',
    '37.5 x 24.5 x 21.5 cm'
  ),
  createData('Peso Artículo', '1.96 kg', '1.5 kg', '6.3 kg', '1.7 kg', '2 kg'),
  createData(
    'Tensión',
    '230 Voltios',
    '230 Voltios',
    '240 Voltios, 220 Voltios',
    '18 Voltios',
    '18 Voltios'
  ),
  createData(
    'Potencia',
    '500 Vatios',
    '550 Vatios',
    '1050 Vatios',
    '18 Vatios',
    '-'
  ),
  createData(
    'Fuente de alimentación',
    '‎Con Filo Elettrico',
    '‎Eléctrica con cable',
    '‎Eléctrica con cable, Manual',
    'Baterías',
    'Baterías'
  ),
  createData('Incluye baterías', 'No', 'No', '-', '‎Sí', '‎Sí'),
  createData('Necesita baterías', 'No', 'No', '-', '‎Sí', '‎Sí'),
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

export default function TaladroPercutorScreen(props) {
  const { products } = props;
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  return (
    <Layout
      title="Los 5 taladros percutores más vendidos en Amazon España"
      description="BLACK+DECKER BEH200-QS Taladro percutor con cable 500W, 230V, incluye empuñadura lateral, 500 W
      Bosch EasyImpact 550 - Taladro percutor (550 W, empuñadura adicional, tope de profundidad, maletín)
      Martillo Percutor, Martillo Perforador, 5J Energía de Impacto, SDS Plus Mandril, 4 Funciones en 1 con Embrague de Seguridad, Utilizado para Concreto, Metal y Piedra - TRH02A
      Makita HP457DWE - Taladro Percutor A Bateria 18V Litio-Ion 1.5 Ah [Clase de eficiencia energética A]
      BLACK+DECKER BCK24D2S-QW - Taladro Percutor 18V (21.000 ipm) y amoladora 125 mm 18V, con 2 baterías litio 2Ah y bolsa de transporte"
    >
      <header>
        <div>
          <h1>Taladro Percutor</h1>
        </div>
      </header>
      <div>
        <Typography variant="body1" gutterBottom>
          La función principal de este tipo de <strong>taladro</strong> es la de
          percusión. Esto consiste que en su ejecución nos va a ofrecer dos
          movimientos: el del giro del <strong>taladro</strong> y un pequeño
          martilleo que nos permitirá realizar el trabajo de forma más cómoda.
          Este tipo de <strong>taladros</strong> son los que se utilizan cuando
          queremos taladrar superficies duras y bastas como por ejemplo el
          hormigón o una pared. Si nuestro objetivo es taladrar una superficie
          más blanda, la función de percusión no es necesaria. Los{' '}
          <strong>taladros percutores</strong> son muy recomendables porque, la
          mayoría, incluyen un botón que te da la posibilidad de desactivar la
          función percusión siempre que no la necesites.
        </Typography>
      </div>

      <Divider light />
      <div>
        <h2>Los 5 taladros percutores más vendidos</h2>
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
                image={'/images/taladrosPercutor/81LuqiWs53L._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' mas que suficiente, genial'}
                  heading={
                    'BLACK+DECKER BEH200-QS Taladro percutor con cable 500W, 230V, incluye empuñadura lateral, 500 W'
                  }
                  body={
                    'Opinión después de muchos meses de uso, no lo cambio por nada, si le doy 4 estrellas es porque las brocas que incluye son bastante normales y como toques una viga, no la pasas ni queriendo, hay que comprar brocas especiales para eso, por lo demás, es potente, no pesa, muy manejable, se calienta poco y viene con maletín para guardar ¿Qué mas puedo pedir?'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/BEH200-QS-Taladro-percutor-incluye-empu%C3%B1adura/dp/B07MJHBCKX?_encoding=UTF8&refRID=D4KSTNHTV7FYJY985F44&th=1&linkCode=ll1&tag=sarria93-21&linkId=5ab6ae49febad0a88fd6613ea80c6340&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/taladrosPercutor/61uJKO20ZkL._AC_SL1024_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={'PRODUCTO EXCELENTE RECOMENDABLE'}
                  heading={
                    'Bosch EasyImpact 550 - Taladro percutor (550 W, empuñadura adicional, tope de profundidad, maletín)'
                  }
                  body={
                    'Tras el uso de diferentes marcas y modelo, calidad precio lo mejor del mercado para usuarios no profesionales. De momento la he probado en todo tipo de materiales y funciona a la perfección. El sistema de apriete manual podría mejorar un poco , ya que alguna vez he tenido que volver a realizar el ajuste y apriete.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Bosch-EasyImpact-empu%C3%B1adura-adicional-profundidad/dp/B06XR17QSM?_encoding=UTF8&refRID=D4KSTNHTV7FYJY985F44&th=1&linkCode=ll1&tag=sarria93-21&linkId=a2990c4a0c49adf5a1a6d0bff4380ca5&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/taladrosPercutor/71mLxSjsn9S._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Relación calidad precio excepcional'}
                  heading={
                    'Martillo Percutor, Martillo Perforador, 5J Energía de Impacto, SDS Plus Mandril, 4 Funciones en 1 con Embrague de Seguridad, Utilizado para Concreto, Metal y Piedra - TRH02A'
                  }
                  body={
                    'Viene con su caja de plástico duro, muy bien protegido. A falta de probarlo , lo he conectado a la red y suena a potencia y bastante bien. Eso sí no esperes una herramienta ligera, pesa bastante , pero se ve robusta y de muy buena calidad.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Martillo-Perforador-Funciones-Seguridad-Utilizado/dp/B097YFX623?_encoding=UTF8&psc=1&refRID=D4KSTNHTV7FYJY985F44&linkCode=ll1&tag=sarria93-21&linkId=879ab7b0c5fb85a7472ea23b81736fd7&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/taladrosPercutor/61-h3jRAYEL._AC_SL1024_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Calidad maravillosa'}
                  heading={
                    'Makita HP457DWE - Taladro Percutor A Bateria 18V Litio-Ion 1.5 Ah [Clase de eficiencia energética A]'
                  }
                  body={
                    'Le regalé este taladro a mi padre, y ha quedado muy contento, el precio vale la pena. Tiene la fuerza necesaria. cuando sueltas el gatillo salen chispas, según me contesto el fabricante es totalmente normal, es debido a que las escobillas son muy nuevas. Pero funciona genial el peso no es demasiado y viene con dos baterias.'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/Makita-HP457DWE-Taladro-Percutor-Litio-Ion/dp/B00GDFU56A?_encoding=UTF8&psc=1&refRID=D4KSTNHTV7FYJY985F44&linkCode=ll1&tag=sarria93-21&linkId=c98bbd4522dbaa44a604ee793b1bdf69&language=es_ES&ref_=as_li_ss_tl"
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
                image={'/images/taladrosPercutor/717-873XtCL._AC_SL1500_.jpg'}
              />
              <CardContent>
                <TextInfoContent
                  classes={contentStyles}
                  overline={' Bueno para uso doméstico y con percutor'}
                  heading={
                    'BLACK+DECKER BCK24D2S-QW - Taladro Percutor 18V (21.000 ipm) y amoladora 125 mm 18V, con 2 baterías litio 2Ah y bolsa de transporte'
                  }
                  body={
                    'Muy bueno para uso doméstico. Perfecto en función taladro y atornillador. Importante que sea este modelo concreto con percutor para poder usar en piedra o hormigon por ejemplo. Batería compatible con la serie de 18 v. de la marca, por lo que si tienes más herramientas las puedes intercambiar. Viene sin accesirios como broncas, etc, excepto punta estándar destornillador. El maletín tiene huecos libres para llevar accesorios que compres o incorporar al taladro, lo que resulta cómodo'
                  }
                />
                <Button
                  className={buttonStyles}
                  href="https://www.amazon.es/BLACK-DECKER-BCK24D2S-QW-amoladora-transporte/dp/B07NFLGYHM?_encoding=UTF8&refRID=D4KSTNHTV7FYJY985F44&th=1&linkCode=ll1&tag=sarria93-21&linkId=7fbf85ae0f5347e54a3bdeee3bef8818&language=es_ES&ref_=as_li_ss_tl"
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
  const category = 'Taladro Percutor';
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
