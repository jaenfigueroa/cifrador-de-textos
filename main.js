const DICCIONARIO = Object.freeze({ e: 'enter', i: 'imes', o: 'ober', a: 'ai', u: 'ufat' })
const seccionVacio = document.getElementById('warningSection')
const seccionResultado = document.getElementById('resultsSection')
const texto = document.getElementById('texto')
const resultado = document.getElementById('resultado')

const cifrarDecifrar = (text, type) => {
  for (const key in DICCIONARIO) {
    type === 'cifrar' && (text = text.replaceAll(key, DICCIONARIO[key]))
    type === 'decifrar' && (text = text.replaceAll(DICCIONARIO[key], key))
  }
  return text
}

const mostrarResultado = (text) => {
  resultado.value = text
  seccionVacio.classList.toggle('novisible', text)
  seccionResultado.classList.toggle('novisible', !text)
}

const copiarResultado = () => navigator.clipboard.writeText(resultado.value)

const limpiarTexto = (e) => {
  texto.value = e.target.value.replaceAll(/[^a-z\s]+/g, '')
}

const start = (type) => mostrarResultado(cifrarDecifrar(texto.value, type))