const {test} = use('Test/Suite')('Session');

/**@type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Moduls/User');


test('it should return JWT token when session created', () =>{
const user = await User.create({
name: 'Carlos Baraúna',
email: 'teste@hotmail.com',
password: '123456'
})
});
