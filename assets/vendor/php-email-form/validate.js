document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name-field");
  const emailInput = document.getElementById("email-field");
  const messageInput = document.getElementById("message-field");
  const successMessage = document.getElementById("success-message");

  // Função para validar campos em tempo real
  function validateInput(input, minLength, type = "text") {
      if (type === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(input.value.trim());
      }
      return input.value.trim().length >= minLength;
  }

  // Adiciona eventos de validação aos campos
  nameInput.addEventListener("input", function () {
      if (validateInput(nameInput, 3)) {
          nameInput.classList.add("is-valid");
          nameInput.classList.remove("is-invalid");
      } else {
          nameInput.classList.add("is-invalid");
          nameInput.classList.remove("is-valid");
      }
  });

  emailInput.addEventListener("input", function () {
      if (validateInput(emailInput, 3, "email")) {
          emailInput.classList.add("is-valid");
          emailInput.classList.remove("is-invalid");
      } else {
          emailInput.classList.add("is-invalid");
          emailInput.classList.remove("is-valid");
      }
  });

  messageInput.addEventListener("input", function () {
      if (validateInput(messageInput, 10)) {
          messageInput.classList.add("is-valid");
          messageInput.classList.remove("is-invalid");
      } else {
          messageInput.classList.add("is-invalid");
          messageInput.classList.remove("is-valid");
      }
  });

  // Validação final no envio do formulário
  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita recarregar a página

      let isValid = true;

      if (!validateInput(nameInput, 3)) {
          nameInput.classList.add("is-invalid");
          isValid = false;
      }
      if (!validateInput(emailInput, 3, "email")) {
          emailInput.classList.add("is-invalid");
          isValid = false;
      }
      if (!validateInput(messageInput, 10)) {
          messageInput.classList.add("is-invalid");
          isValid = false;
      }

      if (isValid) {
          // Exibe a mensagem de sucesso com animação
          successMessage.classList.remove("d-none");
          successMessage.classList.add("show");

          // Limpa os campos do formulário
          form.reset();
          nameInput.classList.remove("is-valid", "is-invalid");
          emailInput.classList.remove("is-valid", "is-invalid");
          messageInput.classList.remove("is-valid", "is-invalid");

          // Esconde a mensagem após 4 segundos
          setTimeout(() => {
              successMessage.classList.remove("show");
              setTimeout(() => {
                  successMessage.classList.add("d-none");
              }, 500);
          }, 4000);
      }
  });
});