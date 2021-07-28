import Page from './page';
import Element from '../elements/Element';

/**
 * Страница рейтинга
 */
class RatingPage extends Page {
  /**
   * Объявление селекторов до элементов
   */
  get ratingLikes() {
    return browser.$$('td.rating-names_item-count__1LGDH.has-text-success');
  }
  get ratingDislikes() {
    return browser.$$('td.rating-names_item-count__1LGDH.has-text-danger');
  }

  open(RatingPage) {
    return super.open(`rating`);
  }
  waitForLoaded() {
    super.waitForLoaded();
    return browser.waitUntil(
      async () => {
        return (await browser.$("td.rating-names_item-count__1LGDH.has-text-success")).isExisting();
      },
      { timeoutMsg: 'Страница не загрузилась' }
    );
  }
}

export default new RatingPage('Страница рейтинга');

