export function validInputClass(value: string) {
    if (value != null && value !== '') {
        return true;
    } else {
        return false;
    }
}
export const formatValidInputClass = (valid: boolean) => (valid ? '' : 'input-error');