// let env = {
//     DEV: 'http://localhost:3004/#/',
//     SIT:'http://www.google.com',

//     // HOSTNAME: 'ubuntu'
//   }
function environment(env){
  switch(env){
    case 'DEV':
     env = 'http://localhost:3004/#/';
     break;
     case 'SIT':
     env = 'http://www.google.com';
     break;
     default:
     env = 'undefined environment'
  }
  return env;
}

  
module.exports = {
  env:environment
}

