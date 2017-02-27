function helloWorld(user, context, callback) {
  console.log('hello,', configuration.NAME);
  user.foo = "bar";
  callback(null, user, context);
}