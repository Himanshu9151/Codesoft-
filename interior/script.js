// Smooth Scroll to Contact Section
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  
  // Open Lightbox
  function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = image.src;
    lightbox.classList.add("active");
  }
  
  // Close Lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
  }
  

  const toggleButton = document.getElementById('toggle-btn');
  const icon = toggleButton.querySelector('i'); // Select the icon inside the button

  toggleButton.addEventListener('click', () => {
    // Toggle the "active" class
    toggleButton.classList.toggle('active');

    // Switch the icon based on the state
    if (toggleButton.classList.contains('active')) {
      icon.classList.remove('fa-bars');
    //   icon.classList.add('fa-times'); // Change to "X" icon
      document.getElementById('body').innerHTML = `<div class="toogle-header">
 <div style="position:relative; padding:4%; "><a style="position: absolute;right: 4.5rem;top: 1.8rem; text-decoration:none; color:black;"href="index.html"><i style="font-size: 2rem; text-align:right; padding:4%;" class="fas fa-times"></i></a></div>
   <nav class="" style="display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;" >
        <a href='index.html'>Home</a>
        <a href='about.html'>About</a>
        <a href='service.html'>Services</a>
        <a href='project.html'>Projects</a>
        <a href='contact.html'>Contact</a>
        <div style="padding-top: 10rem;
    /* height: 30vh; */
    display: flex
;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;">
        <p style="font-size:2rem;padding:5% 0%;"><i class="fas fa-map-marker-alt"></i> Noida, India</p>
        <p style="font-size:1.5rem;padding:5% 0%;"><i class="fas fa-envelope"></i> Akshatlmp740@gmail.com</p>
        <p style="font-size:1rem;padding:5% 0%;"><i class="fas fa-phone"></i> +917309741075</p></div>
        
  </nav>
      </div>`;

    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars'); // Change back to menu icon
    }
  });
