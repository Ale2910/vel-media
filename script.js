
// Elementos HTML

const radios = {
    preferences: window.document.getElementsByName('rad'),
    medidas: window.document.getElementsByName('rad2'),
    vmWay: window.document.getElementsByName('radVM')
}

const divs = {
    res: window.document.getElementById('res'),
    vmWay: window.document.getElementById('vmWay'),
    inputs: window.document.getElementById('input'),
    medidas: window.document.getElementById('medidas')
}

const buttons = {
    calc: window.document.getElementById('calcButton'),
    clear: window.document.getElementById('clearButton')
}


// Configurando os botôes
buttons.calc.addEventListener('click', calc)
buttons.clear.addEventListener('click', clear)

const inputs = window.document.getElementsByClassName('num')


// Configurando a função cada radio
radios.preferences[0].onchange = vm
radios.preferences[1].onchange = ΔS
radios.preferences[2].onchange = ΔT

radios.vmWay[0].onchange = vmWay1
radios.vmWay[1].onchange = vmWay2


// As medidas padrões que vem no site
radios.medidas[0].onchange = kmh
radios.medidas[1].onchange = ms



// Funçoẽs

function vm () {

    // Configurando a função de cada radio 
    radios.medidas[0].onchange = kmh
    radios.medidas[1].onchange = ms


    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             VM = <blank>a</blank> ΔS <blank>a| km</blank>  / <blank>a</blank> ΔT <br>
                             VM = <input type="number" class="num"> <gray>km</gray>  / <input type="number" class="num"> <gray>h</gray>`


    divs.vmWay.innerHTML = `<br>
                             - <input type="radio" name="radVM" checked>
                             <label for="0"> <gray>Jeito curto</gray> </label>
                                /
                             <input type="radio" name="radVM">
                             <label for="1"> <gray>Jeito longo</gray> </label>`

    divs.medidas.innerHTML = `
                             <strong>Medida:</strong>
                             <br>

                             <input type="radio" name="rad2" checked>
                             <label for="3">km/h</label>
                             <br>
                             <input type="radio" name="rad2">
                             <label for="4">m/s</label>`
}

function ΔS () {

    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             ΔS = <blank>a</blank> VM <blank>a</blank> / <blank>a</blank> ΔT <br>
                             ΔS = <input type="number" class="num"> / <input type="number" class="num">`

    divs.vmWay.innerHTML = ''


    divs.medidas.innerHTML = `
                             <strong>Medida:</strong>
                             <br>
 
                             <input type="radio" name="rad2" checked>
                             <label for="3">Kilômetros</label>
                             <br>
                             <input type="radio" name="rad2">
                             <label for="4">Metros</label>`
}

function ΔT () {
    
    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             ΔT = <blank>a</blank> ΔS <blank>a|</blank> / <blank>a</blank> VM <br>
                             ΔT = <input type="number" class="num"> / <input type="number" class="num">`

    divs.vmWay.innerHTML = ''

    
    divs.medidas.innerHTML = `
                             <strong>Medida:</strong>
                             <br>
 
                             <input type="radio" name="rad2" checked>
                             <label for="3">Horas</label>
                             <br>
                             <input type="radio" name="rad2">
                             <label for="4">Segundos</label>`
}


// === Medidas === //

function kmh () {

    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             VM = <blank>a</blank> ΔS <blank>a| km</blank>  / <blank>a</blank> ΔT <br>
                             VM = <input type="number" class="num"> <gray>km</gray>  / <input type="number" class="num"> <gray>h</gray>`

}

function ms () {

    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             VM = <blank>a</blank> ΔS <blank>a| m</blank>  / <blank>a</blank> ΔT <br>
                             VM = <input type="number" class="num"> <gray>m</gray>  / <input type="number" class="num"> <gray>s</gray>`

}


// === //

function vmWay1 () {

    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             VM = <blank>a</blank> ΔT <blank>a|</blank> / <blank>a</blank> ΔS <br>
                             VM = <input type="number" class="num"> / <input type="number" class="num">`

}

function vmWay2 () {

    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             VM = <blank>a</blank> SF <blank>a|</blank> - <blank>a</blank> SI <blank>ab</blank> / <blank>a</blank> TF <blank>a|</blank> - <blank>a</blank> TI <br>
                             VM = <input type="number" class="num"> - <input type="number" class="num"> / <input type="number" class="num"> - <input type="number" class="num">`

}



/* Valores
    (eles precisam ser declarados fora da func calc,
     pois a func clear os usa também)
*/
let val0 = ''
let val1 = ''
let val2 = ''
let val3 = ''

const pref = radios.preferences
//

function calc () {

    // Valores
    let x


    /* Verificando se todos os inputs necessários foram preenchidos
        e atribuindo valores às variáveis
    */
    if(pref[0].checked && radios.vmWay[1].checked) {

        val0 = inputs[0].value
        val1 = inputs[1].value
        val2 = inputs[2].value
        val3 = inputs[3].value

        if(val0.length === 0 || val1.length === 0 || val2.length === 0 || val3.length === 0) {
            return window.alert('Você tem que digitar os valores!')
        }


    } else {

        val0 = inputs[0].value
        val1 = inputs[1].value

        if(val0.length === 0 || val1.length === 0) {
            return window.alert('Você tem que digitar os valores!')
        }
    }

    // Velocidade média
    if (pref[0].checked) {

        // Jeito curto
        if (radios.vmWay[0].checked) {

            // Jeito curto
            const time = val0
            const distance = val1
    
            x = time / distance


            // Configurando a medida
            if(radios.medidas[0].checked) {
                x += 'km/h'

            } else if (radios.medidas[1].checked) {
                x += 'm/s'
            }


         // Jeito longo
        } else if (radios.vmWay[1].checked) {

            const sf = val0
            const si = val1
            const tf = val2
            const ti = val3

            x = (sf - si) / (tf - ti)


            // Configurando a medida
            if(radios.medidas[0].checked) {
                x += 'km/h'

            } else if (radios.medidas[1].checked) {
                x += 'm/s'
            }
        }
        
    
     // Tempo
    } else if (pref[1]) {

        const distance = val0
        const velocity = val1

        x = distance / velocity


        // Configurando a medida
        if(radios.medidas[0].checked) {
            x += ' horas'

        } else if (radios.medidas[1].checked) {
            x += ' segundos'
        }


     // Distância
    } else if (pref[2]) {

        const velocity = val0
        const time = val1

        x = velocity * time


        // Configurando a medida
        if(radios.medidas[0].checked) {
            x += ' horas'

        } else if (radios.medidas[1].checked) {
            x += ' segundos'
        }
    }


    divs.res.innerHTML = x
}



function clear() {

    // Limpando a div
    divs.res.innerHTML = 'Limpo 🗑️'

    
    // Limpando os inputs
    if(pref[0].checked && radios.vmWay[1].checked) {

        val0 = ''
        val1 = ''
        val2 = ''
        val3 = ''


    } else {

        val0 = ''
        val1 = ''
    }
}
