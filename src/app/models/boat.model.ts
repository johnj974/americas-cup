export class Boat {
  public id: string;
  public country: string;
  public name: string;
  public skipper: string;
  public helmsman: string;
  public sponsors: string;
  public imagePath: string;

  constructor(
    id: string,
    country: string,
    name: string,
    skipper: string,
    helmsman: string,
    sponsors: string,
    imagePath: string
  ) {
    this.id = id;
    this.country = country;
    this.name = name;
    this.skipper = skipper;
    this.helmsman = helmsman;
    this.sponsors = sponsors;
    this.imagePath = imagePath;
  }
}
