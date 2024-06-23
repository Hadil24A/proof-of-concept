document.addEventListener('DOMContentLoaded', function() {

    // Open popup
  
    document.querySelectorAll('.openPopup').forEach(function(button) {
      button.addEventListener('click', function() {
        let popupId = button.getAttribute('data-popup-id')
        let popupElement = document.getElementById(popupId)
  
        // Scroll beahviour smooth toevoegen 

        // View transition
  
        if (document.startViewTransition) {
          document.startViewTransition(function () {
            popupElement.classList.toggle('active')
          })

        } else {
          popupElement.classList.toggle('active')      
        }
      })
    })
  
    // Close popup
  
    document.querySelectorAll('.closePopupButton').forEach(function(button) {
      button.addEventListener('click', function() {
        button.closest('.mobilePopup').classList.remove('active')
  
        // View transition
  
        if (document.startViewTransition) {
          document.startViewTransition(function () {
            popupElement.classList.remove('active')
          })

        } else {
          popupElement.classList.remove('active')
        }
      })
    })
  })
  