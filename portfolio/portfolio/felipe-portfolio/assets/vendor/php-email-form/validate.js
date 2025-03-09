function handleSubmit(event) {
  event.preventDefault(); 

  setTimeout(function() {
    document.querySelector('.sent-message').style.display = 'block';
    document.querySelector('.sent-message').classList.add('fade-in');
  }, 500);
}