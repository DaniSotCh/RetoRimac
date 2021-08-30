export function validInputClass(value: string) {
    if (value != null && value !== '') {
        return true;
    } else {
        return false;
    }
}
export function formatToCurrency(amount: string) {
    if (amount === '' || amount === null) {
        amount = '0';
    }
    return parseFloat(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
export const formatValidInputClass = (valid: boolean) => (valid ? '' : 'input-error');