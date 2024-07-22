var tl = gsap.timeline();
tl.from('.wrapper h2:nth-child(1)',{
  opacity:0,
  duration:0.5,
  delay:0.6
}).to('.wrapper h2:nth-child(1)',{
  opacity:0,
  duration:0.5,
  delay:0.6,
}).from('.wrapper h2:nth-child(2)',{
  opacity:0,
  duration:0.5,
  delay:0.6
}).to('.wrapper h2:nth-child(2)',{
  opacity:0,
  duration:0.5,
  delay:0.6,
  // display:'none',
}) .from('.wrapper h2:nth-child(3)',{
  opacity:0,
  duration:.5,
 
}).to('.wrapper h2:nth-child(3)',{
  opacity:0,
  duration:.5,
  
  display:'none',
}).to('.wrapper',{
  y:"-100%",
  duration:1,
 
})



tl.to(".text-marque",{
   x: '-195%', // Move the cloned content to the left
    duration: 8, // Adjust the duration as needed
    repeat: -1, // Infinite loop
    ease: 'linear',
    stagger:0 // Linear animation
})

gsap.from(".hero-container  h2",{
  y:"400px",
  stagger:3,
  duration:0.5,
ease: "circ.out",
})

gsap.to(".shape3",{
    x:"50px",
    y:"-10px",
    duration:2,
    repeat: -1,
    yoyo:true
})
// tl.to(".text-marque",{
//     x:100,
//     duration:5,
//     stagger:1
// })

document.querySelectorAll('.project-txt').forEach(element => {
  element.addEventListener('mouseenter', function (event) {
    console.log(event)
    const imgTag = event.currentTarget.querySelector('img');
    gsap.to(imgTag,{
   opacity:"1",
    duration:0.6,
    borderRadius:"20px",
   
})
    
  });
});

document.querySelectorAll('.project-txt').forEach(element => {
  element.addEventListener('mouseleave', function (event) {
   
    const imgTag = event.currentTarget.querySelector('img');
     gsap.to(imgTag,{
  opacity:"0",
    duration:0.3,
})
  });
});



