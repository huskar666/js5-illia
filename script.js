const option = +prompt('Що вам потрібно? Напишіть: 1 - самовивіз; 2 - кур єр; 3 - пошта');

switch(option){
    case 1:
        console.log('Ви зможете забрати товар завтра з 12:00 в нашому офісі');
        break;
    case 2:
        console.log('Кур"єр доставить замовлення завтра з 9:00 до 18:00');
        break;
    case 3:
        console.log('Посилка буде відправлена сьогодні');
        break;
    default:
        console.log('Вам передзвонить менеджер');
}   


const star = +prompt('Скільки зірок готелю вам потрібно?');
switch(star){
    case 1:
        console.log('price = 20$');
        break;
    case 2:
        console.log('price = 30$');
        break;
    case 3:
        console.log('price = 50$');
        break;
    case 4:
        console.log('price = 70$');
        break;
    case 5:
        console.log('price = 120$');
        break;
    default:
        console.log('Такої кількості зірок немає');
}
