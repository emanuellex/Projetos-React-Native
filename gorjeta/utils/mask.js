export default function formatCurrency(value) {
    let digits = value.replace(/\D/g, '')
    if (digits.length < 3) {
        const zeros = '0'.repeat(3 - digits.length)
        digits = zeros + digits
    }
    const decimalPosition = digits.length - 2
    const integerPart = digits.substring(0, decimalPosition)
        .replace(/^0+([0-9]+)/, '$1')
    const decimalPart = digits.substring(decimalPosition)
    return integerPart + "." + decimalPart
}