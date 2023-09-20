document.querySelector('.mensFun').addEventListener('click', () => {
     const dataSend = 'Mens'
     const send = new URLSearchParams({'category' : dataSend }).toString();
     const url = `/temp/product.html?${send}`
     window.location.href = url
})
document.querySelector('.womenFun').addEventListener('click', () => {
     const dataSend = 'Womens'
     const send = new URLSearchParams({'category' : dataSend }).toString();
     const url = `/temp/product.html?${send}`
     window.location.href = url
})
document.querySelector('.addToBack').addEventListener('click', () => {
     const dataSend = 'null'
     const send = new URLSearchParams({'category' : dataSend }).toString();
     const url =   `/addtobag/addtobag.html?${send}`
     window.location.href = url
})
document.querySelector('.goCart').addEventListener('click', () => {
     const dataSend = 'null'
     const send = new URLSearchParams({'category' : dataSend }).toString();
     const url =   `/project.html?${send}`
     window.location.href = url
})
