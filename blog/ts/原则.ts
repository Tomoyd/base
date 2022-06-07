export {};

// 要求category的值只能是 音乐，影视，热门 其中的一个

type Category = '音乐' | '影视' | '热门';

const cate: Category = '影视';

// 有一个类型的，type属性是再不同的情况下有着不同的类型约束

type Cate<T> = {
  name: string;
  type: T;
};

const movie: Cate<'日剧' | '美剧'> = { name: 'movie', type: '日剧' };

const music: Cate<'华语' | '日语'> = { name: 'music', type: '华语' };

// 从一个数组中获取到其name的UnionType
type Cate1<T extends string> = {
  name: T;
  type: string;
};

function gen<T extends string>(cates: Cate1<T>[]) {
  return cates;
}

const cates = gen([
  {
    name: 'movie',
    type: '1',
  },
  {
    name: 'music',
    type: '2',
  },
  {
    name: 'hot',
    type: '3',
  },
]);

type CateName = typeof cates[number]['name'];
