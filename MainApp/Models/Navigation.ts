import { NavigationPoint } from './NavigationPoint';

export class Navigation
{
  public NavigationName: string;
  public Navipoints: Array<NavigationPoint>;

  public constructor(name: string)
  {
    this.NavigationName = name;
    this.Navipoints = new Array<NavigationPoint>();
  }
}
