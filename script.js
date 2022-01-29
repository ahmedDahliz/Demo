function changStyle(){
    document.getElementsByTagName('h1')[0].style.backgroundColor = makeRGB(6)
}


function makeRGB(length) {
    var result           = '';
    var characters       = 'ABCDEF0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return '#'+result;
}