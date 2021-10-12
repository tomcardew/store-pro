export function numberToPriceTag(value: number, digits: number = 2): string {
    let _value = value.toFixed(digits)
    return `$${_value}`
}