import './App.css';
import HeaderComponent from './header';
import SliderComponent from './slider';
import FooterComponent from './footer';
import ProductComponent from './product';

import Props from './props';

import img1 from './images/img1.webp';
import img2 from './images/img2.jpg';
import img3 from './images/img3.png';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const cardsData = [
    {
      img: img1,
      title: 'Pushpa',
      detail: 'Pushpa The Rise.',
      link: 'https://www.imdb.com/title/tt16539454/',
    },
    {
      img: img2,
      title: 'Luck',
      detail: 'Live On Your Luck.',
      link: 'https://example.com',
    },
    {
      img: img3,
      title: 'Rings',
      detail: 'Suspense thriller movie.',
      link: 'https://www.pngegg.com/en/search?q=Thriller+film',
    },
  ];

  return (
  <div>
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <ProductComponent></ProductComponent>



      <Container className="my-4 py-3">
        <Row className="g-5">
          {cardsData.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Props
                img={card.img}
                title={card.title}
                detail={card.detail}
                link={card.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    <FooterComponent></FooterComponent>
     
      </div>
  );
}

export default App;
