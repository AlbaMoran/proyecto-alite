import Carousel from 'react-bootstrap/Carousel';

function CarrouselBlog() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/productsImages%2FAccesorios%2Falite-Blends.png?alt=media&token=5614489f-ec7f-486a-91a1-e85bec9f8f3d"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ciclos de Vida</h3>
          <p>Colección de Blends</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/productsImages%2FAccesorios%2FbebidadeTe.jpg?alt=media&token=d3d0ea8b-0d30-4419-994f-833546d518dd"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Infusiones</h3>
          <p>con ingredientes y esencias naturales.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/alite-tea-store.appspot.com/o/productsImages%2FAccesorios%2FmesadeTe.jpg?alt=media&token=5953113e-4c4d-40f6-bed3-374c60875b54"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Momentos únicos</h3>
          <p>
           Acompañados por un exquisito blend.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselBlog;