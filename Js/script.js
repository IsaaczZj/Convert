const form = document.querySelector('form')
const amount = document.getElementById('amount') 
const currency = document.getElementById('currency')

amount.addEventListener('input', () =>{
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (e) =>{
  e.preventDefault()

  console.log(currency.value);
  
  
}

