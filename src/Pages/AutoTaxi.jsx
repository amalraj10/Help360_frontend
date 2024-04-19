import React from 'react'
import { Table } from 'react-bootstrap';
import taxi from '../images/wp1898183-taxi-wallpapers.jpg'

import { Col, Container, Row } from 'react-bootstrap'
import './styles.css'; // Assuming you have your custom styles imported
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import taxii from '../images/Cab-Taxi-Logo-PNG-Picture.png'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
function AutoTaxi() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // let hospital_data = [ { "name": ""
  // }]
  return (
    <div>

<div><Container><Row>
        
        <Col style={{marginTop:"18%"}} md={6}>
<h1 className='rest' style={{fontFamily:' "Merriweather Sans", sans-serif',fontSize:"80px",color:"#f6e228"}}>Auto <span style={{color:"black"}}>Taxi</span></h1>
<p className='ms-3'>Explore Our Auto Taxi Services In Thillenkery.</p>

        </Col>
        
        <Col style={{marginTop:"15%"}} md={6} >
<img style={{width:"100%"}} src={taxii} alt="" />
        </Col>
    </Row>    </Container>

    
      <div style={{ textAlign: 'center' }} className='mb-5 mt-5'>
      <Table data-aos="flip-up"
    data-aos-easing="linear" data-aos-duration="800" striped bordered hover style={{ maxWidth: '70%', fontSize: '0.8em', margin: 'auto' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: "#f3de13" }}>Name</th>
            <th style={{ backgroundColor: "#f3de13" }}>Taxi Name</th>
            <th style={{ backgroundColor: "#f3de13" }}>Mobile No.</th>
        
          </tr>
        </thead>
        
         <tbody>
         
              <tr>
                <td></td>
                <td></td>
                <td></td>
           
              </tr></tbody>
             
           
        
        
      </Table>
    </div>
    </div>

    </div>
  )
}

export default AutoTaxi