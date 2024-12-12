document.addEventListener("DOMContentLoaded", () => {
    const timeElement = document.getElementById("time");

  
    function updateTime() {
      const now = new Date();
  
      // date
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const dayOfWeek = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();
  
      const formattedDate = `${dayOfWeek} ${month} ${date}`;
  
      // time
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const amPm = hours >= 12 ? 'PM' : 'AM';
      hours = (hours % 12 || 12).toString().padStart(2, '0'); // 12-hour 
  
      const formattedTime = `${hours}:${minutes} ${amPm}`;
  
      // date and time
      timeElement.textContent = `${formattedDate} ${formattedTime}`;
    }
  
    updateTime(); 
    setInterval(updateTime, 60000); // Update every minute
  });

  // Sticky Note drag
  document.addEventListener("DOMContentLoaded", () => {
    const stickyNote = document.querySelector(".sticky-note");
  
    let isDragging = false; 
    let offsetX = 0; 
    let offsetY = 0; 
  
    stickyNote.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - stickyNote.offsetLeft; 
      offsetY = e.clientY - stickyNote.offsetTop;
      stickyNote.style.cursor = "grabbing"; 
    });
  
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const x = e.clientX - offsetX; 
        const y = e.clientY - offsetY; 
        stickyNote.style.left = `${x}px`;
        stickyNote.style.top = `${y}px`;
      }
    });
  
    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false; 
        stickyNote.style.cursor = "grab"; 
      }
    });
  });

// function to open any modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
    modal.style.display = 'block';

    // event listener to close the modal if clicking outside its content
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
}

// function to close any modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

// expand the image clicked
function expandImage(imageElement) {
    const expandedImageView = document.getElementById('expandedImageView');
    const expandedImage = document.getElementById('expandedImage');

    
    expandedImage.src = imageElement.src;
    expandedImageView.style.display = 'block'; 
}

// expanded image view
function closeExpandedImage() {
    const expandedImageView = document.getElementById('expandedImageView');
    expandedImageView.style.display = 'none'; 
}


  
