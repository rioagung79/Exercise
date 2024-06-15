
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

   


    const form = document.getElementById('registrationForm');
    const participantList = document.getElementById('participantList');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const participant = {
            fullName,
            email,
            phone
        };

        // Retrieve existing participants from localStorage
        let participants = JSON.parse(localStorage.getItem('participants')) || [];

        // Add new participant
        participants.push(participant);

        // Save back to localStorage
        localStorage.setItem('participants', JSON.stringify(participants));

        // Reset the form
        form.reset();

        // Display the updated list
        displayParticipants();
    // Di sini biasanya akan ada kode untuk mengirim data ke server
});

});
function displayParticipants() {
    const participants = JSON.parse(localStorage.getItem('participants')) || [];
    participantList.innerHTML = '';


    
    participants.forEach(function(participant, index) {
        const li = document.createElement('li');
        li.innerHTML = `Nama Lengkap: ${participant.fullName},<br> Email: ${participant.email},<br> Nomor Telepon: ${participant.phone}<br>`;
        participantList.appendChild(li);
    });
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10,}$/;
    return re.test(phone);
}
