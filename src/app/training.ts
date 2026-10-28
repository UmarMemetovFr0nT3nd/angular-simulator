// Переменные

// Задание 4

let uploadStatus: 'loading' | 'success' | 'error' = 'error';

// Задание 5

let  textFormat: 'uppercase' | 'lowercase' | 'capitalize' = 'capitalize';




//  Интерфейсы

// Задание 6

interface IUser {
  name: string;
  surName: string;
  age?: number;
}

// Здание 7

interface IVipUser extends IUser {
   money: number;
}

// Задание 10

const users: IUser[] = [
  {
    name: 'Muhammad',
    surName: 'Muhammadov',
    age: 25,
  },
  {
    name: 'Ahmad',
    surName: 'Ahmadov',
    age: 29,
  },
  {
    name: 'Farid',
    surName: 'Faridov',
    age: 18,
  },
  {
    name: 'Suleyman',
    surName: 'Suleymanov',
    age: 39,
  },
  {
    name: 'Said',
    surName: 'Saidov',
    age: 29,
  }
]

const filtredUsers: IUser[] = users.filter(user => user.age !== undefined && user.age > 25);

console.log(filtredUsers)




// Функции

// Задание 3

function sum(a: number, b: number): number {
  return a + b
}

console.log(sum(2, 5))

// Задание 8

function changeString(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if(format === 'uppercase') {
    return text.toUpperCase()
  } else if(format === 'lowercase') {
    return text.toLowerCase()
  } else if(format === 'capitalize') {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return text
}

// Задание 9

function removeChar(text: string, charToRemove: string): string {
  return text.replaceAll(charToRemove, '');
}
