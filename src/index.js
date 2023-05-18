const func = () => {
  const a = 1;
  const c = 1 + 2 + a;
  const div = document.createElement('div');
  div.innerHTML = c;

  console.log('func', c);
};

func();

console.log(11);
