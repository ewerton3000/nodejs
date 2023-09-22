process.stdin.on('readable',()=>{
    let variable = process.stdin.read();
    variable = variable.toString().replace('/\n',"")
    variable = variable.replace(/\r/,"");});
