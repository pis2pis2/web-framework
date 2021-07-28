
import RatingPage from "../../src/pageObjects/RatingPage";
import allureReporter from "@wdio/allure-reporter";
import {beforeEach} from "mocha";

// wdio run ./wdio.conf.ts --spec ho Запуск теста
// npm run report Запуск отчета


describe('Homework_2(front)', async () => {

  beforeEach('Открытие страницы рейтинга', async () => {
    await RatingPage.open();
  });

  it(' Проверка сортировки ТОП-10 лайков', async() => {
    const rating = await RatingPage.ratingLikes;
    console.log(`Какие объекты получили в переменную rating: ${rating}`);


    const likesArray: number[] = [];


    for (let i = 0; i < rating.length; i++) {
      const likes = await rating[i].getText();
      likesArray.push(likes);
    }


    console.log(`Полученный рейтинг лайков: ${likesArray}`);
    const likesSorted = likesArray.sort((a, b) => b-a);
    console.log(`Отсортированный по убыванию рейтинг лайков: ${likesSorted}`);

    allureReporter.startStep('Проверка сортировки ТОП-10 лайков');
    allureReporter.addAttachment('Ожидаемое значение', `[ ${likesSorted.join(', ')} ]`, 'text/plain');
    allureReporter.addAttachment('Фактическое значение', `[ ${likesArray.join(', ')} ]`, 'text/plain');
    expect(likesArray).toEqual(likesSorted);
    allureReporter.endStep();
  });

  it(' Проверка сортировки ТОП-10 дизлайков', async() => {
    const rating = await RatingPage.ratingDislikes;
    console.log(`Какие объекты получили в переменную rating: ${rating}`);


    const dislikesArray: number[] = [];


    for (let i = 0; i < rating.length; i++) {
      const dislikes = await rating[i].getText();
      dislikesArray.push(dislikes);
    }


    console.log(`Полученный рейтинг дизлайков: ${dislikesArray}`);
    const dislikesSorted = dislikesArray.sort((a, b) => b-a);
    console.log(`Отсортированный по убыванию рейтинг дизлайков: ${dislikesSorted}`);

    allureReporter.startStep('Проверка сортировки ТОП-10 дизлайков');
    allureReporter.addAttachment('Ожидаемое значение', `[ ${dislikesSorted.join(', ')} ]`, 'text/plain');
    allureReporter.addAttachment('Фактическое значение', `[ ${dislikesArray.join(', ')} ]`, 'text/plain');
    expect(dislikesArray).toEqual(dislikesSorted);
    allureReporter.endStep();
  });
});
