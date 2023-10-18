export class CalendarGenerator {

    constructor() {
        this.calendarTable = document.getElementById('calendar');
        this.calendarTitle = document.querySelector('.calendar-title');
    }

    generateCalendar(dateString) {
        const parts = dateString.split('-');
        if (parts.length === 2) {
            const monthName = parts[0].trim();
            const year = parseInt(parts[1]);

            if (!isNaN(year)) {
                const monthMap = {
                    'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3, 'mayo': 4, 'junio': 5, 'julio': 6, 'agosto': 7, 'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11
                };

                const monthNumber = monthMap[monthName.toLowerCase()];

                if (monthNumber !== undefined) {
                    const firstDay = new Date(year, monthNumber, 1).getDay();
                    const daysInMonth = new Date(year, monthNumber + 1, 0).getDate();

                    this.calendarTitle.textContent = `${monthName} ${year}`;

                    // Agregar la fila con los nombres de los días de la semana
                    const daysOfWeekRow = document.createElement('tr');
                    daysOfWeekRow.classList.add('calendar-days');
                    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

                    for (const day of daysOfWeek) {
                        const dayCell = document.createElement('th');
                        dayCell.textContent = day;
                        daysOfWeekRow.appendChild(dayCell);
                    }
                    this.calendarTable.appendChild(daysOfWeekRow);

                    // Crear el calendario de días del mes
                    let day = 1;
                    for (let i = 0; i < 6; i++) {
                        const row = document.createElement('tr');
                        let hasDaysInRow = false; // Bandera para rastrear si hay días en esta fila
                    
                        for (let j = 0; j < 7; j++) {
                            const cell = document.createElement('td');
                            if (i === 0 && j < firstDay) {
                                cell.textContent = '';
                            } else if (day <= daysInMonth) {
                                cell.textContent = day;
                                day++;
                                hasDaysInRow = true; // Se encontró al menos un día en esta fila
                            } else {
                                cell.textContent = '';
                            }
                    
                            row.appendChild(cell);
                        }
                    
                        // Agregar la fila solo si tiene días
                        if (hasDaysInRow) {
                            this.calendarTable.appendChild(row);
                        }
                    }
                } else {
                    alert('Nombre de mes no válido.');
                }
            } else {
                alert('El año debe ser un número válido.');
            }
        } else {
            alert('El formato de fecha debe ser "mes-año" (ejemplo: "octubre-2023").');
        }
    }
}
