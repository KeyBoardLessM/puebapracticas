import React from "react";

 function Titlemkr({showtext,tsize,color1,fontT}){


   //const customclass = "\"text-"+tsize+"x1 text-"+color1+"-500\""
//  const customclass = `font-${fontT} text-[${tsize}px] text-[${color1}]`;
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

export default function Home() {
  
    return( 
      
      <main>



      <div className="min-h-screen bg-[#7e1d00]">
   <Titlemkr showtext= " ¡ Los BIONICLES son geniales !" tsize="text-[70px]" color1="text-[#7e561a]" fontT="font-bold" />

<Paragraphmkr ptext="Mi bionicle favorito es Vakama, este no es vakama, pero se ve genial y mefuncionó la imagen" colorp="color-[#b259b8]" sizep="text-[20px]" fontp="font-sans"    />

<Imagesmkr imglink= "https://tse1.mm.bing.net/th/id/OIP.KcFmFpk8jxRWVyKWgOkNPQHaHi?rs=1&pid=ImgDetMain&o=7&rm=3 " hlength="h-50" Wlength="w-50"/>
      </div>
      
   </main>

    )


   

  
}
