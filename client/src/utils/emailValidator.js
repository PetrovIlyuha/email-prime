// eslint-disable-next-line
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (emails) => {
  const invalidEmails = emails
    .split(',')
    .map((item) => item.trim())
    .filter((email) => !emailRegExp.test(email))
    .join(',')
  return (
    invalidEmails.length > 0 &&
    `You gave us some invalid emails. Please check these: ${invalidEmails}`
  )
}
