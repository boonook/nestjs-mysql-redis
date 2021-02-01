export function appglobal(req, res, next) {
  console.log('函数式中间件');
  next();
}
