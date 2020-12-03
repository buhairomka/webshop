import Router from './router.js'

const router = new Router()

window.onhashchange = () => {
    console.log('hashchange')
    const [viewName, endpointName] = router.getState();
    console.log(viewName, endpointName)
    if (JSON.parse(window.localStorage.getItem('order')) === null) {
        window.localStorage.setItem('order', JSON.stringify({"cart": []}))
    }
    let tovars = document.getElementById('countofproducts')
    tovars.innerText = JSON.parse(window.localStorage.getItem('order')).cart.length
    let path = `./views/${viewName}.view.js`
    import  (path)
        .then((module) => {
            module.default(endpointName)
        }).finally(() => {

        if (window.location.hash === '') {

            let el = document.createElement('script')
            el.id = 'ididid'
            el.setAttribute('src', 'slider_config.js')
            el.setAttribute('defer', '')
            document.querySelector("body").appendChild(el)
        } else {
            try {
                document.getElementById('ididid').outerHTML = ''
            } catch (e) {

            }
        }
        if (window.location.hash==='#order') {

            let el1 = document.createElement('script')
            el1.id = 'idid'
            el1.setAttribute('src', 'submit.js')
            el1.setAttribute('defer', '')
            document.querySelector("body").appendChild(el1)
        } else {
            try {
                document.getElementById('idid').outerHTML = ''
                delete window.findsubmit()
                delete window.subbut
                delete window.startfindbutton
            } catch (e) {

            }
        }

    })


}

window.onload = () => {
    console.log('onload')
    const [viewName, endpointName] = router.getState();
    console.log(viewName, endpointName)
    if (JSON.parse(window.localStorage.getItem('order')) === null) {
        window.localStorage.setItem('order', JSON.stringify({"cart": []}))
    }
    let tovars = document.getElementById('countofproducts')
    tovars.innerText = JSON.parse(window.localStorage.getItem('order')).cart.length
    let path = `./views/${viewName}.view.js`
    import  (path)
        .then((module) => {
            module.default(endpointName)
        }).finally(() => {

        if (window.location.hash === '') {

            let el = document.createElement('script')
            el.id = 'ididid'
            el.setAttribute('src', 'slider_config.js')
            el.setAttribute('defer', '')
            document.querySelector("body").appendChild(el)
        } else {
            try {
                document.getElementById('ididid').outerHTML = ''
            } catch (e) {

            }
        }
        if (window.location.hash==='#order') {

            let el1 = document.createElement('script')
            el1.id = 'idid'
            el1.setAttribute('src', 'submit.js')
            el1.setAttribute('defer', '')
            document.querySelector("body").appendChild(el1)
        } else {
            try {
                document.getElementById('idid').outerHTML = ''
                delete window.findsubmit
                delete window.subbut
                delete window.startfindbutton
            } catch (e) {

            }
        }


    })
    let price= document.getElementById('price')
    let cart = JSON.parse(window.localStorage.getItem('order')).cart
    let fprice=0
    cart.forEach((item)=>{fprice+=item[1]})
    price.innerHTML='$'+fprice

}

