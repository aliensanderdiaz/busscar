        const modal = document.getElementById("miVentana");
        const btnAbrir = document.getElementById("abrir");

        const cantidadInput = document.getElementById("cantidad");
        const btnCambiarCantidad = document.getElementById("cambiarCantidad");
        const btnDomicilio = document.getElementById("domicilio");
        const btnOrdenarPrecioHora = document.getElementById("ordenarPrecioHora");
        const btnOrdenarSitio = document.getElementById("ordenarSitio");

        btnAbrir.addEventListener("click", () => {
            modal.showModal(); // Muestra la ventana
        });

        btnCambiarCantidad.addEventListener("click", () => {
            const cantidad = +cantidadInput.value || 50
            perfilesMostrar = perfiles.filter(perfil => perfil.lugar !== 'nnon').slice(0, cantidad)
            reset()
            modal.close();
        })

        btnDomicilio.addEventListener("click", () => {
            perfilesMostrar = perfiles.filter(perfil => perfil.lugar === 'dnonmnincninlninon')
            reset()
            modal.close();
        })

        btnOrdenarPrecioHora.addEventListener("click", () => {
            perfilesMostrar.sort((a, b) => a.hora - b.hora)
            reset()
            modal.close();
        })

        btnOrdenarSitio.addEventListener("click", () => {
            perfilesMostrar.sort((a, b) => a.lugar.localeCompare(b.lugar))
            reset()
            modal.close();
        })