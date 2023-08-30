const somavalores  = require("../api/controllers/teste.js")
it ('soma dois valores', ()=>{
    expect(somavalores(2, 3)).toBe(5);
})