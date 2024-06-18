
document.addEventListener('DOMContentLoaded', function() {

 
    const searchInput = document.getElementById('search-input');
    const elements = document.querySelectorAll('.element');
  
   
    searchInput.addEventListener('input', function(event) {
      const searchTerm = event.target.value.toLowerCase().trim();
  
      
      elements.forEach(function(element) {
        const symbol = element.querySelector('.symbol').textContent.toLowerCase();
  
        
        if (symbol.includes(searchTerm)) {
          element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      });
    });
  
  });
  