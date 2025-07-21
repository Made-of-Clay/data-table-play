import { Column } from './models/Column';

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
    columns: Column[],
): Record<string, any>[] {
    let workingData = JSON.parse(JSON.stringify(data));

    if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        workingData = workingData.filter((item: any) =>
            getValueAsString<T>(item).toLowerCase().includes(lowerSearchTerm),
        );
    }

    return workingData;
}