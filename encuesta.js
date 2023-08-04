// encuesta.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("encuestaForm");
    const voteCounts = {
        rojo: 0,
        azul: 0,
        verde: 0,
        amarillo: 0
    };
    let hasVoted = false; // Variable para rastrear si el usuario ha votado

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (hasVoted) {
            resetVotes(); // Reiniciar los votos y las cookies si el usuario ha votado
            hasVoted = false;
        }

        const formData = new FormData(form);
        const selectedOption = formData.get("color"); // Obtener la opción seleccionada

        if (selectedOption) {
            // Incrementar el contador de votos para la opción seleccionada
            voteCounts[selectedOption]++;
            const voteCountSpan = form.querySelector(`input[value="${selectedOption}"]`).nextElementSibling;
            voteCountSpan.textContent = `${voteCounts[selectedOption]} votos`;
            updateLiquidLevel();
            setVotedCookie();
            hasVoted = true;
        }
    });

    function resetVotes() {
        Object.keys(voteCounts).forEach(option => {
            voteCounts[option] = 0;
            const voteCountSpan = form.querySelector(`input[value="${option}"]`).nextElementSibling;
            voteCountSpan.textContent = "0 votos";
        });

        const liquidLevels = form.querySelectorAll(".liquid-level");
        liquidLevels.forEach(liquidLevel => (liquidLevel.style.width = "0%"));
        deleteVotedCookie();
    }

    function setVotedCookie() {
        document.cookie = "voted=true; max-age=31536000"; // La cookie expira en un año (31536000 segundos)
    }

    function deleteVotedCookie() {
        document.cookie = "voted=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; // Eliminar la cookie de voto
    }

    function updateLiquidLevel() {
        const totalVotes = Object.values(voteCounts).reduce((total, count) => total + count, 0);
        const liquidLevels = form.querySelectorAll(".liquid-level");

        liquidLevels.forEach((liquidLevel, index) => {
            const voteCount = Object.values(voteCounts)[index];
            const percentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;
            liquidLevel.style.width = `${percentage}%`;
        });
    }
});
