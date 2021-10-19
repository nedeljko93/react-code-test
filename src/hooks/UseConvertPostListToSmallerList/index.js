const UseConvertPostListToSmallerList = (pageNumber, pageSize, list) => {
  const newList = list.filter((value, index) => {
    if (pageNumber * pageSize > index) {
      return value;
    }
  });
  return { newList };
};

export default UseConvertPostListToSmallerList;
