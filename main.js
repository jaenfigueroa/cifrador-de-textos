const DICCIONARIO = Object.freeze({ e: 'enter', i: 'imes', o: 'ober', a: 'ai', u: 'ufat' })
const seccionVacio = document.getElementById('warningSection')
const seccionResultado = document.getElementById('resultsSection')
const resultado = document.getElementById('resultado')
const texto = document.getElementById('texto')

const cifrarDecifrar = (text, type) => {
  for (const key in DICCIONARIO) {
    type === 'encrypt' && (text = text.replaceAll(key, DICCIONARIO[key]))
    type === 'decrypt' && (text = text.replaceAll(DICCIONARIO[key], key))
  }
  return text
}

const mostrarResultados = (text) => {
  resultado.textContent = text
  seccionVacio.classList.toggle('novisible', !!text)
  seccionResultado.classList.toggle('novisible', !text)
}

const copiarTexto = () => navigator.clipboard.writeText(resultado.textContent)

const limpiarTexto = (e) => {
  texto.value = e.target.value.replaceAll(/[^a-z\s]+/g, '')
}

const handleClick = (type) => mostrarResultados(cifrarDecifrar(texto.value, type))