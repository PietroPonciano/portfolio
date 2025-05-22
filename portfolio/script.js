
function saudacao() {
  let hora = new Date().getHours(); // Obtém a hora atual

  // Seleciona o primeiro elemento com a classe 'intro'
  let intro = document.querySelector('.intro');

  // Define a saudação e altera o fundo de acordo com a hora
  if (hora >= 6 && hora < 12) {
      intro.style.backgroundImage = "url('./imagens/manha.jpg')";
      return "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
      intro.style.backgroundImage = "url('./imagens/tarde.jpg')";
      return "Boa tarde!";
  } else {
      intro.style.backgroundImage = "url('./imagens/noite.jpg')";
      return "Boa noite!";
  }
}

// Altera o conteúdo do elemento com id "saudacao" para a saudação correta
document.getElementById("saudacao").innerHTML = saudacao();


// Criação do Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quando o elemento entra na tela, adiciona a classe 'visible'
        entry.target.classList.add('visible');
        // Para de observar o elemento após ele aparecer
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5  // Quando 50% do elemento estiver visível, a animação será ativada
  });
  
  // Seleção de todos os elementos que você deseja animar
  const elements = document.querySelectorAll('.content-to-animate');
  
  // Começando a observar esses elementos
  elements.forEach(element => {
    observer.observe(element);
  });

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    const elements = document.querySelectorAll('.content-to-animate');
    elements.forEach(element => observer.observe(element));
});

// Select all cards
const cards = document.querySelectorAll('.card');

// Add event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        
        card.classList.add('show-content');
    });
});

window.onload = saudacao();




