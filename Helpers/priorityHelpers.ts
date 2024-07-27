export const getPriorityClass = (priority: number) => {
    switch (priority) {
        case 0:
            return 'text-success';
        case 30:
            return 'text-warning';
        case 60:
            return 'text-error';
        case 90:
            return 'text-red-800';
        default:
            return '';
    }
};

export const getPriorityLabel = (priority: number) => {
    switch (priority) {
        case 0:
            return 'Low';
        case 30:
            return 'Medium';
        case 60:
            return 'High';
        case 90:
            return 'Extra';
        default:
            return '';
    }
};