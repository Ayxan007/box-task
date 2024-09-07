const dragboxes = document.querySelectorAll('.dragBox');
const dropBox = document.getElementById('dropBox');
let draggedElement = {};

dragboxes.forEach(dragBox => {
    dragBox.ondragstart = function(event) {
      draggedElement = event.target;  // Sürüklənən elementi saxlayırıq
      draggedElement.classList.add('dragging');  // Sürüklənən elementi sarı rəngə çevir
    };
    dragBox.ondragend = function() {
        draggedElement.classList.remove('dragging');  // Drag bitdikdə yenidən default mavi rəngə qaytarırıq
        draggedElement = {};  
      };
    });

    dropBox.ondragover = (ev) => ev.preventDefault();

    dropBox.ondrop = function() {
        if (draggedElement) {  
          draggedElement.classList.remove('dragging');
          draggedElement.classList.add('dropped'); 
          this.appendChild(draggedElement);  
        }
      };