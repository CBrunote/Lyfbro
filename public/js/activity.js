var userData = JSON.parse(localStorage.getItem("User"))
var userID = userData.id

const newActivity = async (event) => {
  console.log('Button Pressed') 
  event.preventDefault();

  
    const date = document.querySelector('#date').value.trim();
    const epochTime = new Date(date).getTime()
    const timeStamp = epochTime / 1000
    const time_spent = document.querySelector('.time-spent').value.trim();
    const categoryId = document.querySelector('#category').value.trim();
    const feeling_name = document.querySelector('#feeling-name').value.trim();
  
    const time_spentInt = parseInt(time_spent)
    const categoryIdInt = parseInt(categoryId)
    const feeling_nameInt = parseInt(feeling_name)

    const category = async function (categoryId) {
      if (categoryId == 1) {
        return 'mindfulness'
      } 
      if (categoryId == 2) {
        return 'strength'
      }
      if (categoryId == 3) {
        return 'cardio'
      } 
    } 
    
    const categoryName = await category(categoryId)    
    console.log(timeStamp, time_spentInt, categoryIdInt, feeling_nameInt, categoryName, userID)

    if (timeStamp && time_spentInt && categoryIdInt && feeling_nameInt) {
      console.log('it worked')
      const response = await fetch(`/api/${categoryName}`, {
        method: 'POST',
        body: JSON.stringify({
          "date": timeStamp,
          "time_spent": time_spentInt,
          "category_id": categoryIdInt,
          "feeling_id": feeling_nameInt,
          "user_id": userID,
      }),
        headers: {
          'Content-Type': 'application/json',
        },

      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/');
        alert('You Successfully logged your activity!');
      } else {
        alert('Failed to log activity');
      }
    }
  };

document.querySelector('.log-activity').addEventListener('click', newActivity);