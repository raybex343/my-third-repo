const taskInput = document.getElementById('taskInput');
const submitBtn = document.getElementById('submitBtn');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('taskCount');
const clearAll = document.getElementById('clearAll');

let totalTasks = 0;

function updateCount() {
  taskCount.textContent = 'Total Tasks: ' + totalTasks;
}

function addTask() {

  const taskText = taskInput.value;

  if (taskText === '') {
    alert('Please type a task first!');
    return;
  }

const li = document.createElement('li');

li.textContent = taskText;
  
li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('deleteBtn');

deleteBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    taskList.removeChild(li);
    totalTasks--;
    updateCount();
  });

  li.appendChild(deleteBtn);


  taskList.appendChild(li);

  taskInput.value = '';

  totalTasks++;
  updateCount();
}
submitBtn.addEventListener('click', addTask);
