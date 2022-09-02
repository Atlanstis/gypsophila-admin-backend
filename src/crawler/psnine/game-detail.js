const Crawler = require('../crawler.js');

function getTrophyNum($el) {
  const getNum = (className) => Number($el.find(className).text().substring(1));
  return {
    platinum: getNum('.text-platinum'),
    gold: getNum('.text-gold'),
    silver: getNum('.text-silver'),
    bronze: getNum('.text-bronze'),
    total: getNum('.text-strong'),
  };
}

const urlMethod = ({ id }) => `https://psnine.com/psngame/${id}`;

class GameDetailCrawler extends Crawler {
  constructor(params) {
    super(urlMethod, params);
    this.params = params;
  }

  async analysis() {
    const $ = await this.getcheerio();
    const $box = $('.main').first();
    const $image = $box.find('img');
    const $title = $box.find('h1');
    const platforms = $title
      .find('span')
      .map((i, el) => $(el).text())
      .toArray();
    const versions = $title.find('em').text().replace(/\n/g, '').trim().split(/\s+/);
    const name = $title.text().match(/《(.*?)》/);
    const originalName = $image.attr('alt');
    const $trouphy = $title.next();

    return {
      id: Number(this.params.id),
      linkUrl: urlMethod(this.params),
      imgUrl: $image.attr('src'),
      name: name ? name[1] : originalName,
      originalName,
      platforms,
      versions,
      trouphyNums: getTrophyNum($trouphy),
    };
  }
}

module.exports = GameDetailCrawler;
