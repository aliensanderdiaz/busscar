console.log({length: perfiles.length})
let perfilesMostrar = perfiles.filter(perfil => perfil.lugar !== 'nnon').slice(0, 49)
console.log({length: perfiles.length})

const codificar = (entrada) => {
  const entradaArray = entrada.split('')
  return entradaArray.map(_ => _ + 'n').join('')
}

const decodificar = (entrada) => {
  const entradaArray = entrada.split('')
  return entradaArray.filter((_, index) => index % 2 === 0).join('')
}

const contenedor = document.querySelector('.contenedor')

let html = ''

for (const element of perfilesMostrar) {
    let telefonoMostrar = element.otrosNumeros[element.otrosNumeros - 1] || element.celular
    html += `
        <div class="card">
            <p>
                ${decodificar(telefonoMostrar)} <br>
                ${element.rato} - ${element.media} - ${element.hora} <br>
                ${decodificar(element.lugar)} <br>

                
            </p>
        </div>`
}

                // ${element.otrosNumeros.map(numero => decodificar(numero)).join('<br>')} <br>
                // ${element.codigos.map(codigo => decodificar(codigo)).join('<br>')} <br>

contenedor.innerHTML = html

const inputSearch = document.querySelector('#inputSearch')


const buscar = () => {
    const valueSearch = codificar(inputSearch.value)
    
    const perfil = perfiles.find(perfil => {
        return perfil.celular === valueSearch || perfil.otrosNumeros.includes(valueSearch) || perfil.codigos.includes(valueSearch)
    
    })
    console.log({ perfil })
    if (!perfil) {
        contenedor.innerHTML = '<div><p>No encontrado</p></div>'
    } else {
        let telefonoMostrar = perfil.otrosNumeros[perfil.otrosNumeros - 1] || perfil.celular
        contenedor.innerHTML = `
        <div>
            <p>
                ${decodificar(telefonoMostrar)} <br>
                ${perfil.rato} - ${perfil.media} - ${perfil.hora} <br>
                ${decodificar(perfil.lugar)} <br>

                
            </p>
        </div>`
    }
}