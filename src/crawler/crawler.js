const superagent = require('superagent');
const cheerio = require('cheerio');

class Crawler {
  constructor(urlMethod, params) {
    this.url = urlMethod(params);
  }

  async getcheerio() {
    const response = await superagent.get(this.url);
    const html = response.text;
    const $ = cheerio.load(html);
    return $;
  }
}

module.exports = Crawler;
