const sendButton = document.querySelector("#send");

sendButton.addEventListener("click", (event) => {
  const messageInput = document.querySelector("#message");
  console.log(messageInput.value);
});
