export const fromKebabCase = (str:string) => {
    return str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};
export const toKebabCase = (str:string) => {
    return str.toLowerCase().trim().replace(/\s+/g, '-');
};
