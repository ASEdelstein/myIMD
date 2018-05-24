$(document).ready(function() {
    
    $(".form-group").on("submit", function(event) {
      event.preventDefault();
  
      var patient_id = $(this).children(".patients_id").val();
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/patients/" + patient_id
      }).then(function(data) {
        // reload page to display patient in proper column
        location.reload();
      });
  
    });
  });
  