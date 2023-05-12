async function getQuote() {
  const response = await fetch("http://localhost:3000/api/quotes");
  const data = await response.json();
  return data;
}

async function getDtQuote() {
  const response = await fetch("http://localhost:3000/quotes");
  const data = await response.json();
  return data;
}

Promise.all([getQuote(), getDtQuote()])
  .then((responses) => {
    const combinedData = [...responses[0], ...responses[1]];
    const randomIndex = Math.floor(Math.random() * combinedData.length);
    const randomQuote = combinedData[randomIndex].sentence;
    console.log(randomQuote);
    document.getElementById("quote").innerHTML = randomQuote;
  })
  .catch((errors) => console.log(errors));

// Ajouter une phrase
function addQuote() {
  const newQuoteInput = document.getElementById("newquote");
  const newQuoteValue = newQuoteInput.value.trim();
  if (newQuoteValue === "") {
    alert("Please enter a quote before submitting");
    return;
  }
  const data = {
    sentence: document.getElementById("newquote").value,
  };
  console.log(data);
  fetch("http://localhost:3000/quotes/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  document.getElementById("newquoteAdd").innerHTML += `You added "${newQuoteValue}" Congrats!`;
  document.getElementById("newquote").value = "";
  

}

const  reloading = () => {
  window.location.reload();
}

// window.onload = function () {
//   document.getElementById("newquote").value = "";
// };
