export const getMonthNumber = (monthName: string) => {
  const monthNumber = new Date(`${monthName} 1 2022`).getMonth() + 1
  const strNumber = String(monthNumber).padStart(2, '0')
  return strNumber
}
