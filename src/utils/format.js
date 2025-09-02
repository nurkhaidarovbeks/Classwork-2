export function formatKZT(value) {
    const rounded = Math.round(value);
    return `${rounded.toLocaleString('ru-RU')}₸`;
}