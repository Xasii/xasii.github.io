// Add event listeners to nav links
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ccc';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});


/* Dagdag sa iyong umiiral na JavaScript */

function openPopup() {
document.getElementById('popup').style.display = 'block';
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
}

// Add event listener to CTA button
document.querySelector('.cta-btn').addEventListener('click', () => {
    alert('I LOVE YOU!</3');
});
