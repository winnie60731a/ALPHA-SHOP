export const PersonalData = {
  Name: '',
  CardNumber: '',
  Date: '',
  Cvc: '',
}

export function PersonalDataInput(e) {
  const name = e.target.name
  PersonalData[name] = e.target.value
  console.log(PersonalData)
}