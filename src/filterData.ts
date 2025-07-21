import { Column } from './models/Column';
import { SortDirection } from './models/SortDirection';

const glue = '-=-';

function getValueAsString<T>(value: T): string {
    if (value === null || value === undefined) {
        return '';
    }

    if (typeof value === 'object') {
        return Array.isArray(value)
            ? value.join(glue) // arbitrary separator for comparisons
            : value instanceof Date
            ? value.toISOString()
            : JSON.stringify(Object.values(value).join(glue));
    }

    return String(value);
}

export function filterData<T>(
    data: T,
    searchTerm: string,
    sortDirection: SortDirection,
): Record<string, any>[] {
    let workingData = JSON.parse(JSON.stringify(data)) as Record<string, string>[];

    if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        workingData = workingData.filter((item: any) =>
            getValueAsString<T>(item).toLowerCase().includes(lowerSearchTerm),
        );
    }

    if (sortDirection.column) {
        const { column, direction } = sortDirection;
        workingData = workingData.sort((a, b) => {
            const aValue = a[column];
            const bValue = b[column];

            // Handle undefined/null values
            if (aValue == null && bValue == null) return 0;
            if (aValue == null) return direction === 'asc' ? -1 : 1;
            if (bValue == null) return direction === 'asc' ? 1 : -1;

            // Compare as strings for consistency
            const aStr = getValueAsString(aValue).toLowerCase();
            const bStr = getValueAsString(bValue).toLowerCase();

            if (aStr < bStr) return direction === 'asc' ? -1 : 1;
            if (aStr > bStr) return direction === 'asc' ? 1 : -1;
            return 0;
        });
    }

    return workingData;
}