function addtocart() {
    if (JSON.parse(window.localStorage.getItem('order')) === null) {
        window.localStorage.setItem('order', JSON.stringify({"cart": []}))
    }

    let productid = window.location.hash.split('/')[1].split('_')[1]
    let locStor = JSON.parse(window.localStorage.getItem('order'))
    let value = locStor.cart
    value.push([parseInt(productid),parseInt(document.getElementById(productid).innerHTML.substring(9))])
    locStor.cart = value
    window.localStorage.setItem('order', JSON.stringify(locStor))
    let tovars = document.getElementById('countofproducts')
    tovars.innerText = JSON.parse(window.localStorage.getItem('order')).cart.length
    console.log(window.localStorage)

    let price= document.getElementById('price')
    let cart = JSON.parse(window.localStorage.getItem('order')).cart
    let fprice=0
    cart.forEach((item)=>{fprice+=item[1]})
    price.innerHTML='$'+fprice

}


function removefromcart(element) {
    let el = document.getElementById(`item_${element}`)
    el.outerHTML = ''

    function findind(id){
        for (i in JSON.parse(window.localStorage.getItem('order')).cart){
            if (JSON.parse(window.localStorage.getItem('order')).cart[i][0]===parseInt(id))
            {return i}

        }return -1
    }

    let locStor = JSON.parse(window.localStorage.getItem('order'))
    let value = locStor.cart

    let index = findind(element)
    if (index > -1) {
        value.splice(index, 1);
    }


    locStor.cart = value
    window.localStorage.setItem('order', JSON.stringify(locStor))
    console.log(window.localStorage)
    let tovars = document.getElementById('countofproducts')
    tovars.innerText = JSON.parse(window.localStorage.getItem('order')).cart.length
    if (JSON.parse(window.localStorage.getItem('order')).cart.length === 0) {
        document.querySelector('main .container .wrapper').innerHTML = (`<div class="item" style="width: 100%"><h2>EMPTY</h2></div>`)
        document.querySelector('#confirmorder').outerHTML = ''
    }
    let price= document.getElementById('price')
    let cart = JSON.parse(window.localStorage.getItem('order')).cart
    let fprice=0
    cart.forEach((item)=>{fprice+=item[1]})
    price.innerHTML='$'+fprice


}


