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
