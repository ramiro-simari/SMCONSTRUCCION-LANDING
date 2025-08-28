window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo",this.window.scrollY>0);
})


  // Seleccionamos elementos
  const header = document.querySelector('.header');
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');
  const bars = document.querySelectorAll('.menu-toggle .bar');

  // Función para manejar scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('abajo');
    } else {
      header.classList.remove('abajo');
    }
  });

  // Abrir/cerrar menú hamburguesa
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Cerrar menú al tocar un link
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
