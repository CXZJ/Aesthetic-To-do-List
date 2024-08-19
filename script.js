document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  function addTask() {
    const taskValue = taskInput.value.trim();
    
    if (taskValue === '') return; // Prevent adding empty tasks

    const li = document.createElement('li');
    const taskContainer = document.createElement('div');

    const taskText = document.createElement('h3')
    taskText.textContent = taskValue;

    taskContainer.appendChild(taskText);

    // Create Complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', () => {
      li.classList.toggle('completed');
      
      if (completeButton.textContent == 'Complete') {
        completeButton.textContent = 'Undo';
      } else {
        completeButton.textContent = 'Complete';
      }
    });

    // Add the complete button to the list item
    taskContainer.appendChild(completeButton);
    
    li.appendChild(taskContainer)
    taskList.appendChild(li);
    taskInput.value = ''; // Clear input field
  }

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  window.addTask = addTask; // Expose addTask to global scope
});
