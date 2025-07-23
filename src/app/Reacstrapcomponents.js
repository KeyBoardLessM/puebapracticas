"Use Client";

import React from "react";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Toast,
  ToastBody,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
  Table,
} from "reactstrap";

import "react-multi-carousel/lib/styles.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import oldpage, { Titlemkr } from "./oldpage";

//import fs from 'fs';
//import { readFile, writeFile } from "fs/promises";

//import Registros from "./Registros.json";

export function MyForm() {
  /*
  const fs = require("fs");

  try {
    var characterdata = JSON.parse(Registers);
  } catch (error) {
    console.log("no jaló");
  }*/

  var Jdata = require("./data/Registros.json");
  var characterdata = JSON.parse(JSON.stringify(Jdata));

  return (
    <div className="w-[500px] py-3 px-3 block ">
      <Titlemkr
        showtext="mi primera tabla de reacstrap, un poco de tailwind y fontawesome"
        tsize="text-[40px]"
        color1="text-gray-600"
        fontT="font-bold"
      />

      <Table bordered={true}>
        <thead>
          <tr>
            <th>cabecera de mi tabla</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> ID </td>
            <td> Honorario </td>
            <td> Nombre </td>
            <td>
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#000000] "
              ></FontAwesomeIcon>{" "}
            </td>
            <td> desplegar </td>
          </tr>

          <tr>
            <td> {characterdata.Register1.IDentifier} </td>
            <td> {characterdata.Register1.honorario} </td>
            <td> {characterdata.Register1.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register1.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register2.IDentifier} </td>
            <td> {characterdata.Register2.honorario} </td>
            <td> {characterdata.Register2.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register2.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register3.IDentifier} </td>
            <td> {characterdata.Register3.honorario} </td>
            <td> {characterdata.Register3.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register3.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register4.IDentifier} </td>
            <td> {characterdata.Register4.honorario} </td>
            <td> {characterdata.Register4.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register4.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register5.IDentifier} </td>
            <td> {characterdata.Register5.honorario} </td>
            <td> {characterdata.Register5.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register5.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register6.IDentifier} </td>
            <td> {characterdata.Register6.honorario} </td>
            <td> {characterdata.Register6.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register6.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register7.IDentifier} </td>
            <td> {characterdata.Register7.honorario} </td>
            <td> {characterdata.Register7.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register7.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register8.IDentifier} </td>
            <td> {characterdata.Register8.honorario} </td>
            <td> {characterdata.Register8.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register8.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register9.IDentifier} </td>
            <td> {characterdata.Register9.honorario} </td>
            <td> {characterdata.Register9.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register9.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register10.IDentifier} </td>
            <td> {characterdata.Register10.honorario} </td>
            <td> {characterdata.Register10.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register10.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register11.IDentifier} </td>
            <td> {characterdata.Register11.honorario} </td>
            <td> {characterdata.Register11.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register11.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register12.IDentifier} </td>
            <td> {characterdata.Register12.honorario} </td>
            <td> {characterdata.Register12.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register12.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register13.IDentifier} </td>
            <td> {characterdata.Register13.honorario} </td>
            <td> {characterdata.Register13.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register13.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register14.IDentifier} </td>
            <td> {characterdata.Register14.honorario} </td>
            <td> {characterdata.Register14.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register14.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register15.IDentifier} </td>
            <td> {characterdata.Register15.honorario} </td>
            <td> {characterdata.Register15.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register15.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register16.IDentifier} </td>
            <td> {characterdata.Register16.honorario} </td>
            <td> {characterdata.Register16.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register16.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register17.IDentifier} </td>
            <td> {characterdata.Register17.honorario} </td>
            <td> {characterdata.Register17.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register17.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register18.IDentifier} </td>
            <td> {characterdata.Register18.honorario} </td>
            <td> {characterdata.Register18.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register18.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register19.IDentifier} </td>
            <td> {characterdata.Register19.honorario} </td>
            <td> {characterdata.Register19.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register19.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register20.IDentifier} </td>
            <td> {characterdata.Register20.honorario} </td>
            <td> {characterdata.Register20.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register20.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

/* carrusel, solo funciona si se pone en la página principal



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


// supuesta mente esto debería hacer flechas  propias, pero  no encuentra los icónos
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
  // aqui termina las flecas propias




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







*/

export function BotonModal({ imglink }) {
  var [contadorB, ActualizarBool] = useState(false);

  function DetectarClick() {
    ActualizarBool((contadorB = !contadorB));
  }

  if (contadorB) {
    return (
      <div>
        <div
          style={{
            display: "block",
            width: 700,
            padding: 30,
            backgroundColor: "blue",
          }}
        >
          <Modal
            isOpen={contadorB}
            modalTransition={{ timeout: 2000 }}
            className="bg-blue-200"
          >
            <ModalBody className="bg-blue-300">
              <img
                src={imglink}
                alt="no sale la imagen pero si funcina la imagen"
              ></img>
            </ModalBody>
            <ModalFooter className="bg-[#494bca]">
              <button onClick={DetectarClick} className="bg-[#b69191]">
                Cerrar modal
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Button onClick={DetectarClick} className="bg-[#4d1191] ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[#cd3131] "
          ></FontAwesomeIcon>
        </Button>{" "}
      </div>
    );
  }
}

export function BotonTostada() {
  var [contadorB, ActualizarBool] = useState(false);

  function DetectarClick() {
    ActualizarBool((contadorB = !contadorB));
  }

  if (contadorB) {
    return (
      <div>
        <div
          style={{
            display: "block",
            width: 700,
            padding: 30,
            backgroundColor: "blue",
          }}
        >
          <Toast className="p-3 my-2 e bg-blue-600">
            <ToastBody className="bg-blue-100">
              Notificación de tostada
            </ToastBody>
          </Toast>

          <button onClick={DetectarClick} className="bg-[#fff4b2]">
            Cerrar Tostada
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={DetectarClick} className="bg-[#fff4b2]">
          Mostrar tostada
        </button>
      </div>
    );
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
