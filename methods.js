function replace() {
    var nome = 'José Ângelo Stefânio Antônio              ';

    console.log(`nome original: ${nome}`)

    //retira os espaços
    console.log(nome.trim())

    //letras minusculas
    console.log(nome.trim().toLowerCase())

    //letras maiusculas
    console.log(nome.trim().toUpperCase())

    //substituir string por outra coisa
    console.log(nome.trim().replaceAll(`o`, `w`))

    //
    console.log(nome.indexOf(`elo`))

}

replace();