document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los enlaces de redes sociales
    const socialLinks = document.querySelectorAll(".boton-redes-sociales a");

    // Añadir un evento de clic a cada enlace
    socialLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            // Crear un aviso personalizado para la confirmación
            const confirmOverlay = document.createElement("div");
            confirmOverlay.classList.add("confirm-overlay");

            const confirmBox = document.createElement("div");
            confirmBox.classList.add("confirm-box");

            confirmBox.innerHTML = `
                <p>¿Estás seguro que quieres visitar <strong>${this.innerText}</strong>?</p>
                <button class="confirm-btn yes">Sí</button>
                <button class="confirm-btn no">No</button>
            `;

            confirmOverlay.appendChild(confirmBox);
            document.body.appendChild(confirmOverlay);

            // Evitar que el enlace se abra de inmediato
            event.preventDefault();

            // Añadir funcionalidad a los botones de confirmación
            confirmBox.querySelector(".yes").addEventListener("click", () => {
                window.open(this.href, '_blank', 'noopener,noreferrer');
                document.body.removeChild(confirmOverlay);
            });

            confirmBox.querySelector(".no").addEventListener("click", () => {
                document.body.removeChild(confirmOverlay);
            });
        });
    });
});
