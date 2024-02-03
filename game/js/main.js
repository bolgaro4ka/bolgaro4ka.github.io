mf = document.getElementsByTagName('textarea')[0]
mf.value = `GMD v.0.2.1\n`

cmd = {
    from_user: [],
    from_game: [],
    all: []
}

window.folder = ['B:']
window.username=''
document.addEventListener('keypress', (e) => {
})

mf.addEventListener('keypress', (e) => {
    console.log(e.key)
    if (e.key == 'Enter') {
        cmd.from_user.push(mf.value.split('\n')[mf.value.split('\n').length - 1])
        console.log(cmd.from_user)
            if (cmd.from_user[cmd.from_user.length - 1] == 'help'){
                mf.value += '\n] crerateuser <name> - create new user\n  cat <fileName> - open file\n  cd <folder> - go to directory\n  dir - the folder you are in\n  start <username> <password> - login to user'
                cmd.from_game.push('helpMSG')
                
            }
            else if (cmd.from_user[cmd.from_user.length - 1] == 'dir'){
                mf.value += `\n] You are in ${folder.join('\\')}`
                if (window.folder.join('') == 'B:'){
                    mf.value += `\n  syspass.txt  |  3301 bit  `
                }


                cmd.from_game.push(`\n] You are in ${folder.join('\\')}`)
                
            }
            else if ('cat' == cmd.from_user[cmd.from_user.length - 1].split(' ')[0]){
                if (cmd.from_user[cmd.from_user.length - 1].split(' ')[1] == 'syspass.txt'){   
                    mf.value += '\n] Encode pass: eW91YXJlZ29vZGJveQ=='
                    cmd.from_game.push('Encode pass: eW91YXJlZ29vZGJveQ==')
                }
                
            }
            else if ('cd' == cmd.from_user[cmd.from_user.length - 1].split(' ')[0]){
                window.folder.push(cmd.from_user[cmd.from_user.length - 1].split(' ')[1])
                mf.value += `\n] Sucsess!`
                cmd.from_game.push('Encode pass: ')
                
            }
            else if ('createuser' == cmd.from_user[cmd.from_user.length - 1].split(' ')[0]){
                if (cmd.from_user[cmd.from_user.length - 1].split(' ')[1]){
                    window.username = cmd.from_user[cmd.from_user.length - 1].split(' ')[1]
                    mf.value +=`\n] New user ${window.username} created! He used system password`
                    cmd.from_game.push('Crur')
                }
                else {mf.value += `\n] Missing argument! Enter "help" for help`}
                
            }
            else if ('start' == cmd.from_user[cmd.from_user.length - 1].split(' ')[0]){
                if (cmd.from_user[cmd.from_user.length - 1].split(' ')[1] == window.username && cmd.from_user[cmd.from_user.length - 1].split(' ')[2] == 'youaregoodboy'){
                mf.value +=`\n] Fhank you for playing, ${window.username}! Game by Bolgaro4ka`
                cmd.from_game.push('Crur')
            }
                else {mf.value += `\n] You can create a new user with the command "createuser".`}
                
            }
            else{
                mf.value += '\n] Unknown command!'
                console.log('createuser' == cmd.from_user[cmd.from_user.length - 1].split(' ')[0])
                
            }
        }
    })

document.body.addEventListener('keydown', (e) => {
    if (e.key == "ArrowUp") {
        e.preventDefault()
        mf.value += cmd.from_user[cmd.from_user.length - 1]

        return
    }
    else if (e.key == "Backspace") {
        if ((mf.value)[mf.value.length - 1] == '\n') {
            e.preventDefault()
        }
    }
    else if (e.key == "ArrowLeft") {
        if ((mf.value)[mf.value.length - 1] == '\n') {
            e.preventDefault()
        }
    }
})

//mf.addEventListener('input', (e)=>{
//console.log(mf.value)
//    cmds = mf.value.split('\n')
//    console.log(cmds[-1])
//})
