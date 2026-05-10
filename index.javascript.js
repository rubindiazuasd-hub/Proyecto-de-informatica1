document.getElementById('searchButton').addEventListener('click', function() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }

  });
});