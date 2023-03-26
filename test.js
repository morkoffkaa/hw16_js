// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i  Спробуй добити задачу і дописати аргументи, 

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const key = generateKey(3, characters);
console.log(key);

const characters2 = 'abcdefghij';
const key2 = generateKey(15, characters2);
console.log(key2);

