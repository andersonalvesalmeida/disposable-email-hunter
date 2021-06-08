import  emailValidator from 'deep-email-validator'

(async () => {
  console.log(await emailValidator('teste@mailinator.com'))
})()