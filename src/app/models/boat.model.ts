export class Boat {
  public id: string;
  public country: string;
  public name: string;
  public officialName: string;
  public skipper: string;
  public helmsman: string;
  public sponsors: string;
  public imagePath: string;
  public flag: string;

  constructor(
    id: string,
    country: string,
    name: string,
    officialName: string,
    skipper: string,
    helmsman: string,
    sponsors: string,
    imagePath: string,
    flag: string
  ) {
    this.id = id;
    this.country = country;
    this.name = name;
    this.officialName = officialName;
    this.skipper = skipper;
    this.helmsman = helmsman;
    this.sponsors = sponsors;
    this.imagePath = imagePath;
    this.flag = flag;
  }
}
