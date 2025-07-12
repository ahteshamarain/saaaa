// import './App.css';
// import HeaderComponent from './header';
// import SliderComponent from './slider';
// import FooterComponent from './footer';
// import ProductComponent from './product';
// import Props from './props';
// import Datec from './date';
// import Football from './event';
// import Addhook from './hook';
// import EmployeeSalary from './salarystate';
// import Blog from './form';
// import Login from './login';
// import FetchDataExample  from './useeffect';
// import { CartProvider } from './CartContext'; 





// import img1 from './images/img1.webp';
// import img2 from './images/img2.jpg';
// import img3 from './images/img3.png';

// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {
//   const cardsData = [
//     {
//       img: img1,
//       title: 'Pushpa',
//       detail: 'Pushpa The Rise.',
//       link: 'https://www.imdb.com/title/tt16539454/',
//       timeRange: [9, 12], 
//     },
//     {
//       img: img2,
//       title: 'Luck',
//       detail: 'Live On Your Luck.',
//       link: 'https://example.com',
//       timeRange: [13, 16], 
//     },
//     {
//       img: img3,
//       title: 'Rings',
//       detail: 'Suspense thriller movie.',
//       link: 'https://www.pngegg.com/en/search?q=Thriller+film',
//       timeRange: [17, 20],
//     },
//   ];

//     const currentHour = new Date().getHours();
  
//     const filteredCards = cardsData.filter(
//       (card) => currentHour >= card.timeRange[0] && currentHour < card.timeRange[1]
//     );
  
//     return (
//       <CartProvider> {/* Yeh wrap karega sab components ko */}
//         <div>
//           <HeaderComponent />
//           <SliderComponent />
//           <ProductComponent />
  
//           <Container className="my-4 py-3">
//             <Row className="g-5">
//               {filteredCards.length > 0 ? (
//                 filteredCards.map((card, index) => (
//                   <Col key={index} xs={12} sm={6} md={4} lg={3}>
//                     <Props
//                       img={card.img}
//                       title={card.title}
//                       detail={card.detail}
//                       link={card.link}
//                     />
//                   </Col>
//                 ))
//               ) : (
//                 <Col>
//                   <h5 className="text-center">No movies to show at this time.</h5>
//                 </Col>
//               )}
//             </Row>
//           </Container>
  
//           <Datec />
//           <Football />
//           <Addhook />
//           <EmployeeSalary />
//           <FooterComponent />
//           <Blog />
//           <Login />
//           <FetchDataExample />
//         </div>
//       </CartProvider> // Yeh proper closing hai
//     );
//   }
  

// export default App;

















import { Route, Routes } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout';
import Home from './home';
import Contact from './contact';
import Moviedetail from './moviedetails';
import MovieList from './fetchmovie';


import Loginview from './viewlogin';
import Login from './login';








function App() {

    return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
         <Route path='/' element={<Home/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
         <Route path="/movie" element={<MovieList/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         

     


         <Route path="/loginview" element={<Loginview/>}></Route>

  <Route path="/movie/:id" element={<Moviedetail/>}></Route>

        </Route>
      </Routes>
    </div>
       
  
      
    );
  }
  

export default App;
