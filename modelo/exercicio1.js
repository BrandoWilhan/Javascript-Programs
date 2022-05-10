function verificar()
{
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var res = document.getElementById("res")
    var numero = document.getElementById('sassos')
    var vencidos = document.getElementsByName('radop')
    if(Number(numero.value) == 0 && vencidos[0].checked) 
    {
        alert('voce nao pode ter 0 sassos vencidos')
        img.setAttribute('src', 'acabou.jpeg')
        res.style.textAlign = 'center'
        res.innerHTML = '<p>ACABOU ?</p>'
        res.appendChild(img)
        return 
    }
    else if(Number(numero.value) == 0 && vencidos[1].checked)
    {
        alert('voce nao pode ter 0 sassos')
        img.setAttribute('src', 'acabou.jpeg')
        res.style.textAlign = 'center'
        res.innerHTML = '<p>ACABOU ?</p>'
        res.appendChild(img)
        return 
    }
    else
    {
        res.innerHTML = '<p></p>'
        
        if(Number(numero.value) > 50 && vencidos[0].checked)
        {
            res.innerHTML = '<p>OMG isso e sasso <strong>vencido</strong> pacarai, voce esta bem ma frend ?</p>'
            img.setAttribute('src', 'xuplerwilly.jpeg')
            res.appendChild(img)
        }
        else if(Number(numero.value) > 50 && vencidos[1].checked)
        {
            res.innerHTML = '<p>OMG isso e sasso pacarai, voce esta bem ma frend ?</p>'
            img.setAttribute('src', 'xuplerwilly.jpeg')
            res.appendChild(img)
        }
        else if(Number(numero.value) < 50 && vencidos[0].checked)
        {
            img.setAttribute('src', 'xuplerr.jpeg')
            res.style.textAlign = 'center'
            res.innerHTML += `<p>ALL RIGHT sera servido ${numero.value} sassos <strong>vencidos<strong/></p>`
            res.appendChild(img)
    
        }
        else
        {
            img.setAttribute('src', 'xuplerr.jpeg')
            res.style.textAlign = 'center'
            res.innerHTML += `<p>ALL RIGHT sera servido ${numero.value} sassos</p>`
            res.appendChild(img)
        }
    }
}