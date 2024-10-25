const workoutPresets = {
    "Push Pull Legs": [
      { day: "Monday", workout: "Push Day", description: "Chest, Shoulders, Triceps" },
      { day: "Tuesday", workout: "Pull Day", description: "Back, Biceps" },
      { day: "Wednesday", workout: "Legs Day", description: "Quads, Hamstrings, Calves" },
      { day: "Thursday", workout: "Push Day", description: "Chest, Shoulders, Triceps" },
      { day: "Friday", workout: "Pull Day", description: "Back, Biceps" },
      { day: "Saturday", workout: "Legs Day", description: "Quads, Hamstrings, Calves" },
      { day: "Sunday", workout: "Rest Day", description: "Active Recovery and Stretching" },
    ],
    "Intense Strength": [
      { day: "Monday", workout: "Heavy Upper Body", description: "Bench Press, Overhead Press, Rows" },
      { day: "Tuesday", workout: "HIIT Cardio", description: "High-Intensity Interval Training" },
      { day: "Wednesday", workout: "Heavy Lower Body", description: "Squats, Deadlifts, Lunges" },
      { day: "Thursday", workout: "Functional Strength", description: "Kettlebell and Bodyweight Exercises" },
      { day: "Friday", workout: "Olympic Lifts", description: "Clean and Jerk, Snatch" },
      { day: "Saturday", workout: "Endurance Training", description: "Long-Distance Cycling or Running" },
      { day: "Sunday", workout: "Active Recovery", description: "Light Swimming and Stretching" },
    ],
    "Aesthetic Building": [
      { day: "Monday", workout: "Chest and Triceps", description: "Incline Bench, Flyes, Tricep Extensions" },
      { day: "Tuesday", workout: "Back and Biceps", description: "Pull-Ups, Rows, Curls" },
      { day: "Wednesday", workout: "Legs and Abs", description: "Squats, Leg Press, Crunches" },
      { day: "Thursday", workout: "Shoulders and Arms", description: "Lateral Raises, Shrugs, Arm Supersets" },
      { day: "Friday", workout: "Full Body Hypertrophy", description: "High-Volume Full Body Workout" },
      { day: "Saturday", workout: "Cardio and Core", description: "HIIT and Ab Circuit" },
      { day: "Sunday", workout: "Rest and Posing", description: "Light Stretching and Posing Practice" },
    ],
  };
  
  let selectedPreset = "Push Pull Legs";
  
  function selectPreset(preset) {
    selectedPreset = preset;
    updateWorkout();
  }


const themeToggle = document.querySelector('#checkbox');


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
}

// theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'dark'){
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

// theme
themeToggle.addEventListener('change', function() {
    toggleTheme();
});
  
  function updateWorkout() {
    const today = new Date().toLocaleString('en-us', { weekday: 'long' });
    const todaysWorkout = workoutPresets[selectedPreset].find(w => w.day === today);
  
    document.getElementById("today").textContent = today;
    document.getElementById("workout-name").textContent = todaysWorkout.workout;
    document.getElementById("workout-description").textContent = todaysWorkout.description;
  }
  

  updateWorkout();
  