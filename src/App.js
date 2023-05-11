
import './App.css';
import DishItem from './Components/DishItem';
import Navbar from './Components/Navbar';
import {Container, Grid, Typography} from '@mui/material'
import WhoWeAre from './Components/WhoWeAre';
import StoreTimings from './Components/StoreTimings';
import ReservationForm from './Components/ReservationForm';
import Testimonials from './Components/Testimonials';
import FeedbackForm from './Components/FeedbackForm';
import Footer from './Components/Footer';
function App() {
  return (
    <>
     <Navbar />
     <br />
     <Typography color='green' align='center' variant='h4'>
      Best ordered dishes of all the time at ABC restaurant
     </Typography>
     <Container maxWidth='lg' sx={{marginTop: '2rem'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <DishItem
          imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10UE-Z0S2OElwdYfG1L5Z3jeT4hT-54CXcw&usqp=CAU'
          dishName='Pan Cakes'
          dishDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reiciendis dolorum, quia ullam eos maxime sapiente inventore! Veniam a facilis tenetur repellendus, sequi natus, impedit sapiente corrupti non molestiae id earum tempore beatae possimus.'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <DishItem
          imageUrl='https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/master/w_2700,h_1621,c_limit/double-rl-ranch-burger.jpg'
          dishName='Burger'
          dishDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reiciendis dolorum, quia ullam eos maxime sapiente inventore! Veniam a facilis tenetur repellendus, sequi natus, impedit sapiente corrupti non molestiae id earum tempore beatae possimus.'
          />

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <DishItem
          imageUrl='https://insanelygoodrecipes.com/wp-content/uploads/2022/09/Refreshing-Cold-Lemon-Iced-Tea.jpg'
          dishName='Ice Tea'
          dishDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia reiciendis dolorum, quia ullam eos maxime sapiente inventore! Veniam a facilis tenetur repellendus, sequi natus, impedit sapiente corrupti non molestiae id earum tempore beatae possimus.'
          />

        </Grid>
      </Grid>
     </Container>
     <br/><br/>
     <WhoWeAre />
     <br/><br/>
     <StoreTimings />
     <br/><br/>
     <ReservationForm />
     <br/><br/>
     <Testimonials />
      <FeedbackForm />
      <Footer />
     
    </>
  );
}

export default App;
