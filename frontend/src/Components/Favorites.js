import {Link} from 'react-router-dom'
import Footer from './FooterComponent'
import { Card, CardTitle, Breadcrumb, BreadcrumbItem, CarouselControl, CarouselIndicators, CarouselItem,CarouselCaption,Carousel} from 'reactstrap'
import './favorites.css';
import yelp from "./Shared/images/yelpLogo.png"
import loading from "./Shared/images/loading2.gif"
import axios from 'axios';
import { baseUrl } from './Shared/baseUrl';

const Favorites = (props) => {

  
  axios.defaults.headers.common['Authorization'] = `Bearer ${props.token}`;
  console.log(props.token);
  axios.get(baseUrl + "/favorites")
  .then((response) => {
   console.log(response);
  })

  
  
  
    return(
      <div id="app">
      <img id="gif" v-if="isLoading" src={loading} />
      <div id="header">
        <h1></h1>
          <div id="review">Powered by</div>  
          <a id="link" href="https://www.yelp.com/" target="_blank">
            <img id="yelpLogo" src= {yelp}/> 
          </a>
      </div> 
      <business-summary  v-for="r in theRestaurants"/>  
    </div>
    )
}
export default Favorites