export const numberFormat = (number) => {
  return Intl.NumberFormat().formatToParts(number).map(val => val.value).join('');
}
