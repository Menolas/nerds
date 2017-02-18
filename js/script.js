 var link = document.querySelector(".mail-us .btn");

      var popup = document.querySelector(".modal-content");
      var close = popup.querySelector(".modal-content-close");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
      });