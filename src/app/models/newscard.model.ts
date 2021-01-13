export class NewsCard {
  public image: string;
  public title: string;
  public text: string;
  public author: string;

  constructor(image: string, title: string, text: string, author: string) {
    this.image = image;
    this.title = title;
    this.text = text;
    this.author = author;
  }
}
