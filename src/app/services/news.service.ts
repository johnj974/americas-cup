import { Injectable } from '@angular/core';
import { NewsCard } from '../models/newscard.model';

@Injectable({ providedIn: 'root' })
export class NewsService {
  newsList: NewsCard[] = [
    new NewsCard(
      'assets/images/new-zealand-boat.jpg',
      'New Zealand Progress',
      'New Zealand progress easily, Remaining boats to fight for a place in the final. ',
      '-Joe Harrington'
    ),
    new NewsCard(
      'assets/images/american-boat.jpg',
      'Patriot Capsize',
      'The American boat Patriot capsizes, All crew members uninjured. Major repairs underway',
      '-Kevin Cashell'
    ),
    new NewsCard(
      'assets/images/uk-boat3.jpg',
      'UK Revival',
      'Ineos team UK start poorly, Unable to adapt to the changing conditions, Major improvements required.',
      '-Sounita Son'
    ),
    new NewsCard(
      'assets/images/italy2-boat.jpg',
      'Italian Masterclass',
      'Prada Pirelli Lunna Rosa take a commanding four race lead in the Prada Cup final to maintain their charge for a final spot.',
      '-Pietro Pielso'
    ),
    new NewsCard(
      'assets/images/americas-bow.jpg',
      'Prada Cup',
      'Ineos team Uk have it all to do after two disappointing days on the water with Prada Pirelli Lunna Rosa opening up a lead.',
      '-Ludo Motoscafo'
    ),
    new NewsCard(
      'assets/images/new-zealand-boat2.jpg',
      'American Cup',
      'Who will contest the final with Emirates team New Zealand.',
      '-Brendan Murray'
    ),
  ];
}
