import { Navigation } from './Navigation';

export class NavigationPoint
{
  public Link: string;
  public Text: string;
  public Image: string;

  public Child: Navigation;

  public constructor(link: string, text: string, image = null)
  {
    this.Link = link;
    this.Text = text;
    this.Image = image;

    this.Child = null;
  }
}
