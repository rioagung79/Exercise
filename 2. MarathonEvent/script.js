document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('attendance-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        // Collect form data
        var formData = new FormData(this);
        // Convert formData to JSON
        var jsonData = {};
        formData.forEach(function (value, key) {
            jsonData[key] = value;
        });
        // Do something with jsonData (e.g., send it to server via AJAX)
        console.log(jsonData); // For demonstration
        // You can perform AJAX request here to submit form data to server
    });
});

    var weddingDate = new Date('July 14, 2024 16:00:00').getTime();
    var countdown = document.getElementById('countdown');
  
    var timer = setInterval(function() {
    var now = new Date().getTime();
    var distance = weddingDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdown.innerHTML = "Menuju ***  " + days + " Hari - " + hours + " Jam - " + minutes + " Menit - " + seconds + " detik  ***";
    
    if (distance < 0) {
      clearInterval(timer);
      countdown.innerHTML = "EXPIRED";
    }
  }, 1000);



document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!validateEmail(email)) {
        alert("Email tidak valid");
        return;
    }

    if (!validatePhone(phone)) {
        alert("Nomor telepon tidak valid");
        return;
    }

    // Kirim data formulir
    alert("Pendaftaran berhasil!");
    // Di sini biasanya akan ada kode untuk mengirim data ke server
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10,}$/;
    return re.test(phone);
}


function goBack() {
            window.location.href = '../index.html';
        }