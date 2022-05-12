function render(template, data) {
  const reg = /\{\{\s*\w+\s*\}\}/;
  if (!reg.test(template)) {
    return template;
  }
  const key = reg.exec(template)[0].slice(2, -2).trim();
  template = template.replace(reg, data[key]);
  return render(template, data);
}

console.log(
  render('我是{{name}}，年龄{{age}}，性别{{sex}}', {
    name: 'hu',
    age: 18,
  }),
);
