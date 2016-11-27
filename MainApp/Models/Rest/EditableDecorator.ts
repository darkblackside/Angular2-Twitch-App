function Editable(target: any, key: string)
{
  if(!target.EditableOptions)
  {
    target.EditableOptions = new Array<string>();
  }

  target.EditableOptions.push(key);
}

function EditableIf(ifKey: string)
{
  return function(target: any, key: string)
  {
    if(!target.EditableOptionsIf)
    {
      target.EditableOptionsIf = new Object();
    }

    target.EditableOptionsIf[key] = ifKey;
    target.EditableOptions.push(key);
  }
}

function SetIf(ifKey: string)
{
  return function(target: any, key: string)
  {
    if(!target.SetIf)
    {
      target.SetIf = new Object();
    }

    target.SetIf[key] = ifKey;
  }
}
