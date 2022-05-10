function contar()
{
    var init = document.getElementById('init')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    res.innerHTML = `<p>Contando...</p>`
    
    for(var i = Number(init.value); i <= Number(fim.value); i += Number(passo.value)) 
    {
        res.innerHTML += `${i} \u{1F449}`
    }
    if(Number(init.value) > Number(fim.value))
        for(var i = Number(init.value); i >= Number(fim.value); i -= Number(passo.value)) 
        {
            res.innerHTML += `${i} \u{1F449}`
        }
    res.innerHTML += `\u{1F3F4}	\u{1F916} robo do bolsonaro`
}