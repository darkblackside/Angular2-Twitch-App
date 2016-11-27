

export class OutputToInput
{
  public ToInput() : Object
  {
    var resource = this;
    var target = new Object();

    if(resource["EditableOptions"])
    {
      for(let editableOption of resource["EditableOptions"])
      {
        if(resource["EditableOptionsIf"] && resource["EditableOptionsIf"][editableOption])
        {
          if(resource[resource["EditableOptionsIf"][editableOption]])
          {
            target[editableOption] = resource[editableOption];
          }
        }
        else
        {
          target[editableOption] = resource[editableOption];
        }
      }
    }

    if(resource["SetIf"])
    {
      for(let setOption of Object.keys(resource["SetIf"]))
      {
        if(resource[resource['SetIf'][setOption]])
        {
          target[setOption] = true;
        }
        else
        {
          target[setOption] = false;
        }
      }
    }

    return target;
  }

  public GetAllEditableProperties()
  {
    return this["EditableOptions"];
  }

  public GetAllNotEditableProperties()
  {
    var result = new Array();

    for(let variable of Object.keys(this))
    {
      if(!this["EditableOptions"] || this["EditableOptions"].indexOf(variable) == -1)
      {
        result.push(variable);
      }
    }

    return result;
  }

  public GetAllProperties()
  {
    return Object.keys(this);
  }

  public IsEditable(variable: string)
  {
    return this["EditableOptions"].indexOf(variable) != -1 && (this["EditableOptionsIf"][variable] == null || this[this["EditableOptionsIf"][variable]]);
  }
}
