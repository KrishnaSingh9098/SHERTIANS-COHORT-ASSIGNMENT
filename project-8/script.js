const errorLabel = document.querySelector('.error-label');
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');
const appBOXADD = document.querySelector('.app-container');
const quoteElement = document.querySelector('.quote');

// ➕ Create "Add New Task" button
const addNewTask = document.createElement('button');
addNewTask.classList.add('add-task');
addNewTask.innerHTML = 'Add a New Task';
addNewTask.style.marginTop = '20px';
addNewTask.style.padding = '12px 20px';
addNewTask.style.borderRadius = '10px';
addNewTask.style.border = 'none';
addNewTask.style.backgroundColor = '#48a300';
addNewTask.style.color = 'white';
addNewTask.style.fontWeight = '600';
addNewTask.style.cursor = 'pointer';

// Insert the button before quote
appBOXADD.insertBefore(addNewTask, quoteElement);

// 🔁 Handle checkbox click
function handleCheckboxClick(e) {
  const allInputs = [...document.querySelectorAll('.goal-input')];
  const allGoalsAdded = allInputs.every((input) => input.value.trim());

  const container = e.currentTarget.parentElement;

  if (allGoalsAdded) {
    container.classList.toggle('completed');
    updateProgress();
    saveTasksToLocalStorage();
  } else {
    progressBar.classList.add('show-error');
  }
}

// 🧠 Update progress display
function updateProgress() {
  const completedCount = document.querySelectorAll('.goal-container.completed').length;
  const totalGoals = document.querySelectorAll('.goal-input').length;
  const percentComplete = (completedCount / totalGoals) * 100;

  progressValue.style.width = `${percentComplete}%`;
  progressValue.querySelector('span').textContent = `${completedCount}/${totalGoals} Completed`;

  // ✅ Check if all tasks are completed
  if (completedCount === totalGoals && totalGoals > 0) {
    setTimeout(() => {
      alert('🎉 All tasks completed! Restarting...');
      localStorage.clear();
      location.reload();
    }, 1000); // 1 second delay
  }
}

// 💾 Save tasks to localStorage
function saveTasksToLocalStorage() {
  const tasks = [...document.querySelectorAll('.goal-container')].map((container) => ({
    text: container.querySelector('.goal-input').value,
    completed: container.classList.contains('completed')
  }));

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 🔁 Load tasks from localStorage
function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (tasks.length > 0) {
    // Clear the hardcoded HTML tasks if tasks were saved
    document.querySelectorAll('.goal-container').forEach((el) => el.remove());

    tasks.forEach(({ text, completed }) => {
      createTaskElement(text, completed);
    });
  } else {
    // Attach listeners to static (HTML) tasks
    document.querySelectorAll('.goal-container').forEach((container) => {
      const checkbox = container.querySelector('.custom-checkbox');
      const input = container.querySelector('.goal-input');

      checkbox.addEventListener('click', handleCheckboxClick);
      input.addEventListener('focus', () => {
        progressBar.classList.remove('show-error');
      });
      input.addEventListener('input', saveTasksToLocalStorage);
    });
  }

  updateProgress();
}

// 🛠️ Create new task element
function createTaskElement(text = '', completed = false) {
  const newGoalContainer = document.createElement('div');
  newGoalContainer.classList.add('goal-container');
  if (completed) newGoalContainer.classList.add('completed');

  newGoalContainer.innerHTML = `
    <div class="custom-checkbox">
      <img class="check-icon" src="./images/check-icon.svg" alt="check-icon" />
    </div>
    <input class="goal-input" type="text" placeholder="Add new goal..." value="${text}" />
  `;

  appBOXADD.insertBefore(newGoalContainer, addNewTask);

  const newCheckbox = newGoalContainer.querySelector('.custom-checkbox');
  const newInput = newGoalContainer.querySelector('.goal-input');

  newCheckbox.addEventListener('click', handleCheckboxClick);
  newInput.addEventListener('focus', () => {
    progressBar.classList.remove('show-error');
  });
  newInput.addEventListener('input', saveTasksToLocalStorage);
}

// ➕ Handle "Add New Task" button click
addNewTask.addEventListener('click', () => {
  createTaskElement();
});

// ✅ Load tasks on page load
window.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);
