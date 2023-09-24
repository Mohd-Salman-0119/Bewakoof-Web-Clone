document.querySelector('.mensFun').addEventListener('click', () => {
     const dataSend = 'Mens'
     const send = new URLSearchParams({'category' : dataSend }).toString();
     const url = `/screens/product.html?${send}`
     window.location.href = url
})
document.querySelector('.womenFun').addEventListener('click', () => {
     const dataSend = 'Womens'
     const send = new URLSearchParams({'category' : dataSend }).toString();
     const url = `/screens/product.html?${send}`
     window.location.href = url
})

