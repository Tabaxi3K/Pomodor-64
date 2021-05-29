'use strict';
import { pomoDoroHandler, longBreakHandler, shortBreakHandler, timeHandler, changeActive } from './timeHandler.js';
import { changeBg } from './Handler/background.js';
import { addNewTask} from './addNewTaskHandler.js';

const startBtn = document.getElementById('start-btn');
const pomoDoro = document.getElementById('pomodoro');
const shortBreak = document.getElementById('short-break');
const longBreak = document.getElementById('long-break');
pomoDoro.addEventListener('click', pomoDoroHandler);
longBreak.addEventListener('click', longBreakHandler);
shortBreak.addEventListener('click', shortBreakHandler);
// start button
startBtn.addEventListener('click', timeHandler);

/*Change background color */
document.getElementsByClassName('time-btn-wrapper')[0].addEventListener('click', changeBg);

// Clear new instance of the class when you change work or break
document.getElementsByClassName('time-btn-wrapper')[0].addEventListener('click', changeActive);

// add new task
document.querySelector('.add-task-container').addEventListener('click', addNewTask);