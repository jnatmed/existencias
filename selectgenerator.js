export class SelectGenerator {
    
    static generateMonthOptions(selectElement) {
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];

        for (const month of months) {
            const option = document.createElement('option');
            option.value = month.toLowerCase();
            option.textContent = month;
            selectElement.appendChild(option);
        }
    }

    static generateYearOptions(selectElement, startYear, endYear) {
        for (let year = startYear; year <= endYear; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            selectElement.appendChild(option);
        }
    }
}