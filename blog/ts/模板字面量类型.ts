type Names = '小明' | '小红';

type Opt = '请' | '告诉';

type OptNames = `${Opt}_${Names}`;
// type OptNames = "请_小明" | "请_小红" | "告诉_小明" | "告诉_小红"
export {};

type ChangeVal<T> = {
  on<P extends string & keyof T>(name: `${P}Change`, cb: (value: T[P]) => void);
};

//

type ChangeMaps<T> = {
  [P in keyof T as `${Uncapitalize<string & P>}Change`]: T[P];
};
