document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById('com-user');
  const sendBtn  = document.querySelector('.button--send');

  sendBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const mensaje = textarea.value.trim();
    if (!mensaje) return;

    const fechaISO = new Date().toISOString();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.sheety.co/5c945fdf5756e4bb06c4aec3cb6cb025/userMessages/hoja1');
    xhr.setRequestHeader('Content-Type', 'application/json');


    const payload = {
      hoja1: {
        message: mensaje,
        date:    fechaISO
      }
    };

    xhr.send(JSON.stringify(payload));
    textarea.value = '';
  });
});
