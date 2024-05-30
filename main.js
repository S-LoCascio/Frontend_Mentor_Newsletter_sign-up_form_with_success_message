const submit = document.getElementById("submit");
const email = document.getElementById("email");
const errorElement = document.getElementById("error");
const card = document.getElementById("card");
const successCard = document.getElementById("successCard");
const dismissButton = document.getElementById("dismissButton");

submit.addEventListener("click", (e) => {
  let messages = [];
  if (email.value == "" || email.value.includes("@") === false) {
    messages.push("Valid email required");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages;
    email.classList.add("error-box");
  }
  if (messages.length == 0) {
    e.preventDefault();
    card.classList.add("hide");
    document.getElementById("submitEmail").innerText = email.value;
    successCard.classList.remove("hide");
  }
});

dismissButton.addEventListener("click", () => {
  successCard.classList.add("hide");
  card.classList.remove("hide");
  email.classList.remove("error-box");
});
