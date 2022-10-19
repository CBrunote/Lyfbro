const newFeeling = async (event) => {
    event.preventDefault();
  
    const feeling_name = document.querySelector('#feeling-name').value.trim();
  
    if (feeling_name) {
      const response = await fetch(`/api/feeling`, {
        method: 'POST',
        body: JSON.stringify({ feeling_name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to log feeling');
      }
    }
  };

  document.querySelector('.log-activity').addEventListener('submit', newFeeling);