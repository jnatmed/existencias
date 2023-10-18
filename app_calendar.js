import { CalendarGenerator } from "./calendar.js";
import { SelectGenerator } from "./selectgenerator.js";

const monthSelect = document.getElementById('monthSelect');
const yearSelect = document.getElementById('yearSelect');

// Genera opciones de mes
SelectGenerator.generateMonthOptions(monthSelect);

// Genera opciones de año desde 2022 hasta 2026
SelectGenerator.generateYearOptions(yearSelect, 2022, 2026);

document.addEventListener('DOMContentLoaded', function() {
    const calendarTable = document.getElementById('calendar');
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');
    const generateButton = document.getElementById('generateButton');

    generateButton.addEventListener('click', function() {
        const selectedMonth = monthSelect.value;
        const selectedYear = yearSelect.value;

        // Vacía la tabla antes de generar un nuevo calendario
        calendarTable.innerHTML = '';

        // Verifica si se seleccionó un mes y un año antes de generar el calendario
        if (selectedMonth && selectedYear) {
            const calendarGenerator = new CalendarGenerator();
            const dateString = `${selectedMonth}-${selectedYear}`;
            calendarGenerator.generateCalendar(dateString);
        } else {
            alert('Por favor, selecciona un mes y un año.');
        }
    });
});
