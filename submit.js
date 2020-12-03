function findsubmit() {
    if (window.location.hash!=='#order') {
        clearInterval(startfindbutton)
        clearInterval(startfindbutton)
        delete  window.startfindbutton

        return
    }

    let subbut = document.exportform.subbutton

    if (!subbut) {
        subbut = document.exportform.subbutton
    } else {
        subbut.onclick = (event) => {
            event.preventDefault();
            console.log('found adn setting handler')
            let confirmed_order;

            let datatosend = {
                'name': document.exportform.name.value,
                'surname': document.exportform.surname.value,
                'phone': document.exportform.phone.value,
                'address': document.exportform.address.value,
                'cart': JSON.parse(window.localStorage.getItem('order')).cart,
                'price': document.getElementById('price').innerHTML.substring(1)
            }
            console.log(datatosend)
            let trushnostform = false
            for (let i = 0; i < 5; i++) {
                trushnostform = document.exportform[i].validity.valid
                console.log(trushnostform)
                if (!trushnostform) {
                    return alert('incorrect data')
                }
            }
            if (trushnostform) {
                let datagot;
                fetch("https://server-for-okr.herokuapp.com/", {method: 'POST', body: JSON.stringify(datatosend)})
                    //https://aqueous-shelf-54848.herokuapp.com/
                    .then((response) => {
                        console.log(response);
                        return response.json()
                    })
                    .then((data) => {
                        console.log('ID of your order is: ' + data + '\n' + 'https://server-for-okr.herokuapp.com/orders/' + data);
                        datagot = data
                        fetch('https://server-for-okr.herokuapp.com/orders/' + data)
                            .then((response) => {
                                return response.json()
                            }).then((data) => {
                            confirmed_order = data
                            console.log(data)
                            window.localStorage.clear()
                            document.getElementById('price').innerText = '$0'
                            document.getElementById('countofproducts').innerText = 0
                            window.location.hash = '#order/' + confirmed_order.id
                            clearInterval(startfindbutton)
                        })
                    })

            }

        }


        // delete window.subbut
    }

}

try {
    var startfindbutton = setInterval(findsubmit, 100)
    console.log(1, startfindbutton)
    // findsubmit()
} catch (e) {
    delete window.startfindbutton
    var startfindbutton = setInterval(findsubmit, 100)
    console.log(2, startfindbutton)
    // findsubmit()

}
