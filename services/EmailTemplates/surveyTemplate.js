const keys = require('../../config/keys')

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>We would like to hear your opinion!</h3>
          <p>Please do this quick survey:</p>
          <p>${survey.body}</p>
          <div style="display: flex; flex-direction: row; width: 400px; justify-content: space-between; margin: 0 auto;">
            <div>
              <a href="${keys.redirectDomain}/api/surveys/thanks">
                <button style="padding: 10px; border: none; border-radius: 5px; background-color: #50b6bb;">
                  Yes
                </button>
              </a>            
            </div>
            <div>
              <a href="${keys.redirectDomain}/api/surveys/thanks">
                <button style="padding: 10px;border-radius: 5px; border: none; background-color: #EA4C4C; margin-left: 10px;">
                  No
                </button>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}
