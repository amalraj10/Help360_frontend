import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'; // Assuming you have your custom styles imported
import image1 from '../images/Website-PNG-HD-Image.png'
import hospt from '../images/hospital (1).png'
import toursim from '../images/30826-8-travel-free-download.png'
import school from '../images/school.png'
import sigloc from '../images/location-pin-5739633-4817116.png'
import auto from '../images/Auto-Rickshaw-PNG-Photo.png'
import resturant from '../images/restaurant.png'
import anounancement from '../images/pngtree-important-announcement-banner-sign-design-png-image_6477045.png'
import panchyathmedia from '../images/Social-Media-Free-Download-PNG.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const Home = () => {
const navigate = useNavigate()
  const handleTour = ()=>{
navigate('./tourist')
  }
  const handleTaxi =()=>{
    navigate('./autotaxi')
  }
  const handlePmedia =()=>{
    navigate('./media')
  }
  const handlefood =()=>{
    navigate('./restaurant')
  }
  const handleschool =()=>{
    navigate('./schools')
  }
  const handlehospital =()=>{
    navigate('./hospital')
  }
  const handleannoucement =()=>{
    navigate('./annoucement')
  }

  return (
    <div>
      <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="" style={{backgroundColor:"#e9f5f6",marginBottom:"30%"}}>
      <Container>
        <Navbar.Brand style={{fontFamily:' "Marcellus SC", serif',fontSize:"26px"}}> <b>Help 360</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link ><b>Home</b></Nav.Link>
            <Nav.Link >
             <b>About</b> 
            </Nav.Link>
            <Nav.Link >
             <b>Service</b> 
            </Nav.Link>
            <Nav.Link>
             <b>Map</b> 
            </Nav.Link>
            <Nav.Link >
             <b>MyProfile</b> 
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div>
      <Container fluid>
        <Row className='mt-5'>
          <Col md={6} className="d-flex align-items-center">
            <div style={{marginLeft:"15%"}} className="heading-container">
              <h1 style={{marginTop:"40%"}} className="heading">Thillenkery</h1>
              <p  className="sub-heading ">Explore Thillenkery Panchayath's Digital Hub for all Your Local Needs.</p>
            </div>
          </Col>
          <Col style={{marginTop:"10%"}} md={6}>
            <img className="image"  style={{width:"65%",marginLeft:"8%"}}  src={image1} alt="Panchayath Image"></img>
          </Col>
        </Row>
      </Container>
      </div>
      <div>
        <Container>
<Row className='mt-5'>
  <Col sm={3} className='mt-5'>
<div>
<Card onClick={handlehospital}  className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-4' src={hospt} />
      <Card.Body>
        <Card.Title> <center><b>Hospitals</b></center></Card.Title>
       
      </Card.Body>
    </Card>

</div>
  </Col>
  <Col sm={3} className='mt-5'>

  <Card  onClick={handleTour}  className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-3' src={toursim} />
      <Card.Body>
        <Card.Title> <center><b>Tourist Places</b></center></Card.Title>
       
      </Card.Body>
    </Card>
  </Col>
  <Col sm={3} className='mt-5'>

  <Card onClick={handleschool} className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-4' src={school} />
      <Card.Body>
        <Card.Title> <center><b>Schools</b></center></Card.Title>
       
      </Card.Body>
    </Card>
  </Col>
  <Col md={3} className='mt-5'>

  <Card  className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-4' src={sigloc} />
      <Card.Body>
        <Card.Title> <center><b>Significant Locations</b></center></Card.Title>
       
      </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row className='mt-5' style={{marginBottom:"10%"}}>
  <Col sm={3} className='mt-5'>
<div>

<Card  onClick={handleTaxi} className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-4' src={auto} />
      <Card.Body>
        <Card.Title> <center><b>Auto Taxi</b></center></Card.Title>
       
      </Card.Body>
    </Card>

</div>
  </Col>
  <Col sm={3} className='mt-5'>

  <Card onClick={handlefood}  className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-4' src={resturant} />
      <Card.Body>
        <Card.Title> <center><b>Restaurants</b></center></Card.Title>
       
      </Card.Body>
    </Card>
  </Col>
  <Col sm={3} className='mt-5'>

  <Card onClick={handleannoucement} className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-3' src={anounancement} />
      <Card.Body>
        <Card.Title> <center><b>
Announcements</b></center></Card.Title>
       
      </Card.Body>
    </Card>
  </Col>
  <Col sm={3} className='mt-5'>

  <Card onClick={handlePmedia}  className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-2' src={panchyathmedia} />
      <Card.Body>
        <Card.Title> <center><b>Panchayath Media</b></center></Card.Title>
       
      </Card.Body>
    </Card>
  </Col>
  </Row>
  </Container>

      </div>
    </div>
  );
};

export default Home;
