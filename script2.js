console.log({ length: perfiles.length })
let perfilesMostrar = perfiles.filter(perfil => perfil.lugar !== 'nnon').slice(0, 123)
console.log({ length: perfiles.length })

const codificar = (entrada) => {
    const entradaArray = entrada.split('')
    return entradaArray.map(_ => _ + 'n').join('')
}

const decodificar = (entrada) => {
    const entradaArray = entrada.split('')
    return entradaArray.filter((_, index) => index % 2 === 0).join('')
}

const contenedor = document.querySelector('.contenedor')

const reset = () => {

    let html = ''
    let index = 1
    for (const element of perfilesMostrar) {
        let telefonoMostrar = element.otrosNumeros[element.otrosNumeros.length - 1] || element.celular
        let codigos = element.codigos
        if (codigos.length > 5) {
            codigos = codigos.slice(codigos.length - 5)
        }
        let codigosHtml = codigos.map(code => `<a target="_blank" href="https://co.mileroticos.com/escorts/xxx/${ decodificar(code) }">Ⓜ️</a>`)
        html += `
        <div class="card">
            <div>
                <img src="${ element.images[0] ? 'https://static1.mileroticos.com/photos/l1/' +  decodificar(element.images[0])  : '' }" width="50"/>
            </div>
        
            <p> ${index} - 
                <a 
                href="https://www.google.com/search?q=${decodificar(telefonoMostrar)}" 
                target="_blank" 
                rel="noopener noreferrer">${decodificar(telefonoMostrar)}</a> 

                -
                
                <a 
                href="https://co.mileroticos.com/escorts/buscar-${decodificar(telefonoMostrar)}" 
                target="_blank" 
                rel="noopener noreferrer">Ⓜ️</a> - ${ element.otrosNumeros.length + 1 }T - ${ element.codigos.length }C
                
                <br>
                ${element.rato} - ${element.media} - ${element.hora} <br>
                ${decodificar(element.lugar)} <br>
                ${ codigosHtml.join(' - ')}
                
            </p>
        </div>`
        index++
    }

    // ${element.otrosNumeros.map(numero => decodificar(numero)).join('<br>')} <br>
    // ${element.codigos.map(codigo => decodificar(codigo)).join('<br>')} <br>

    contenedor.innerHTML = html
}

reset()


const inputSearch = document.querySelector('#inputSearch')


const buscar = () => {
    const valueSearch = codificar(inputSearch.value)

    const perfil = perfiles.find(perfil => {
        return perfil.celular === valueSearch || perfil.otrosNumeros.includes(valueSearch) || perfil.codigos.includes(valueSearch)

    })
    console.log({ perfil })
    if (!perfil) {
        contenedor.innerHTML = `<div class="card"><p>${inputSearch.value} No encontrado</p></div><div class="card"><button class="btn-full" onclick="reset()">Reset</button></div>`
    } else {
        let telefonoMostrar = perfil.otrosNumeros[perfil.otrosNumeros - 1] || perfil.celular

        let codigos = perfil.codigos
        if (codigos.length > 5) {
            codigos = codigos.slice(codigos.length - 5)
        }
        let codigosHtml = codigos.map(code => `<a target="_blank" href="https://co.mileroticos.com/escorts/xxx/${ decodificar(code) }">Ⓜ️</a>`)

        contenedor.innerHTML = `
        <div class="card">
                    <div>
                <img src="${ perfil.images[0] ? 'https://static1.mileroticos.com/photos/l1/' +  decodificar(perfil.images[0])  : '' }" width="50"/>
            </div>
            <p>
                <a 
                href="https://www.google.com/search?q=${decodificar(telefonoMostrar)}" 
                target="_blank" 
                rel="noopener noreferrer">${decodificar(telefonoMostrar)}</a> 

                -
                
                <a 
                href="https://co.mileroticos.com/escorts/buscar-${decodificar(telefonoMostrar)}" 
                target="_blank" 
                rel="noopener noreferrer">Ⓜ️</a>  - ${ perfil.otrosNumeros.length + 1 }T - ${ perfil.codigos.length }C
                
                <br>
                ${perfil.rato} - ${perfil.media} - ${perfil.hora} <br>
                ${decodificar(perfil.lugar)} <br>
                ${ codigosHtml.join(' - ')}
                
            </p>
        </div><div class="card"><button class="btn-full" onclick="reset()">Reset</button></div>`
    }
}