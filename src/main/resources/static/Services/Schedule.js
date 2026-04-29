/**
 * Schedule.js - Handles Calendar and Weekly View logic
 */

// Global State
let currentDate = new Date(); // Actual current date
let viewDate = new Date(currentDate); // The date the user is currently viewing

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Initialize components when the script loads
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    renderMiniCalendar();
    renderScheduleGrid();
}

/**
 * MINI CALENDAR LOGIC
 */
function renderMiniCalendar() {
    const container = document.getElementById('mini-calendar-days');
    const monthTitle = document.getElementById('mini-month-year');

    if (!container || !monthTitle) return;

    container.innerHTML = '';
    monthTitle.innerText = `${monthNames[viewDate.getMonth()]} ${viewDate.getFullYear()}`;

    const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

    // Render empty slots for the start of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        container.innerHTML += `<div></div>`;
    }

    // Render actual days
    for (let i = 1; i <= daysInMonth; i++) {
        const isToday = i === currentDate.getDate() &&
            viewDate.getMonth() === currentDate.getMonth() &&
            viewDate.getFullYear() === currentDate.getFullYear();

        const isSelected = i === viewDate.getDate();

        // Tailwind classes for active/today states
        const activeClass = isSelected
            ? 'bg-[#9b0a12] text-white shadow-md'
            : (isToday ? 'bg-red-50 text-[#9b0a12]' : 'text-gray-600 hover:bg-gray-100');

        container.innerHTML += `
            <button onclick="selectDate(${i})" class="w-8 h-8 mx-auto flex items-center justify-center rounded-lg text-xs font-bold transition-all ${activeClass}">
                ${i}
            </button>
        `;
    }
}

/**
 * MAIN SCHEDULE GRID LOGIC
 */
function renderScheduleGrid() {
    const headerContainer = document.getElementById('day-headers-container');
    const rowsContainer = document.getElementById('time-rows-container');
    const weekDisplay = document.getElementById('current-week-display');

    if (!headerContainer || !rowsContainer) return;

    headerContainer.innerHTML = '';
    rowsContainer.innerHTML = '';

    // Calculate start of week (Sunday) based on viewDate
    const startOfWeek = new Date(viewDate);
    startOfWeek.setDate(viewDate.getDate() - viewDate.getDay());

    // Update the main header title
    weekDisplay.innerText = `${monthNames[startOfWeek.getMonth()]} ${startOfWeek.getFullYear()}`;

    // 1. Render Day Headers (Date and Day labels)
    for (let i = 0; i < 7; i++) {
        const d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        const isSelected = d.toDateString() === viewDate.toDateString();

        headerContainer.innerHTML += `
            <div class="py-4 text-center ${isSelected ? 'bg-red-50/50 rounded-t-xl transition-colors' : ''}">
                <span class="block text-gray-400 text-[10px] font-bold uppercase mb-1">${dayLabels[i]}</span>
                <span class="text-lg font-black ${isSelected ? 'text-[#9b0a12]' : 'text-gray-700'}">${d.getDate()}</span>
            </div>
        `;
    }

    // 2. Render Time Slot Rows
    const times = ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"];

    times.forEach(time => {
        rowsContainer.innerHTML += `
            <div class="py-6 text-right pr-6 text-[10px] font-bold text-gray-300 uppercase">${time}</div>
            <div class="border-t border-gray-50 col-span-7 relative h-full hover:bg-gray-50/50 transition-colors"></div>
        `;
    });
}

/**
 * INTERACTION HANDLERS
 */
window.selectDate = function(day) {
    viewDate.setDate(day);
    renderMiniCalendar();
    renderScheduleGrid();
};

window.changeMonth = function(dir) {
    viewDate.setMonth(viewDate.getMonth() + dir);
    renderMiniCalendar();
    renderScheduleGrid();
};

window.changeWeek = function(dir) {
    viewDate.setDate(viewDate.getDate() + (dir * 7));
    renderMiniCalendar();
    renderScheduleGrid();
};