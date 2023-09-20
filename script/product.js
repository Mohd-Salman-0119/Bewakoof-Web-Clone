fetch('/temp/fillters.json')
     .then(res => res.json())
     .then(data => {

          filltersFunction(data.filterVanue, '.filterCategory', "Category")
          filltersFunction(data.filtersizes, '.filterSizes', "Sizes")
          filltersFunction(data.filterbrand, '.filterBrand', "Brand")
          filltersFunction(data.filterColors, '.filterColor', "Color")
          filltersFunction(data.filterDesign, '.filterDesigns', "Design")
          filltersFunction(data.filterfit, '.filterFit', "Fit")
          filltersFunction(data.filtersleeve, '.filterSleeve', "Sleeve")
          filltersFunction(data.filterratings, '.filterRatings', "Ratings")
          filltersFunction(data.filterdiscount, '.filterDiscount', "Discount")

     })

function filltersFunction(data, referance, name) {
     const fillterReferance = document.querySelector(referance)

     data.forEach(ele => {
          const option = document.createElement('option');

          if (ele === name) {
               option.value = "none"
          } else {
               option.value = ele
          }

          option.innerHTML = ele
          fillterReferance.append(option)
     });

}

fetch('/home/json/products.json')
     .then(res => res.json())
     .then(data => {

          localStorage.setItem('mensProduct', JSON.stringify(data.mensProduct));
          localStorage.setItem('womensProduct', JSON.stringify(data.womensProduct));


     })


const rcieved = new URLSearchParams(window.location.search);
// const womensRcieved = new URLSearchParams(window.location.search);
const key = rcieved.get('category');


const mensData = JSON.parse(localStorage.getItem('mensProduct')) || []

const womensData = JSON.parse(localStorage.getItem('womensProduct')) || []


if (key === 'Mens') {
     productDataShow(mensData);
     shortByPrice(mensData);
     filterCategorys(mensData)
     fillterBrand(mensData)
     fillterSizes(mensData)
     fillterColor(mensData)
     fillterRating(mensData)
     fillterDesign(mensData)
     fillterDiscount(mensData)
} else if (key === 'Womens') {
     productDataShow(womensData);
     shortByPrice(womensData);
     filterCategorys(womensData)
     fillterSizes(womensData)
     fillterBrand(womensData)
     fillterColor(womensData)
     fillterDesign(womensData)
     fillterRating(womensData)
     fillterDiscount(womensData)
}


function productDataShow(data) {
     const cardContainer = document.querySelector('.product-card-')
     cardContainer.innerHTML = ""
     data.forEach((ele, index) => {
          // console.log(ele);

          let card = document.createElement('div');
          // card.classList.add('swiper-slide')
          card.classList.add('addToBack')
          // card.setAttribute('id', 'bestSellerCard')
          card.classList.add('img100px-radius-all4')

          let image = document.createElement('img');
          image.classList.add('img100px')
          image.classList.add('img100px-radius-4')


          let productDetails = document.createElement('div');
          productDetails.classList.add('producDetails');


          let dFlex = document.createElement('div');
          dFlex.classList.add('d-flex')
          dFlex.classList.add('d-flex-between')

          let producName = document.createElement('div');
          producName.classList.add('product-name');
          producName.classList.add('pd5px')

          let siteName = document.createElement('h3');
          siteName.classList.add('font12px')
          siteName.classList.add('bfk-black')

          siteName.classList.add('right8px')

          let superScript = document.createElement('sup')

          siteName.innerHTML = ele.brand;
          superScript.innerHTML = ` &#174;`
          siteName.appendChild(superScript);



          let producDisc = document.createElement('h2');
          producDisc.classList.add('font10px')
          producDisc.classList.add('shade-gray')

          producDisc.classList.add('right8px')
          producDisc.classList.add('top4px')

          producDisc.innerHTML = ele.name;

          producName.appendChild(siteName);
          producName.appendChild(producDisc);

          let likeHeart = document.createElement('i');
          likeHeart.classList.add('fa-regular')
          likeHeart.classList.add('fa-heart')

          dFlex.append(producName, likeHeart);


          let productPriceBox = document.createElement('div');
          productPriceBox.classList.add('productPriceBox')
          productPriceBox.classList.add('d-flex')
          productPriceBox.classList.add('mr-8px')
          productPriceBox.classList.add('pd5px')


          let discountedPrice = document.createElement('div');
          discountedPrice.classList.add('discountedPrice')
          discountedPrice.classList.add('p-balck')
          discountedPrice.classList.add('font16px')

          discountedPrice.classList.add('font-weight-6')

          let priceWithR = document.createElement('span')
          priceWithR.classList.add('font16px')
          priceWithR.innerHTML = `&#x20B9;`;

          discountedPrice.appendChild(priceWithR);
          discountedPrice.innerHTML = `&#x20B9; ${ele.price}`;


          let actualPriceText = document.createElement('div');
          actualPriceText.classList.add('actualPriceText')
          actualPriceText.classList.add('shade-gray')
          actualPriceText.classList.add('font12px')
          actualPriceText.classList.add('left5px')
          actualPriceText.classList.add('top4px')
          actualPriceText.classList.add('line-through-text')

          actualPriceText.innerHTML = `&#x20B9;${ele.price2}`

          let discountPresent = document.createElement('div');
          discountPresent.classList.add('discountPresent')
          discountPresent.classList.add('discount-green')
          discountPresent.classList.add('font12px')
          discountPresent.classList.add('left5px')
          discountPresent.classList.add('top4px')

          discountPresent.innerHTML = ele.offer

          productPriceBox.append(discountedPrice, actualPriceText, discountPresent);

          productDetails.append(dFlex, productPriceBox);

          image.src = ele.avatar;
          card.append(image, productDetails);

          cardContainer.append(card)

     })
}


function shortByPrice(data) {
     // short by price
     const selected = document.querySelector('.sortPrice');
     selected.addEventListener('change', () => {
          
          const selectedValue = selected.value;
          // alert(selectedValue);
          if (selectedValue === 'HTL') {
               const htl = data.sort((a, b) => {
                    const aNum = Number(a.price);
                    const bNum = Number(b.price);
                    
                    return bNum - aNum;
               })
               productDataShow(htl);
          }
          else if (selectedValue === 'LTH') {
               const lth = data.sort((a, b) => {
                    const aNum = Number(a.price);
                    const bNum = Number(b.price);
                    
                    return  aNum -bNum;
               })
               productDataShow(lth);
          }
          else if (selectedValue === 'popular') {
              const papuler =  data.sort(function (a,b) {
               const aNum = Number(a.price);
               const bNum = Number(b.price);
                    if (aNum > 300) {
                      return -1
                    }
                    if (bNum < 300) {
                      return 1;
                    }
                    else {
                      0;
                    }
                  });
                  productDataShow(papuler);
          }else{
               productDataShow(data);
          }


         
     })

}

function filterCategorys(data){
     const selected = document.querySelector('.filterCategory');

     selected.addEventListener('change', ()=>{
          const selectedValue = selected.value;
          
          if(selectedValue === 'none'){
               productDataShow(data)
          }else{
               console.log(data);
               const fillterCategory = data.filter((ele)=>{
                    return ele.category.toLowerCase() === selectedValue.toLowerCase()
               })
               
               console.log(fillterCategory);
               productDataShow(fillterCategory)
          }

     })
}

function fillterSizes(data){
     const selected = document.querySelector('.filterSizes');

     selected.addEventListener('change', ()=>{
          const selectedValue = selected.value;
          
          if(selectedValue === 'none'){
               productDataShow(data)
          }else{
               console.log(data);
               const fillterCategory = data.filter((ele)=>{
                    return ele.size.toLowerCase() === selectedValue.toLowerCase()
               })
               
               // console.log(fillterCategory);
               productDataShow(fillterCategory)
          }

     })
}

function fillterBrand(data){
     const selected = document.querySelector('.filterBrand');

     selected.addEventListener('change', ()=>{
          const selectedValue = selected.value;
          
          if(selectedValue === 'none'){
               productDataShow(data)
          }else{
               console.log(data);
               const fillterCategory = data.filter((ele)=>{
                    return ele.brand.toLowerCase() === selectedValue.toLowerCase()
               })
               
               // console.log(fillterCategory);
               productDataShow(fillterCategory)
          }

     })
}

function fillterDesign(data){
     const selected = document.querySelector('.filterDesigns');

     selected.addEventListener('change', ()=>{
          const selectedValue = selected.value;
          
          if(selectedValue === 'none'){
               productDataShow(data)
          }else{
               console.log(data);
               const fillterCategory = data.filter((ele)=>{
                    return ele.design.toLowerCase() === selectedValue.toLowerCase()
               })
               
               // console.log(fillterCategory);
               productDataShow(fillterCategory)
          }

     })
}
function fillterRating(data){
     const selected = document.querySelector('.filterRatings');

     selected.addEventListener('change', ()=>{
          const selectedValue = selected.value;
          
          if(selectedValue === 'none'){
               productDataShow(data)
          }else{
               console.log(data);
               const fillterCategory = data.filter((ele)=>{
                    return ele.Ratings.toLowerCase() === selectedValue.toLowerCase()
               })
               
               // console.log(fillterCategory);
               productDataShow(fillterCategory)
          }

     })
}
function fillterDiscount(data){
     const selected = document.querySelector('.filterDiscount');

     selected.addEventListener('change', ()=>{
          const selectedValue = selected.value;
          
          if(selectedValue === 'none'){
               productDataShow(data)
          }else{
               console.log(data);
               const fillterCategory = data.filter((ele)=>{
                    return ele.offer.toLowerCase() === selectedValue.toLowerCase()
               })
               
               // console.log(fillterCategory);
               productDataShow(fillterCategory)
          }

     })
}
function fillterColor(data){
     const selected = document.querySelector('.filterColor');

     selected.addEventListener('change', ()=>{
          const selectedValue = selected.value;
          
          if(selectedValue === 'none'){
               productDataShow(data)
          }else{
               console.log(data);
               const fillterCategory = data.filter((ele)=>{
                    return ele.colr.toLowerCase() === selectedValue.toLowerCase()
               })
               
               // console.log(fillterCategory);
               productDataShow(fillterCategory)
          }

     })
}