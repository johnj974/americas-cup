export class Boat {
  public id: string;
  public country: string;
  public name: string;
  public imagePath: string;

  constructor(id: string, country: string, name: string, imagePath: string) {
    this.id = id;
    this.country = country;
    this.name = name;
    this.imagePath = imagePath;
  }
}
