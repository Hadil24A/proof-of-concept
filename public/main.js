document.addEventListener('DOMContentLoaded', () => {

    // Open popup
    
    document.querySelectorAll('.openPopup').forEach(button => {
        button.addEventListener('click', () => {
            let popupId = button.getAttribute('data-popup-id')
            document.getElementById(popupId).classList.toggle('active')
        });
    });

    // Close popup
    
    document.querySelectorAll('.closePopupButton').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.mobilePopup').classList.remove('active')
        });
    });
});
