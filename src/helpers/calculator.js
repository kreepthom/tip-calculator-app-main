
export const calculator = (vBill, vPeople, discount, vCustom) => {

  if (vPeople !== 0 && vCustom !== 0 && discount !== 0 ) {

    let porcent = vBill * (discount || vCustom) / 100
    let rtAmount = porcent / vPeople
    let plus = eval(`${vBill} + ${rtAmount}`)
    let rtTotal = plus / vPeople

    rtAmount = rtAmount.toFixed(2).toString()
    rtTotal = rtTotal.toFixed(2).toString()

  return ({rtAmount, rtTotal })
  }
  return null;
}
