const func = () => {
  const a = 1;
  const c = 1 + 2 + a;
  const div = document.createElement('div');
  div.innerHTML = c;

  console.log('func', c);
};

func();

console.log(module);

if (module.hot) {
  // 是否开启了热更新
  module.hot.accept(); // 接受热更新
}

console.log(3);
