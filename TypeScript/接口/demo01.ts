/**
 * TS核心原则之一是对所具有的结构进行类型检查
 * 接口就是为类型进行命名，为代码定义契约
 */

interface LabelledObj {
  label: string;
  color?: String;
  readonly num?: number;
  //   [key: string]: any;
}

const printLable = (labelledObj: LabelledObj): void => {
  console.log(labelledObj.label);
};

let myObj = { size: 10, label: 'Size 10 Object' };
printLable(myObj);
// printLable({ size: 10, label: 'Size 10 Object' });
printLable({ size: 10, label: 'Size 10 Object' } as LabelledObj);
