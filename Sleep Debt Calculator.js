// Function that returns the number of hours rest for each day of the week.
const getSleepHours = day =>{
    switch (day) {
      case 'Monday':
      return 8;
      break;
      case 'Tuesday':
      return 7;
      break;
      case 'Wednesday':
      return 6;
      break;
      case 'Thursday':
      return 9;
      break;
      case 'Friday':
      return 7;
      break;
      case 'Saturday':
      return 9;
      break;
      case 'Sunday':
      return 9;
      break;}
  }
  
  // We now total up the number of hours rest for the week.
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
  
  // This function is to select the ideal number of rest hours.
  const getIdealSleepHours = () => {
    const idealHours = 9
    return (idealHours * 7)
  };
  
  // We can now print the number of hours rest we have had in the week versus the number of ideal hours rest we are targeting.
  console.log('Number of hours rest this week: ' + getActualSleepHours());
  console.log('Target number of hours rest this week: ' + getIdealSleepHours());
  
  // Now we can calculate sleep debt.
    if (getActualSleepHours === getIdealSleepHours) {console.log('You got the perfect amount of targeted rest this week');
  }
    else if (getActualSleepHours > getIdealSleepHours)
  {console.log('You more rest than was targeted this week');
    }  else {console.log('You did not get enough rest this week.');
  }
  
  
  