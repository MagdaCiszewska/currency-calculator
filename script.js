{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.6039;
    const rateUSD = 4.2006;
    const rateSEK = 0.407;
    const rateGBP = 5.2086;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "USD":
        return amount / rateUSD;

      case "SEK":
        return amount / rateSEK;

      case "GBP":
        return amount / rateGBP;
    }
  };

  const onResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");

    resultElement.innerHTML = `${amount.toFixed(
      2
    )} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
  };

  const onFormSubmit = () => {
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    onResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("input", onFormSubmit);
  };

  init();
}
