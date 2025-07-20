'use client'
import React from "react";
import Reacstrapcomponents,{BotonModal,BotonTostada} from './Reacstrapcomponents.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";




export default function Home() {



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
/*
const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  // onMove means if dragging or swiping in progress.
  return (
    <button className="custom-arrow custom-arrow-right bg-green-500" onClick={() => onClick()}>
      {'>'}
    </button>
  )
}

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  return (
    <button className="custom-arrow custom-arrow-left bg-green-500" onClick={() => onClick()}>
      {'<'}
    </button>
  )
}

*/
  
    return( 
      
      <main>




<Carousel   responsive={responsive}  showDots={true} autoPlaySpeed={10} transitionDuration={5} >

<div>

<img     src={'https://tse3.mm.bing.net/th/id/OIP.e22h0sw5uanhGoZWDfjEFgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' }  ></img>

</div>
<div>

<img     src={'https://tse2.mm.bing.net/th/id/OIP.wUA_CHXmkwdc4cCJu7qs5gHaKp?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3' }  ></img>

</div>
<div>

<img     src={'https://i.ytimg.com/vi/-YA12_vjaC8/maxresdefault.jpg' }  ></img>

</div>
<div>

<img     src={'https://tse2.mm.bing.net/th/id/OIP.n9YwQqG4iEevRSX0jzy3pAHaE8?pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3' }  ></img>

</div>
<div>

<img     src={'https://alchetron.com/cdn/bionicle-maze-of-shadows-8f3a108f-b6a6-4203-9fcd-70cc1011435-resize-750.jpeg' }  ></img>

</div>
<div>

<img     src={'https://amazingtoys.cstatic.io/media/4c/08/53/1678199987/lego-bionicle-toa-whenua-8603-1.jpg' }  ></img>

</div>

</Carousel>











      <div >



 <BotonTostada/>
    <BotonModal/>



      </div>
      
   </main>

    )


   

  
}


//<Carruseldeimagenesl/>