const btn = document.querySelector('button');
btn.onclick = async function () {
  const { chunk } = await import(/* webpackChunkName:"lodash" */ 'lodash-es');
  const result = chunk([3, 5, 6, 7, 87], 2);
  console.log(result);
};
