'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = '首页'
  }

  async ask2() {

    const { request, helper, axios, logger } = this.ctx

    const { message, source } = request.body

    logger.info('requset body===', request.body)

    logger.info('message===', message)

    // 备份token：
    const token = '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'


    const req = {
      // model: 'text-curie-001',
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 1700,
      temperature: 0
    }

    console.log('req ask2===', req)

    let text = ''
    const result = await axios.post('https://api.openai.com/v1/completions', req, {
      timeout: 300000,
      headers: { Authorization: 'Bearer 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' }
    })
      .then(rsp => {
        console.log('pdf file result', rsp)

        if (rsp.choices) {
          text = rsp.choices[0].text
        }
      })
      .catch(err => {
        console.log('pdf file error', err)
      })

    const data = {
      rsp: text
    }

    helper.success(data, 'success')

  }

}

module.exports = HomeController
