var tl = gsap.timeline();
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
    // Traverse the DOM to find the <img> tag within the clicked .project-txt element
    const imgTag = event.currentTarget.querySelector('img');
    imgTag.style.display="block";
    imgTag.style.zIndex="5";
  });
});

document.querySelectorAll('.project-txt').forEach(element => {
  element.addEventListener('mouseleave', function (event) {
    // Traverse the DOM to find the <img> tag within the clicked .project-txt element
    const imgTag = event.currentTarget.querySelector('img');
    imgTag.style.display="none"
  });
});



