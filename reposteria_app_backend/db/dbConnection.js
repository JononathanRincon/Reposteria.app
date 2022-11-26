const username = 'JonathanRincon'
const pass = 'DetlF8qI25pxtIY4'
const dataBase = 'PanaderiaCaldas'
const stringConn = `mongodb+srv://${username}:${pass}@cluster0.9iiqhkd.mongodb.net/${dataBase}?retryWrites=true&w=majority`
module.exports =  { stringConn } ;
// module.exports =  stringConn  ; //exportacion por defecto
