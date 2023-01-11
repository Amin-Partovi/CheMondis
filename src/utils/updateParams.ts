const updateParams = (
  searchParams: URLSearchParams,
  param: string,
  value: string
) => {
  searchParams.has(param)
    ? searchParams.set(param, value)
    : searchParams.append(param, value);
  return searchParams;
};
