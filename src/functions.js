export const convertTimestampToDate = (timestamp) => {
    const dateObj = new Date(timestamp);
    const year = padWithZero(dateObj.getFullYear());
    const month = padWithZero(dateObj.getMonth() + 1);
    const date = padWithZero(dateObj.getDate());
    return [year, month, date];
}

const padWithZero = (num) => {
    return (num < 10) ? '0' + num : num;
}