'use client'
import React from "react";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast, ToastBody, Modal, ModalFooter,
    ModalHeader, ModalBody,Button } from "reactstrap"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';









export function MultiIMGCarousel(){




return(

<Carousel   responsive={responsive}  showDots={true} autoPlaySpeed={1000} transitionDuration={500}>

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

)



}












export function BotonModal(){
  
  var [contadorB,ActualizarBool]=useState(false);

function DetectarClick(){

      ActualizarBool(contadorB = !contadorB)  
}

if(contadorB){
return(

<div >

   
<div  style={{
            display: 'block', width: 700, padding: 30, backgroundColor: "blue"
        }}>

       
        <Modal isOpen={contadorB}  modalTransition={{timeout: 2000}} className="bg-blue-200">
          <ModalBody className="bg-blue-300">
              texto del cuerpo del modal        


<button  onClick={DetectarClick} className="bg-[#fff4b2]">
    Cerrar modal
</button>
          </ModalBody>

        </Modal>


     </div>





    </div>

)
}else{


  return(


<div>
<button  onClick={DetectarClick} className="bg-[#fff4b2]">
    Mostrar modal
</button>






</div>

    


  )

}


}















export function BotonTostada(){
  
  var [contadorB,ActualizarBool]=useState(false);

function DetectarClick(){

      ActualizarBool(contadorB = !contadorB)  
}





if(contadorB){
return(

<div >

   
<div  style={{
            display: 'block', width: 700, padding: 30, backgroundColor: "blue"
        }}>

       
        <Toast className="p-3 my-2 e bg-blue-600">
            <ToastBody className="bg-blue-100">
                   Notificación de tostada

            </ToastBody>

        </Toast>

<button  onClick={DetectarClick} className="bg-[#fff4b2]">
    Cerrar Tostada
</button>

     </div>





    </div>

)
}else{


  return(


<div>
<button  onClick={DetectarClick} className="bg-[#fff4b2]">
    Mostrar tostada 
</button>






</div>

    


  )

}


}




/*

export function Carruseldeimagenesl(){
  
  var [contadorB,ActualizarContador]=useState(0);

  var [contadorAnim,ActualizarAnim]=useState(false);

  var itemarray = [
    
      {   
        caption: 'Toa Vakama',
          src: 'https://tse3.mm.bing.net/th/id/OIP.e22h0sw5uanhGoZWDfjEFgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
          altText: 'El bionicle más genial'
          },

  
 {   
        caption: 'Toa Nuju',
          src: 'https://tse2.mm.bing.net/th/id/OIP.wUA_CHXmkwdc4cCJu7qs5gHaKp?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3',
          altText: 'El toa de los puzzles'
          },




            {   
        caption: 'Toa Onewa',
          src: 'https://i.ytimg.com/vi/-YA12_vjaC8/maxresdefault.jpg',
          altText: 'El toa de cambiar de toa'
          },
    
   


            {   
        caption: 'Toa Matau',
          src: 'https://tse2.mm.bing.net/th/id/OIP.n9YwQqG4iEevRSX0jzy3pAHaE8?pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3',
          altText: 'El toa de la parte más dificil del juego'
          },  


          {   
        caption: 'Toa Nokama ',
          src: 'https://alchetron.com/cdn/bionicle-maze-of-shadows-8f3a108f-b6a6-4203-9fcd-70cc1011435-resize-750.jpeg',
          altText: 'La traductora'
          },


               {   
        caption: 'Bionicle Whenua',
          src: 'https://amazingtoys.cstatic.io/media/4c/08/53/1678199987/lego-bionicle-toa-whenua-8603-1.jpg',
          altText: 'El toa que no tiene su propia pantalla '
          },
 
    
 
   

  ];


  var itemlength = itemarray.length-1

  var PrevButton = () =>{
    if(contadorAnim){return
    }else{
       const nextindex = contadorB === 0?
        itemlength : contadorB-1;
        ActualizarContador(nextindex)
    }
  }
  

  var NextButton = () =>{
    if(contadorAnim){return
    }else{
       const nextindex = contadorB === itemlength?
        itemlength : contadorB+1;
        ActualizarContador(nextindex)
    }
  }

  const CarouselItemData = () => {
  return (
    <>
      {itemarray.map((item) => (
        <CarouselItem
          key={item.src}
          onExited={() => ActualizarAnim(false)}
          onExiting={() => ActualizarAnim(true)}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      ))}
    </>
  );
};



return(

  <div    style={{display: 'block',width:320, padding:30}}>
      <h4> Carrusel de bionicle de reacstrap</h4>
          <Carousel
          previous={PrevButton} next={NextButton}
          activeIndex={contadorB}
          >
            <CarouselIndicators
            items={itemarray}
            activeIndex={contadorB}
            onClickHandler={(newIndex)=>{
              if (contadorAnim){return}else{ActualizarContador(newIndex)}
            }}
            
            />

             <CarouselItemData/>
             

              <CarouselControl directionText="Prev"
                direction="prev"  onClickHandler={PrevButton}/>
                <CarouselControl directionText="Next"
                direction="next"  onClickHandler={NextButton}/>



          </Carousel>

  </div>






)




}


*/







