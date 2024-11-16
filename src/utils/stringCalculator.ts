export function add(numbers: string) {
  if (numbers === '') {
    return 0;
  }
  let delimiter = ',';
  if (numbers.startsWith('//')) {
    delimiter = numbers[2];
    numbers = numbers.slice(4);
  }
  numbers = numbers.replace(/\n/g, delimiter);
  const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
