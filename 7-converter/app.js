import fetch from "node-fetch";
const apiKey = "14b4775f51ee0fece8be9311";

async function getExchangeRate(url, targetСurrency) {
  const response = await fetch(url);
  const data = await response.json();
  return data.conversion_rates[targetСurrency];
}
async function converter(amount, sourceСurrency, targetСurrency) {
  if (sourceСurrency === "RUB") {
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/RUB`;
    switch (targetСurrency) {
      case "USD":
        const rateUSD = await getExchangeRate(url, targetСurrency);
        return amount * rateUSD;
      case "EUR":
        const rateEUR = await getExchangeRate(url, targetСurrency);
        return amount * rateEUR;
      case "CAD":
        const rateCAD = await getExchangeRate(url, targetСurrency);
        return amount * rateCAD;
      default:
        return null;
    }
  } else if (sourceСurrency === "USD") {
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
    switch (targetСurrency) {
      case "RUB":
        const rateRUB = await getExchangeRate(url, targetСurrency);
        return amount * rateRUB;
      case "EUR":
        const rateEUR = await getExchangeRate(url, targetСurrency);
        return amount * rateEUR;
      case "CAD":
        const rateCAD = await getExchangeRate(url, targetСurrency);
        return amount * rateCAD;
      default:
        return null;
    }
  } else if (sourceСurrency === "EUR") {
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/EUR`;
    switch (targetСurrency) {
      case "RUB":
        const rateRUB = await getExchangeRate(url, targetСurrency);
        return amount * rateRUB;
      case "USD":
        const rateUSD = await getExchangeRate(url, targetСurrency);
        return amount * rateUSD;
      case "CAD":
        const rateCAD = await getExchangeRate(url, targetСurrency);
        return amount * rateCAD;
      default:
        return null;
    }
  } else if (sourceСurrency === "CAD") {
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/CAD`;
    switch (targetСurrency) {
      case "RUB":
        const rateRUB = await getExchangeRate(url, targetСurrency);
        return amount * rateRUB;
      case "USD":
        const rateUSD = await getExchangeRate(url, targetСurrency);
        return amount * rateUSD;
      case "EUR":
        const rateEUR = await getExchangeRate(url, targetСurrency);
        return amount * rateEUR;
      default:
        return null;
    }
  } else {
    return null;
  }
}

converter(1000, "CAD", "EN").then((result) => {
  console.log(result); // Выведет результат конвертации
});
