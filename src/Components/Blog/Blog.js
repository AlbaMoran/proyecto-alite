import React from 'react';
import '../styleSheets/blog.css';
import { Container,  Row } from 'react-bootstrap';
import CarrouselBlog from '../Carrousel/CarrouselBlog'
import '../styleSheets/blog.css'
import BlogItem from './BlogItem';


function Blog () {
  return (
    <>
      
      <h2 className='title'>Historia de los Blends de Alité</h2>
      <hr/>
      <div className='carrousel'>
        <CarrouselBlog/>
      </div>
<div className='carrousel-span'>

     <span >  Un lugar, aromas e imágenes efímeras, (nos traen/evocan) vívidos recuerdos de momentos que ayer llenaron nuestros sentidos y que hoy encienden nuestros deseos de revivirlos. Eso es la Vida, experiencias variopintas que alimentan nuestro Ser interior y lo empujan a trascender. Y a cada instante tenemos la chance de multiplicar esas experiencias y alimentar la bitácora de nuestro viaje terrenal. Recorremos un sendero de luces y sombras, algunas veces en soledad pero en muchas otras acompañados, en una sinergia constante y enriquecedora. Nos enlazan amores y desamores, alegrías y tristezas, logros y fracasos, las pasiones, los gustos compartidos… Hasta dónde seríamos capaces de llegar, si no fuera por ese devenir natural? ¡Cuánto más ricas son nuestras experiencias cuando nos vinculamos y conectamos  con el mundo que nos rodea! La vida es un regalo maravilloso, en un ciclo incesante, dentro de un Universo donde los límites, las fronteras, son sólo parte de un imaginario colectivo, franqueable con nuestro único deseo y voluntad de liberarnos y vencerlos. Recorramos juntos cada etapa de nuestro ciclo vital, acompañando la experiencia con infusiones especiales y virtuosas, que convidan al mayor disfrute en este recorrido.</span>
</div>
<div> <h2 className='title'>Historias y datos curiosos</h2> </div>
<hr/>

<Container className='' >
        <Row style={{ justifyContent:'center'}} className="container mx-auto ms-1">

 


<BlogItem 
name= "Sunrise - (Nacimiento)"
description='Llegar a la vida luego de un cálido y acogedor letargo dentro de mamá, marca el comienzo de nuestro desafiante transito mundano. Nos da la bienvenida
el tibio contacto de piel con quien nos llevó y nos esperó. Celebremos Ser!'
color='Amarillo'
song= {<p> Quiero que te duermas como un sol,<br/>
Que se acuesta en un campo de trigo.<br/>
Tengo aquí en mi pecho un corazón,<br/>
Igualito al hueco de tu ombligo..-</p>}
songName= {<a target="_blank" rel="noopener noreferrer" href="https://youtu.be/L8iZ_hGYHcA" > ( Cancion de cuna – Ciro y los Persas )</a>}
icon='https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/productsImages%2FAccesorios%2Fgirasol.png?alt=media&token=68c5b9a7-e5b2-4a51-9b7a-1ef9d4fd07c6'
moment='En el desayuno ya que es una versión del conocido Earl Grey.'
ingredients='Té Negro Darjeeling, Flores de Aciano (Bulgaria),Escencia natural de Bergamota.'
inspiration={<p>Se pensó en incluir un té para desayuno , con el agregado de flores
  que aportan un toque de color , que ayuda a disfrutar el día con atención plena, logrado
  con un buen té negro de origen. Desayuno también se asocia al momento de
  “nacimiento” del día. Se logra un licor dulce al paladar pero de intensidad media.</p>}
/>


<BlogItem 
name= "Carrousel (Niñez)"
description='Comenzamos a percibir nuestra individualidad, a definir nuestros gustos, a
desarrollar nuestra capacidad de socializar. Aprendemos jugando, forjando
nuestra personalidad y sensibilidad hacia el mundo que nos rodea. Diversión es la
clave!'
color='Salmón'
song= {<p> Estamos invitados a tomar el té <br/>
La tetera es de porcelana pero no se ve <br/>
Yo no se por qué…</p>}
songName= {<a target="_blank" rel="noopener noreferrer" href="https://youtu.be/ZNwVUCZMjrY">(Maria Helena Walsh-Canción de Tomar el té) </a>}
icon='https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/productsImages%2FAccesorios%2Fcarrousel.png?alt=media&token=fd22a886-472a-42d1-9ee5-88780dd80750'
moment='A la tarde. Apta para consumo por niños ya que es una infusión libre de
cafeína.'
ingredients='Rooibos combinado con frutas (frambuesa, mango, manzana) y un toque cítrico de naranjas.'
inspiration={<p>Pensado en incluir una infusión que pueda ser consumida por quienes
  prefieren evitar la teína en especial los niños. Las frutas otorgan color, y aportan
  nutrientes de las frutas en este caso liofilizadas (ya que conservan la forma, color y
  propiedades intactas de las frutas naturales). Suave y refrescante al paladar.</p>}
/>
<BlogItem 
name= "Swirls - (Adolescencia)"
description='¡Cuánto por aprender! Llegar a esta etapa desafiante, de muchos
cambios e interrogantes. Se aceleran los cambios, nos sentimos niños y
adultos a la vez, vivimos intensamente cada experiencia. Nos acercamos a
nuestros pares y de a ratos jugamos en las puertas del mundo adulto,
buscando alejarnos, pero a su vez esperando entrar en él. Es un trayecto
de a ratos controvertido pero también de disfrute y descubrimientos,
empezamos a definir cómo y quiénes seremos.'
color='Naranja'
song= {<p>Y no pierdas tiempo, escucha el viento <br/>
  Canta por lo que vendrá. <br/>
  No es tan difícil que aprendas a volar <br/>
 </p>}
songName= {<a target="_blank" rel="noopener noreferrer" href="https://youtu.be/BKqytXUEH1I"> (Aprender a volar, Patricia Sosa)</a> }
icon='https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/productsImages%2FAccesorios%2Fauris.png?alt=media&token=6f1041dd-81bf-429a-aa4f-e1aface90ffd'
moment='En la tarde, caliente o frio'
ingredients='Té Rojo,Mango y frutillas,Láminas de coco,Flores de hibisco (O ROSA DE JAMAICA) y aciano. Un toque de lemon grass y un leve picor y frescura aportados por el
jengibre.'
inspiration={<p>Se pretende lograr un blend que refleje la fuerza impulsiva de esta
  etapa, aportando sabores, picor y color. Logra un licor ambar rosado, por la mixtura entre
  el té rojo propiamente dicho y las frutillas y rosa de Jamaica y apagado apenas por el
  mango y jengibre. Al paladar se logra una textura liviana, agradable. El jengibre se
  percibe fresco al inicio y apenas picante al final.</p>}
/>

<BlogItem 
name= "Fullness - (Juventud)"
description='Nos paseamos entre los libros, las noches de poco sueño, las primeras
experiencias laborales, descubrimos la intensidad del amor. Deseamos que el día
tenga 25 horas para hacer y vivir todo. Dejamos nuestra impronta en cada
experiencia vivida intensamente y nos preparamos de cara a ese futuro que
soñamos cristalizar algún día no muy lejano.'
color='Verde'
song= {<p>A veces el miedo te hace dudar<br/>
  A pocos segundos antes de saltar<br/>
  No lo dudes, solo abre tus alas<br/>
  Siente el vuelo.. </p>}
songName= '(La vida es un Valz –Diego Torres)'
icon='https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/productsImages%2FAccesorios%2FfullnessPeople.png?alt=media&token=c68a6ab3-a3b1-466c-b45f-9ebae97ce327'
moment='En la mañana aporta energía, luego de la actividad
física revitaliza.'
ingredients='Té Verde sencha,Mix especiado (Hinojo, Cardamomo, Anis, Pimienta Roja, Jengibre),Hojas de menta.'
inspiration={<p>Se espera aportar una bebida que sea el complemento de la rutina
  diaria, para energizar las mañanas y reponer energías en la tarde. El té verde es bien
  conocido por su aporte desintoxicante, tiene un sabor especial a hierbas frescas, que se
  complementa en forma armoniosa con las especias, mientras que la menta aporta un
  toque refrescante.</p>}
/>
<BlogItem 
name= "Roots - (Adultez)"
description='Consolidado nuestro camino, Llegan nuevos desafíos: continuidad en la
profesión, a veces formar una familia, estrechar vínculos con la esperanza que
sean para el resto de nuestro camino, pero sin dejar de disfrutar de momentos
para nosotros mismos y compartidos con amigos.'
color='Azul Celeste'
song= {<p>A mis cuarenta y diez , cuarenta y nueve dicen que aparento
  Más antes que después he de enfrentarme al delicado momento
  De empezar a pensar En recogerme, de sentar la cabeza…
 </p>}
songName= '( A mis cuarenta y Diez- Joaquin Sabina )'
icon='https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/productsImages%2FAccesorios%2FRootsImg.png?alt=media&token=d338feac-a98a-4af4-ba9e-a56bf32b88b6'
moment={<p>En la merienda, o luego de la cena.
  ¿Y si hacemos un coctel? Macerar una medida de este blend en gin,
  y preparar el trago con abundante hielo y un toque de jugo de limón,
  completando con tónica.</p>}
ingredients=' Té Oolong,Flor de lavanda, suave toque de pétalos de rosa.'
inspiration={<p>En este blend se trabajó tratando de transmitir un
  sentimiento de calma y seguridad que presupone se alcanza en esta
  etapa. La lavanda tiene cierto efecto relajante, además de aportar un
  perfume muy agradable que complementa al del té base.</p>}
/>
<BlogItem 
name= "Wisdom - (Madurez)"
description='Llega el momento del balance, con sigilo y en silencio escudriñamos en los
detalles de nuestras vivencias, y en un confortable sillón recordamos con
añoranza momentos de alegría y realizaciones. Aunque también vemos que las
tristezas, las derrotas y los desatinos hicieron que hoy estemos aquí
saboreando la recompensa. De una u otra forma hemos logrado plasmar
nuestra huella, que vive por siempre en el corazón de nuestros más amados
afectos. Y es la forma en que prolongamos la experiencia, siendo expectadores
de un nuevos comienzos del ciclo inagotable de la vida..'
color='Bronce'
song= {<p>Ando despacito porque tuve prisa <br/>
  Y llevo esta sonrisa porque ya lloré de más.<br/>
  Hoy me siento más fuerte más feliz, ¿Quién sabe?<br/>
  Y llevo la certeza de que muy poco sé, o nada sé.
 
 </p>}
songName= ' (Tocando al Frente-Carlos Mancinelli)'
icon='https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/productsImages%2FAccesorios%2FwisdomImg.png?alt=media&token=1323d29a-bc2d-4060-862d-a47e8de5dac1'
moment={<p>Al final de la jornada, para acompañar una lectura, o un momento de relax y
  reflexión.</p>}
ingredients=' Té rojo,Cascarillas de algarroba, Arándanos, Rosa mosqueta, Toque de pimienta roja, Espíritu de cognac
Momento del día sugerido:'
inspiration={<p>Se busca la combinación de sabores intensos y se complementa con
  aporte de dulzor y acidez en balance justo. La algarroba da un toque de sabor
  chocolatado, y corona la mezcla el toque de cognac para dar sensación de mayor cuerpo.</p>}
/>
</Row>

</Container>




    </>
  );
}

export default Blog;