export const saveObj = (name: string, obj: any) => {
  const itemList = sessionStorage.getItem(name);
  if (itemList != null) {
    const arrayList = JSON.parse(itemList);

    const found = arrayList.filter((item: any) => {
      if (item.id == obj.id) {
        return (item.amount += 1);
      }
    });

    if (found.length == 0) {
      arrayList.push(obj);
    }
    const jsonObject = JSON.stringify(arrayList);
    sessionStorage.setItem(name, jsonObject);
    return;
  } else {
    const arr = [obj];
    const jsonObject = JSON.stringify(arr);
    sessionStorage.setItem(name, jsonObject);
    return;
  }
};
