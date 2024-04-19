import React from 'react'
import img2 from '../images/Food-Plate-Top-View-Snack-PNG.png'
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
import schoolss from '../images/School-PNG-HD.png'
import hospt from '../images/hospital (2).png'

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
function Hospitals() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    // let hospital_data = [ { "name": ""
    // }]
  return (
    <div><Container><Row>
        
        <Col style={{marginTop:"18%"}} md={6}>
<h1 className='rest' style={{fontFamily:' "Merriweather Sans", sans-serif',fontSize:"80px",color:"#306897"}}>Hospitals</h1>
<p>Medical Centers: Serving the Community's Well-being in Thillenkery.</p>

        </Col>
        
        <Col style={{marginTop:"15%"}} md={6} >
<img style={{width:"100%"}} src={hospt} alt="" />
        </Col>
    </Row>
    
    <div style={{marginBottom:"15%",marginTop:"8%"}}>
    <Row ><Col  sm={4}>
  

 
  <Card  className='mt-5' sx={{ maxWidth: 345 }}>
        
        <CardMedia
          component="img"
          height="194"
          image="https://www.nicdarkthemes.com/themes/restaurant/wp/demo/asian-cuisine/wp-content/uploads/sites/5/2019/02/para-02.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <center>  <p><b>Raj Cafe</b></p></center>
          <Typography variant="body2" color="text.secondary">
          <b>Chitravattam</b> Mountain is a popular tourist destination located in Thillenkery. Here's some information about this scenic spot :
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <i style={{color:"#cd0513"}} class="fa-solid fa-location-dot"></i>
          </IconButton>
          <IconButton style={{color:"black"}} aria-label="share">
          <i class="fa-solid fa-phone-volume"></i>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Col></Row>

    </div>
    
    
    </Container>
    
    
    </div>
  )
}

export default Hospitals