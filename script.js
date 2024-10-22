// Data de início do relacionamento
const startDate = new Date('2024-06-1'); // Substitua pela data do seu relacionamento
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const timeDiff = now - startDate;

    // Calcular anos, meses e dias
    const years = now.getFullYear() - startDate.getFullYear();
    const months = now.getMonth() - startDate.getMonth();
    const days = now.getDate() - startDate.getDate();

    // Ajustar meses e dias se necessário
    let displayYears = 0;
    let displayMonths = months;
    
    if (days < 0) {
        displayMonths -= 1;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0); // último dia do mês anterior
        days += lastMonth.getDate(); // pega os dias do mês anterior
    }

    if (displayMonths < 0) {
        displayYears = years - 1;
        displayMonths += 12; // ajusta os meses
    } else {
        displayYears = years;
    }

    // Atualizar o texto do contador
    if (displayYears > 0) {
        countdownElement.textContent = `${displayYears} anos, ${displayMonths} mêses e ${days} dias juntos!`;
    } else {
        countdownElement.textContent = `${displayMonths} mêses e ${days} dias juntos!`;
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
