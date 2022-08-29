type Parent = {
  name: string;
};
type Child = {
  name: string;
  age: number;
};
type CreateFunction<T> = (arg: T) => void;
let newChild: CreateFunction<Child> = (child) => {
  console.log(child.age.toFixed());
};
let newParent: CreateFunction<Parent> = (parent) => {
  console.log(parent.name.toLowerCase());
};
newChild = newParent;
// newParent = newChild;

type CreateArray<T> = T[];
let childArray: CreateArray<Child> = [{ name: '1', age: 1 }];
let parentArray: CreateArray<Parent> = [{ name: '1' }];

parentArray = childArray;
