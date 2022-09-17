//import Alite540x540 from "../../assets/images/Logos/AliteTr540x540.png";
import carrousel from "../../assets/images/Tea/Variedades/carrousel.png";
import sunrise from "../../assets/images/Tea/Variedades/sunrise.png";
import fullness from "../../assets/images/Tea/Variedades/fullness.png";
import roots from "../../assets/images/Tea/Variedades/roots.png";
import wisdom from "../../assets/images/Tea/Variedades/wisdom.png";
import swirls from "../../assets/images/Tea/Variedades/swirls.png";
import collection from "../../assets/images/Tea/Colecciones/coleccion.png";
import stack from "../../assets/images/Tea/Boxes/stack1.png";

const products = [ 
    {
    'id': 1,
    'name' : 'SUNRISE',
    'price': '950,00', 
    'detail':'Té Negro Darjeeling, Flores de Aciano (Bulgaria), Escencia natural de Bergamota.',
    'moment': 'En el desayuno ya que es una versión del conocido Earl Grey',
    'image': sunrise,
    'image2':collection,
    'image3': stack,
    'otherImages':[collection, stack],
    'temperature': 'Temperatura ideal del agua 75%',
    'Presentation':'caja por 50grs. con filtro individual para taza',
    'category': 'Variedades',
    'stock': 15
  },

  {
    'id': 2,
    'name' : 'FULLNESS',
    'price': '1.200,00', 
    'detail':'Té Verde sencha , en un mix especiado con Hinojo, cardamomo, anís, pimienta roja, jengibre y hojas de menta.',
    'moment': 'En la mañana aporta energía, luego de la actividad física revitaliza',
    'image': fullness,
    'image2':collection,
    'image3': stack,
    'otherImages': [ collection, stack],
    'temperature': 'Temperatura ideal del agua 80%',
    'Presentation':'caja por 50grs. con filtro individual para taza',
    'category': 'Variedades',
    'stock': 10
  },
  {
    'id': 5,
    'name' : 'WISDOM',
    'price': '1.000,00', 
    'detail':' Té rojo, cascarillas de algarroba, arándanos,rosa mosqueta, un toque de pimienta roja, espíritu de cognac',
    'moment': ' Al final de la jornada, para acompañar una lectura, o un momento de relax y reflexión.',
    'image': wisdom,
    'image2':collection,
    'image3': stack,
    'otherImages': [ collection, stack],
    'temperature': 'Temperatura ideal del agua 87%',
    'Presentation':'caja por 50grs. con filtro individual para taza',
    'category': 'Variedades',
    'stock': 5
    },
    
    {
    'id': 4,
    'name' : 'ROOTS',
    'price': '1.150,00', 
    'detail':' Té Oolong, flor de lavanda y un suave toque de pétalos de rosa',
    'moment': ' En la merienda, o luego de la cena.',
    'image': roots,
    'image2':collection,
    'image3': stack,
    'otherImages': [ collection, stack],
    'temperature': 'Temperatura ideal del agua 80%',
    'Presentation':'caja por 50grs. con filtro individual para taza',
    'category': 'Variedades',
    'stock': 5
    },
  
    {
      'id': 3,
      'name' : 'SWIRLS' ,
      'price': '1.600,00', 
      'detail':'Té Rojo, Mango y frutillas,Láminas de coco, Flores de hibisco (O ROSA DE JAMAICA) y aciano. Un toque de lemon grass y un leve picor y frescura aportados por el jengibre',
      'moment': 'En la tarde, caliente o frio,',
      'image': swirls,
      'image2':collection,
    'image3': stack,
      'otherImages': [ collection, stack],
      'temperature': 'Temperatura ideal del agua 85%',
      'Presentation':'caja por 50grs. con filtro individual para taza',
      'category': 'Variedades',
      'stock': 8
  
      },
    {
      'id': 6,
      'name' : 'CARROUSEL',
      'price': '1.500,00', 
      'detail':'Té de Rooibos combinado con frutas (frambuesa, mango, manzana) y un  toque cítrico de naranjas.',
      'moment': ' A la tarde. Apta para consumo por niños ya que es una infusión libre de cafeína',
      'image': carrousel,
      'image2':collection,
    'image3': stack,
      'otherImages': [ collection, stack],
      'temperature': 'Temperatura ideal del agua 100%',
      'Presentation':'caja por 50grs. con filtro individual para taza',
      'category': 'Variedades',
      'stock': 6
      },
  ]
  export default products