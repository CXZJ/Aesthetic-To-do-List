document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return; // Prevent adding empty tasks

    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Create Complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Add the complete button to the list item
    li.appendChild(completeButton);
    
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
