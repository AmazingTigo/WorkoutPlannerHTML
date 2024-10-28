let selectedPreset = "Push Pull Legs";
let currentDay = "";


function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
}


function openModal() {
    document.getElementById("exercise-modal").style.display = "block";
    
    const savedExercises = JSON.parse(localStorage.getItem('exercises') || '{}');
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach(day => {
        const textarea = document.getElementById(day);
        textarea.value = savedExercises[day.charAt(0).toUpperCase() + day.slice(1)] || '';
    });
}


function closeModal() {
    document.getElementById("exercise-modal").style.display = "none";
}


function saveExercises() {
    const exercises = {};
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    days.forEach(day => {
        const textarea = document.getElementById(day);
        exercises[day.charAt(0).toUpperCase() + day.slice(1)] = textarea.value;
    });
    
    localStorage.setItem('exercises', JSON.stringify(exercises));
    updateWorkoutDisplay();
    closeModal();
}


function modifyExercise() {
    openModal();
}


function updateWorkoutDisplay() {
    const today = getCurrentDay();
    const savedExercises = JSON.parse(localStorage.getItem('exercises') || '{}');
    
    document.getElementById("today").textContent = today;
    document.getElementById("workout-name").textContent = "Today's Exercises";
    
    const workoutDescription = document.getElementById("workout-description");
    if (savedExercises[today]) {
        workoutDescription.textContent = savedExercises[today];
    } else {
        workoutDescription.textContent = "No exercises added yet. Click the '+' button to add exercises.";
    }
}


function selectPreset(preset) {
    selectedPreset = preset;
    updateWorkoutDisplay();
}


const themeToggle = document.querySelector('#checkbox');

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}


(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
        themeToggle.checked = true;
    } else {
        setTheme('light');
        themeToggle.checked = false;
    }
})();


themeToggle.addEventListener('change', toggleTheme);


document.addEventListener('DOMContentLoaded', function() {
    updateWorkoutDisplay();
});

updateWorkoutDisplay();