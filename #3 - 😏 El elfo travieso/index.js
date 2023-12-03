function findNaughtyStep(original, modified) {
  if (original === modified) return '';
  const differentStr = original.length > modified.length ? original : modified;
  const naughtyStep = [...original].reduce((acc, step, idx) => {
    return acc || (step !== modified[idx] ? differentStr[idx] : acc);
  }, null);
  if (!naughtyStep) return modified[original.length];
  return naughtyStep;
}

const original = 'abcd';
const modified = 'abcde';
console.log(findNaughtyStep(original, modified)); // 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // ''

const original4 = 'xxxx';
const modified4 = 'xxoxx';
console.log(findNaughtyStep(original4, modified4)); // 'o'
