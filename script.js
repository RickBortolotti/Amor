// Data de início do relacionamento
const startDate = new Date('2024-06-01'); // Formato de data ajustado
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const timeDiff = now - startDate;

    // Calcular anos, meses e dias
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    // Ajustar se necessário
    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Atualizar o texto do contador
    if (years > 0) {
        countdownElement.textContent = `${years} anos, ${months} meses e ${days} dias juntos!`;
    } else {
        countdownElement.textContent = `${months} meses e ${days} dias juntos!`;
    }
}

// Atualizar a contagem a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Chama uma vez para inicializar

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.photo img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = `${this.parentElement.getAttribute('data-date')} - ${this.parentElement.getAttribute('data-description')}`;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Aguardar o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    updateCountdown(); // Inicializar após o carregamento
});

