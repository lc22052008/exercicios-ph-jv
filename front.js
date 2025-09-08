function inicio() {
    let nome = window.prompt('Qual é o seu nome?')
    let res = window.Document.getElementById('resultado')
    res.innerHTML = `<p>Olá, <strong>${nome} <strong>! É um grande prazer te conhecer! &#x1F596;`
}
function inicio2() {
    let nome = window.prompt('Qual é o seu nome?')
    window.alert(`Olá, ${nome}! É um prazer te conhecer!`)
}

function media(){
    let aluno = window.prompt('Qual o nome do aluno?')
    let nota1 = Number(window.prompt('Qual foi a primeira nota dele(a)?'))
    let nota2 = Number(window.prompt('Qual foi a segunda nota dele(a)?'))
    let nota3 = Number(window.prompt('Qual foi a terceira nota dele(a)?'))
    let media = (nota1+nota2+nota3)/3

    let final = document.getElementById('jogarnohtml')
    final.innerHTML = `<p>Calculando a média final de <mark>${nome} </mark> As notas obtidas foram <mark> ${aluno}, ${nota2} e ${nota3}
    </mark> A média final será <mark> ${media.tofixed(1)}</mark>.<p>`
}

 function trocarcores(){
    let listadecores = ['green', 'blue', 'white', 'orange', 'gray','red', 'pink'];
        document.body.style.backgroundColor=listadecores[Math.floor(7*Math.random())];
 }
