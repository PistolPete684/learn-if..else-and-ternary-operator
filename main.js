function saleHotdogs(n){
  // multiply the number of hotdogs by the unit price depending on quantity purchased
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}