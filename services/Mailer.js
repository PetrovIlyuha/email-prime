const sgMail = require('@sendgrid/mail')
const helpers = require('@sendgrid/helpers')
const keys = require('../config/keys')

class Mailer extends helpers.classes.Mail {
  constructor({ subject, recipients }, content) {
    super()
    this.setFrom('no-reply@email-prime.com')
    this.setSubject(subject)
    this.addHtmlContent(content)
    this.recipients = recipients.map(({ email }) =>
      helpers.classes.EmailAddress.create(email)
    )

    this.setTrackingSettings({
      clickTracking: { enable: true, enableText: true },
    })

    this.addTo(this.recipients)
  }

  async send() {
    sgMail.setApiKey(keys.sendGridKey)
    try {
      return await sgMail.send(this)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = Mailer
