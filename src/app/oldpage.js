'use client'
import React from "react";
import { useState } from 'react';

/*
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast, ToastBody } from "reactstrap"



 <BotonTostada/>


 */


 function Titlemkr({showtext,tsize,color1,fontT}){


   //const customclass = "\"text-"+tsize+"x1 text-"+color1+"-500\""
 //const customclass = `font-${fontT} text-[${tsize}px] text-[${color1}]`;
  //const customclass ={Text:color1,Text:tsize,Font:fontT };


//console.log(customclass)
    
  
    return(     
       
      //< h1 className="text-5xl text-lime-400 ">{showtext} </h1>

      // <h1 > {showtext}</h1>

<div className="Titulo">
  <div className={fontT}>
    <div className={tsize}>
      <div className={color1}>
         {showtext}
      </div>
    </div>
  </div>
</div>
    
         
 
    
    );

  }




 function Imagesmkr({imglink,hlength,Wlength}){
return(

<div className="imageplaces">
  <div className={hlength}>
      <div className={Wlength}>
              <img
                src={imglink}
                alt="imagen demo"
             
              />
      </div>
  </div>
</div>
)

}
  

function Paragraphmkr({ptext,colorp,sizep,fontp}){
return(

<div className="pragrafs">
<div className={colorp}>
  <div className={sizep}>
    <div className={fontp}>
      <p>
          {ptext}
      </p>
    </div>


  </div>


</div>
</div>  


)

}


export function BotonContador(){

var [contador,Actualizarcontador]=useState(0);

function DetectarClick(){

      Actualizarcontador(contador=contador+1)  
}

  return(
<button  onClick={DetectarClick} className="bg-[#fff4b2]">
      Has hecho funcionar el boton {contador} veces
</button>


  )
}


export function BotonImágen(){

var [contadorbool,Actualizarcontador]=useState(false);

function DetectarClick(){

      Actualizarcontador(contadorbool = !contadorbool)  
}

if(contadorbool==true){
 return(

<div >

<button  onClick={DetectarClick} className="bg-[#dccd71]">
      Cambiar mascara
</button>

  <Imagesmkr imglink="https://tse2.mm.bing.net/th/id/OIP.7WSlC4MOx7NduqGdM02HbAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" hlength="h-100" Wlength="w-50"></Imagesmkr>

</div>

  )

}else{

  return(

<div >


<button  onClick={DetectarClick} className="bg-[#7b6b09]">
      Cambiar mascara
</button>

<Imagesmkr imglink="https://tse3.mm.bing.net/th/id/OIP.kGxLj1iwzcdRFES08HChMgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3" hlength="h-50" Wlength="w-50"></Imagesmkr>

</div>
    


  )

}

}

export function Botonfondo(){

var [contadorB,ActualizarcontadorB]=useState(false);

function DetectarClick(){

      ActualizarcontadorB(contadorB = !contadorB)  
}

if(contadorB==true){
 return(

<body className=" h-full flex-0 bg-[#ffdda3]">

<button  onClick={DetectarClick} className="bg-[#dccd71]">
      Cambiar fondo
</button>

</body>

  )

}else{

  return(

<body className=" h-full bg-[#7e1d00] flex-1">

<button  onClick={DetectarClick} className="bg-[#7b6b09]">
      Cambiar fondo
</button>


</body>
  

  )

}

}






export default function Home() {
  
    return( 
      
      <main>



      <div >

   <Titlemkr showtext= " ¡ Los BIONICLES son geniales !" tsize="text-[70px]" color1="text-[#7e561a]" fontT="font-bold" />

<Paragraphmkr ptext="Mi bionicle favorito es Vakama, este no es vakama, pero se ve genial y me funciono la imagen" colorp="color-[#b259b8]" sizep="text-[20px]" fontp="font-sans"    />

<Imagesmkr imglink= "https://tse1.mm.bing.net/th/id/OIP.KcFmFpk8jxRWVyKWgOkNPQHaHi?rs=1&pid=ImgDetMain&o=7&rm=3 " hlength="h-50" Wlength="w-50"/>
     
     <Botonfondo/>   
     <BotonContador/>
     <BotonImágen  />
    



      </div>
      
   </main>

    )


   

  
}
