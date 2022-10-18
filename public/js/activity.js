const newActivity = async (event) => {
    event.preventDefault();
  
    const date = document.querySelector('#date').value.trim();
    const time_spent = document.querySelector('#time-spent').value.trim();
    const category = document.querySelector('#category').value.trim();
  
    if (date && time_spent && category) {
      const response = await fetch(`/api/${category}`, {
        method: 'POST',
        body: JSON.stringify({ date, time_spent, category }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/feeling');
      } else {
        alert('Failed to log activity');
      }
    }
  };

  document.querySelector('log-activity').addEventListener('submit', newActivity);