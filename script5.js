

const app = document.getElementById("app");






const dibujar = (perfilesTemp = perfiles) => {
    const total = perfilesTemp.length
    app.innerHTML = perfilesTemp.map((perfil, index) => `
    <section class="perfil">

        <div class="perfil-info">
            <h2>${index + 1} de ${total} - ${perfil.lugar} - (${perfil.codes.length})</h2>
            <p>HMR - ${perfil.detalles}</p>
        </div>

        <div class="galeria">
            ${perfil.codes.map(item => `
                <div class="card ${perfil.lugar === 'no' ? 'advertencia' : 'normal'}">
                <div class="indice">${item.indice}</div>
                    <a href="https://co.mileroticos.com/escorts/x/${item.code}" target="_blank">
                    <img src="https://static1.mileroticos.com/photos/l1/${item.image}"
                        
                            alt="${perfil.lugar}"
                        ></a>
                    </a>
                </div>
            `).join("")}
        </div>

    </section>
`).join("");
}

dibujar()


const btnConfig = document.getElementById("btnConfig");
const menu = document.getElementById("menu");

btnConfig.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Ejemplos de eventos para tus opciones
document.getElementById("btnOpcion1").addEventListener("click", () => {
    const perfilesTemporales = perfiles.filter(perfil => perfil.lugar !== 'no')
    dibujar(perfilesTemporales)
});

document.getElementById("btnOpcion2").addEventListener("click", () => {
    const perfilesTemporales = perfiles.filter(perfil => perfil.lugar === 'no')
    dibujar(perfilesTemporales)
});

document.getElementById("btnOpcion3").addEventListener("click", () => {
    const perfilesTemporales = perfiles.filter(perfil => perfil.lugar !== 'no').sort((a, b) => {
        if (a.lugar < b.lugar) {
            return -1;
        }
        if (a.lugar > b.lugar) {
            return 1;
        }
        return 0;
    })
    dibujar(perfilesTemporales)
});

document.getElementById("btnOpcion4").addEventListener("click", () => {
    const perfilesTemporales = perfiles.filter(perfil => perfil.lugar !== 'no').sort((a, b) => Number(a.detalles.split('-')[2]) - Number(b.detalles.split('-')[2]))
    dibujar(perfilesTemporales)
});

document.getElementById("btnOpcion5").addEventListener("click", () => {
    const perfilesTemporales = perfiles.filter(perfil => perfil.lugar !== 'no').sort((a, b) => Number(a.detalles.split('-')[1]) - Number(b.detalles.split('-')[1]))
    dibujar(perfilesTemporales)
});

document.getElementById("btnOpcion6").addEventListener("click", () => {
    const perfilesTemporales = perfiles.filter(perfil => perfil.lugar !== 'no').sort((a, b) => Number(a.detalles.split('-')[0]) - Number(b.detalles.split('-')[0]))
    dibujar(perfilesTemporales)
});

document.getElementById("btnOpcion7").addEventListener("click", () => {
    const perfilesTemporales = perfiles.filter(perfil => perfil.lugar !== 'no').sort((a, b) => b.codes.length - a.codes.length)
    dibujar(perfilesTemporales)
});