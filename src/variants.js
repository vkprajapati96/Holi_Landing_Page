export const fadIn= (direction,delay)=>{
return{
        hidden:{
            y:direction === "up" ?  40 :direction === "done"? -40 :0,

            x:direction ==="left" ? 40: direction ==="right"?-40: 0
        },

        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:"tween",
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        }
}

}




export const fadeInVariants = {
    left: {
      hidden: { opacity: 0, x: -100 },
      show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    },
    up: {
      hidden: { opacity: 0, y: 100 },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    },
    right: {
      hidden: { opacity: 0, x: 100 },
      show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    },
  };
  