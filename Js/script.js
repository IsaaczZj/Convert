const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('footer')
const description = document.getElementById('description')


const USD = 5.76
const EUR = 6.24
const GPB = 7.45

amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (e) => {
  e.preventDefault()
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GPB, "£")
      break;
  }
}

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${price} `
    footer.classList.add('show-result')

  } catch (err) {
    footer.classList.remove('show-result')
    console.log(err);
    alert("Não foi possível converter. Tente novamente")

  }
}

