var typed = new Typed(".typewriter-text", {
    strings: [
      " ",
      "Web Developer",
      "Designer",
      "Freelancer",
      "Apaixonado",
      "Mestre de RPG",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  
  let menuIcon = document.querySelector('#menu-icons');
  let navbar = document.querySelector('.navbar');
  
  let sections = document.querySelectorAll('.section');
  let navLinks = document.querySelectorAll('.header nav a');
  
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      }
    });
  }
  
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  // Função de Validação do Formulário de Contato
document.querySelector('#contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Previne o comportamento padrão de recarregar a página

  // Pega os valores dos campos
  let fullName = document.getElementById('fullName').value.trim();
  let email = document.getElementById('email').value.trim();
  let phoneNumber = document.getElementById('phoneNumber').value.trim();
  let subject = document.getElementById('subject').value.trim();
  let message = document.getElementById('message').value.trim();

  let formMessage = document.getElementById('formMessage'); // Div para exibir a mensagem

  // Validação simples: Verifica se todos os campos estão preenchidos
  if (fullName === "" || email === "" || phoneNumber === "" || subject === "" || message === "") {
    formMessage.innerHTML = "<p style='color: red;'>Por favor, preencha todos os campos!</p>";
    console.error("Erro: Todos os campos são obrigatórios.");
  } else {
    // Se todos os campos estão preenchidos, exibe mensagem de sucesso
    formMessage.innerHTML = "<p style='color: green;'>Mensagem enviada com sucesso!</p>";
    console.log("Sucesso: Formulário enviado.");
    
    // Aqui você poderia enviar os dados, por exemplo, via AJAX ou outra integração
  }
});

  