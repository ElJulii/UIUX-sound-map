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

    // ALERT MESSAGE FOR "CONTACT US"

    function showPopupMessage(message, isSuccess = true) {
      const popup = document.getElementById('popup-message');
      popup.textContent = message;
      popup.style.backgroundColor = isSuccess ? "#28a745" : "#dc3545";
      popup.style.display = 'block';
      setTimeout(() => popup.style.opacity = '1', 10);

      setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => {
          popup.style.display = 'none';
        }, 300);
      }, 3000);
    }

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Message sent successfully! Status code:", xhr.status);
        showPopupMessage("Message sent successfully!", true);
      } else {
        console.log("Message not sent. Status code:", xhr.status);
        showPopupMessage("Message not sent. Code: " + xhr.status, false);
      }
    };

    xhr.onerror = function () {
      console.log("Message not sent. Network error or CORS issue.");
      showPopupMessage("Message not sent. Network error.", false);
    };

    xhr.send(JSON.stringify(payload));
    textarea.value = '';
  });
});
