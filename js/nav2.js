const navSlide2 = () => {
    const burger2 = document.querySelector('.burger2');
    const nav2 = document.querySelector('.main-nav-2')
    const navLinks2 = document.querySelectorAll('.main-nav-2 li');
    
    
    burger2.addEventListener('click', () => {
      // Toggle nav
      nav2.classList.toggle('nav-active');
    
      // Animate links
      navLinks2.forEach((link, index)=> {
        if(link.style.animation){
          link.style.animation ='';
        }
        else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`
        }
      });
      //Burger animation
      burger2.classList.toggle('toggle');
    });
    
    
    }
   
  
    navSlide2();