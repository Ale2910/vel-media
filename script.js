
// Elementos HTML

const radios = {
    preferences: window.document.getElementsByName('rad'),
    medidas: window.document.getElementsByName('rad2'),
    vmWay: window.document.getElementsByName('radVM')
}

const divs = {
    res: window.document.getElementById('res'),
    vmWay: window.document.getElementById('vmWay'),
    inputs: window.document.getElementById('input')
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
radios.preferences[1].onchange = ΔT
radios.preferences[2].onchange = ΔS

radios.vmWay[0].onchange = vmWay1
radios.vmWay[1].onchange = vmWay2



// Funçoẽs

function vm () {

    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             VM = <blank>a</blank> ΔT <blank>a|</blank> / <blank>a</blank> ΔS <br>
                             VM = <input type="number" class="num"> / <input type="number" class="num">`


    divs.vmWay.innerHTML = `<br>
                            - <input type="radio" name="radVM" checked>
                            <label for="0">Jeito curto</label>
                                /
                            <input type="radio" name="radVM">
                            <label for="1">Jeito longo</label>`
}


function ΔT () {
    
    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             ΔT = <blank>a</blank> ΔS <blank>a|</blank> / <blank>a</blank> VM <br>
                             ΔT = <input type="number" class="num"> / <input type="number" class="num">`

    divs.vmWay.innerHTML = ''

    
    radios.medidas.innerHTML = `
                             <strong>Medida:</strong>
                             <br>
 
                             <input type="radio" name="rad2" checked>
                             <label for="3">Horas</label>
                             <br>
                             <input type="radio" name="rad2">
                             <label for="4">Segundos</label>`
}


function ΔS () {

    divs.inputs.innerHTML = `<strong>Informe:</strong> <br>
                             ΔS = <blank>a</blank> VM <blank>a</blank> * <blank>a</blank> ΔT <br>
                             ΔS = <input type="number" class="num"> / <input type="number" class="num">`

    divs.vmWay.innerHTML = ''


    radios.medidas.innerHTML = `
                             <strong>Medida:</strong>
                             <br>
 
                             <input type="radio" name="rad2" checked>
                             <label for="3">Kilômetros</label>
                             <br>
                             <input type="radio" name="rad2">
                             <label for="4">Metros</label>`
}

// _______________________________ //

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



function calc () {


    // Valores
    const pref = radios.preferences

    let val0 = ''
    let val1 = ''
    let val2 = ''
    let val3 = ''

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

    divs.res.innerHTML = 'Limpo 🗑️'
}
