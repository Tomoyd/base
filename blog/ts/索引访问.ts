type Gender = ['男', '女', '其他'];

type Index = Gender[number]; // type Index = "男" | "女" | "其他"

type Person = {
  name: string;
  gender: Gender;
};

type PIndex = Person['gender']; //type PIndex = ["男", "女", "其他"]

//  结合typeof

const books = [
  {
    name: '111',
    some: '00',
  },
  {
    name: '22',
    some: '00',
  },
];

type BookNameType = typeof books[number]['name']; //type BookNameType = string
export {};
