

const app = document.getElementById("app");

const total = perfiles.length

app.innerHTML = perfiles.map((perfil, index) => `
    <section class="perfil">

        <div class="perfil-info">
            <h2>${ index + 1 } de ${ total } - ${perfil.lugar}</h2>
            <p>${perfil.detalles}</p>
        </div>

        <div class="galeria">
            ${perfil.codes.map(item => `
                <div class="card ${ perfil.lugar === 'no' ? 'advertencia':'normal'}">
                <div class="indice">${item.indice}</div>
                    <a href="https://co.mileroticos.com/escorts/x/${ item.code }" target="_blank">
                    <img src="https://static1.mileroticos.com/photos/l1/${ item.image}"
                        
                            alt="${perfil.lugar}"
                        ></a>
                    </a>
                </div>
            `).join("")}
        </div>

    </section>
`).join("");
