type Name<T> = T;
function saySomething<T extends string>(m: Name<T>) {
  return m;
}
let aOut = saySomething('12');
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type Partial<T> = { [P in keyof T]?: T[P] | undefined };
type ReturnString = ReturnType<() => string>;

type Options = Partial<{ name: string }>;

type In<T> = {
  saySome(add: T): T;
};

const sayIn: In<number> = {
  saySome(a: number) {
    return 1;
  },
};
class Animal<T> {
  say(msg: T) {}
}

export {};

const NumericObject = {
  ['123-1']: '冴羽一号',
};

type keys = keyof typeof NumericObject;
