// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i


function strRandom() {
    let result       = '';
    let words        = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let max_position = words.length - 1;
        for( i = 0; i < 8; ++i ) {
            position = Math.floor ( Math.random() * max_position );
            result = result + words.substring(position, position + 1);
        }
    return result;
}

console.log(strRandom());
