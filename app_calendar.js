import { CalendarGenerator } from "./calendar.js";
import { SelectGenerator } from "./selectgenerator.js";

const monthSelect = document.getElementById('monthSelect');
const yearSelect = document.getElementById('yearSelect');

// Genera opciones de mes
SelectGenerator.generateMonthOptions(monthSelect);

// Genera opciones de año desde 2022 hasta 2026
SelectGenerator.generateYearOptions(yearSelect, 2022, 2026);

function mostrarCalendario(){
    const calendarTable = document.getElementById('calendar');
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
}

document.addEventListener('DOMContentLoaded', function() {
    
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');

    // Obtener la fecha actual
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    // Establecer las selecciones por defecto en los elementos <select>
    monthSelect.value = currentMonth.toLowerCase();
    yearSelect.value = currentYear;
    mostrarCalendario();

    monthSelect.addEventListener('change', function() {
        mostrarCalendario();
    });
    yearSelect.addEventListener('change', function() {
        mostrarCalendario();
    });

});
