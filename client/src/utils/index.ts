import { type currencyFormatterType } from './types'

export function currencyFormatter({ currency, value }: currencyFormatterType) {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		minimumFractionDigits: 2,
		currency,
	})
	return formatter.format(value)
}
