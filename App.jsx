import React,{ useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showContent, setShowContent] = useState(false);
    useGSAP(() => {
       const tl = gsap.timeline();

       tl.to(".vi-mask-group",{
        rotate: 10,
        duration:2,
        ease: "Power4.easeInOut",
        transformOrigin: "50% 50%",
      }).to(".vi-mask-group", {
        scale:10,
        duration:2,
        delay:-1.8,
        ease: "expo.inOut",
        transformOrigin: "50%,50%",
        opacity: 0,
        onUpdate: function(){
          if(this.progress() >= .9){
            document.querySelector("svg").remove();
            setShowContent(true);
            this.kill();
          }
        }

      })
    });
    useGSAP(()=>{

      if(!showContent) return;
      gsap.to(".main",{
       scale: 1,
       rotate: 0,
       duration: "2",
       ease:"Expo.easeInOut",
       delay:-1,
     } );

     gsap.to(".sky",{
       scale: 1,
       rotate: 0,
       duration: "-0.8",
       ease:"Expo.easeInOut",
       delay:-1,
     } );
      
     gsap.to(".bg",{
       scale: 1,
       rotate: 0,
       duration: "-0.8",
       ease:"Expo.easeInOut",
       delay:-5,
     } );

     gsap.to(".character",{
       scale: 0.4,
       rotate: 1,
        
       duration: "-0.8",
       ease:"Expo.easeInOut",
       delay:-5,
     } );


      


      const main = document.querySelector(".main");
      
      main?.addEventListener("mousemove", function(e) {
        const xMove = (e.clientX / window.innerWidth - 0.5) * 10;
        gsap.to(".main .text", {
          x: `${xMove }%`,
        });
        gsap.to(".sky", {
          x: `${xMove }%`,
        });
        gsap.to(".character .text", {
          x: `${xMove }%`,
        });
      });

    }, [showContent]);
  
    return (
    <>
      {/* Animation overlay */}
      {!showContent && (
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="250"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    VI
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href="/bg.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      )}
      {/* Main content */}
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] ">
          <div className="landing w-full h-screen bg-black">
            
            <div className="logo flex gap-135" style={{ position: "relative", zIndex: 10 }}>
              <div className="lines flex flex-col gap-1">
                <div className="line w-10 h-2 bg-black"></div>
                <div className="line2 w-10 h-2 bg-black"></div>
                <div className="line3 w-10 h-2 bg-black"></div>
              </div>
              <h3 className="text-3xl text-black-600">Rockstar</h3>
            </div>
            <div className="imagediv relative w-full h-screen">
              <img
                className="absolute sky scale-[0.4] rotate-[-20deg]  top-0 left-0 w-full h-full object-cover"
                src="/sky.png"
                alt=""
              />
              <img
                className="absolute  bg scale-[1] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="/bg.png"
                alt=""
              />
              <img
                className="absolute character bottom-[-45%] left-0 scale-[0.4] rotate-[-10deg]"
                src="/grand-theft-auto-san-andreas-grand-theft-auto-vice-city-grand-theft-auto-v-playstation-2-san-andreas-multiplayer-others-caa50d91762612385c5ea4f9e22d79d9.png"
                alt=""
              />  <div className="text text-pink-400  absolute Top -0 left-1/2 -translate-x-1/2 ">
                <h1 className="text-7xl  leading-none -ml-30">Grand </h1>
                <h1 className="text-7xl leading-none -ml 40">Theft </h1>
                <h1 className="text-7xl leading-none -ml-30">Auto </h1>
               

                
                
                </div> 
              
              
              
              
              
              
               </div>
            <div className="btmbar text-white absolute bottom- 0 left-0 w-full  py-1 px-0 bg-black">
              <div className="flex gap-4 items-center">
              <i className = "text-4xl ri-arrow-down-line" ></i>
              <h1>Scroll Down</h1>
            </div>
            <img  className = " absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 h-[50px] " src="./ps5.png" alt =" "/>
          </div>  
          </div>
          <div className="w-full h-screen  px-10 flex items-center justify-center bg-black">
            <div className="cntnr flex text-white  w-full h-[80%]">
            <div className="limg realative w-1/2 h-full">
            <img className="absolute scale-[0.9] top-252.5 left-1/6  -translate-x-1/2  -translate-y-1/2" src="public\finalgirl2.png" alt=""/>
            
            </div>
           <div className="rg w-[85%]">
           <h1 className="text-5xl"> ‎  </h1>
           <h1 className="text-5xl"> ‎  </h1>
          
           <h2 className="text-5xl text-pink-400" > She got the charm, he got the cuffs  </h2>
           <p className="mt-7 font-[Helvetica_Now_Display]"> 
           In the ruthless streets of GTA, she got the charm, he got the cuffs—a deadly duo playing both sides of the law. She struts through neon-lit clubs, hypnotizing kingpins and crooked cops alike with a wink and a loaded smile, her stilettos clicking like gunshots on the pavement. He’s lurking in the shadows, badge flashing, cuffs ready for whoever crosses their twisted game, his eyes cold as steel but burning with secret fire. Together, they pull heists, flip informants, and leave chaos in their wake, blurring lines between passion and crime. She whispers secrets into the ears of crime lords, slipping codes and plans like kisses, while he stages daring busts that somehow always end with the loot missing. In this city, trust is a currency few can afford—and they’re cashing in, one scandalous job at a time, leaving the streets buzzing with rumors of the cop and the femme fatale who might just own Los Santos.
            </p>
            <button className="bg-pink-500 px-10 py-5 text-2xl text-black mt-5">download </button>
           
           </div>


            </div>
            
          </div>
        </div>
      )}
    </>
  );
}

export default App;
