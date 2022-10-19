const validaEmail = require('./validateEmail');
test('email juansosa@gmail.com -> true', ()=>{
    expect(validaEmail.isValidEmail('juansosa@gmail.com')).toBe(true) 
});

test('email sdsd -> false', ()=>{
    expect(validaEmail.isValidEmail('sdsd')).toBe(false) 
});
