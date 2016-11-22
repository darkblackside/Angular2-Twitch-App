export class Dictionary<T, U>
{
  keys: Array<T>;
  values: Array<U>;

  public constructor()
  {
    this.keys = new Array<T>();
    this.values = new Array<U>();
  }

  public Get(key: T) : U
  {
    let exportNumber = this.indexOf(key);

    if(exportNumber != -1)
    {
      return this.values[exportNumber];
    }
    else return null;
  }

  public Remove(key: T) : U
  {
    let exportNumber = this.indexOf(key);

    if(exportNumber != -1)
    {
      let returnValue = this.values[exportNumber];
      this.keys.splice(exportNumber, 1);
      this.values.splice(exportNumber, 1);
    }
    else return null;
  }

  public Add(key: T, value: U) : number
  {
    if(this.indexOf(key) == -1)
    {
      this.keys.push(key);
      this.values.push(value);

      return this.keys.length - 1;
    }
    else
    {
      return null;
    }
  }

  private indexOf(key: T)
  {
    for(let i = 0; i < this.keys.length; i++)
    {
      if(this.keys[i] == key)
      {
        return i;
      }
    }

    return -1;
  }
}
