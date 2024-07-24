const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ JSL02 ⚠️⚠️⚠️
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    const listItems = goalList.querySelectorAll('li'); //A variable looking at all the list items of the goalList

    let matchFound = false; //By default no matches are found hence why it is set to false
    //Here we check each item of the listItems variable and using an if statment to change matchfound from false to true if any item's
    //text content matches the goalInput
    //Uing a for loop we can easlity go over all the list items 1 by 1 and compare them to the goalInput, and the break exits the function
    //once a match is found
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent === goalInput) {
            matchFound = true;
            break; //we use break to exit the function if match is found or when all items in the list has been looped
        }
    }
    //Now that we have checked if there are any matching items in the list to te goalInput, we write an if statement with 2 actions
    //1. if matchfound equals to true then an alert is issued
    //2. else the goal is appended as a child as normal
    if (matchFound === true) {
        alert("Goal already exists!");
    } else {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        goalList.appendChild(newGoal);
    }
};
// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);
// ⚠️⚠️⚠️ JSL02 ⚠️⚠️⚠️

let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
