function displayCurrentAndNextSixDates() {
    // Get the current date
    var currentDate = new Date();

    // Loop to update the text of each button with the current date and the next six dates
    for (var i = 0; i <= 5; i++) {
      // Calculate the date for the current button
      var displayDate = new Date(currentDate);
      displayDate.setDate(currentDate.getDate() + i);

      // Format the date as desired (you can customize this part)
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      var formattedDate = displayDate.toLocaleDateString('en-US', options);

      // Get the button element by its ID
      var button = document.getElementById("dateButton" + i);

      // Update the button text with the formatted date
      button.innerHTML = formattedDate;
    }
  }

  // Call the function to display the current date and the next six dates immediately
  displayCurrentAndNextSixDates();
