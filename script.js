 //before Header Image
    let imageHeaderDiv=document.createElement("div")
    let imageHeader=document.createElement("img")
    imageHeader.className="headerImg"
    imageHeader.src="https://source.unsplash.com/O-Ct1yeWeRo/1600x100";
    
    imageHeaderDiv.append(imageHeader)
    document.body.append(imageHeaderDiv)

    //Header
    let headerDiv=document.createElement("div")
    headerDiv.className="pageHeader";
    headerDiv.innerHTML=`
    <div><h1>MakeYouUp</b></h1></div>
        <div><h5 class="headerPara">Your one stop cosmetics store.</p></div>`
    document.body.append(headerDiv)

    //After Header Image
    let imageHeaderDiv1=document.createElement("div")
    let imageHeader1=document.createElement("img")
    imageHeader1.className="headerImg"
    imageHeader1.src="https://source.unsplash.com/VJ4pn_PSBLo/1600x100";
    imageHeaderDiv1.append(imageHeader1)
    document.body.append(imageHeaderDiv1)

    //Slideshow
    let slideShow=document.createElement("div")
    slideShow.className="slideShow"
    slideShow.innerHTML =`
    <div ><img class="slideshowImage" src=".\\sliderImages\\Spring_SaleDesktopLP24March.jpg" id="slideshowImage" onmouseover="pauseTurn()"  onmouseleave="resumeTurn()" ></div>
        <div  class="previous"><a  onclick="previousTurn()"><i  class="fas fa-chevron-left"></i></i></a></div>
       <div  class="next"><a onclick="nextTurn()"><i  class="fas fa-chevron-right"></i></i></a></div>`
    document.body.append(slideShow)

    //Main-Product 
    let productSection=document.createElement("div")
    productSection.className="productSection"
    let mainBox=document.createElement("div")
    mainBox.className="mainBox"
    let productList=document.createElement("div")
    productList.className="productList"

    //searchBar and Brand Navigation bar
    let brandBox = document.createElement("div");
    brandBox.className="brandBox";
    brandBox.innerHTML =`
    <div ><h5>Featured Brands</p></div>
            <div ><p onclick="changeBrand('nyx')">NYX</p></div>
            <div ><p onclick="changeBrand('clinique')">Clinique</p></div>
            <div ><p onclick="changeBrand('maybelline')">Maybelline</p></div>
            <div ><p onclick="changeBrand('covergirl')">Covergirl</p></div>
            <div ><p onclick="changeBrand('revlon')">Revlon</p></div>
            <div id="searchProduct"><input type="text" class="form-control " placeholder="search"  onkeydown="searchProduct(event)" id="search"></div>
    `
    productSection.append(brandBox)

    //left-list
    let listHeader=document.createElement("h3")
    listHeader.className="listHeader"
    listHeader.innerText="Products"
    let listBox=document.createElement("div")
    listBox.className="listBox"
    listBox.innerHTML=`
    <div class="listItems"  onclick="changeProduct('lipstick')"> Lipstick<img src="icons/lipstick.png" class=icons></div>
               <div class="listItems" onclick="changeProduct('eyeliner')"> Eye liner<img src="icons/eyeliner.png" class=icons></div>
               <div class="listItems" onclick="changeProduct('foundation')"> Foundation<img src="icons/foundation.png" class=icons></div>
               <div class="listItems" onclick="changeProduct('lip_liner')"> Lip liner<img src="icons/lip_liner.png" class=icons></div>
               <div class="listItems" onclick="changeProduct('mascara')"> Mascara<img src="icons/mascara.png" class=icons></div>
               <div class="listItems" onclick="changeProduct('eyebrow')"> EyeBrow<img src="icons/eyebrow.png" class=icons></div>
               <div class="listItems" onclick="changeProduct('eyeshadow')"> Eye shadow<img src="icons/eyeshadow.png" class=icons></div>
               <div class="listItems" onclick="changeProduct('bronzer')"> Bronzer<img src="icons/bronzer.png" class=icons></div>
               <div class="listItems" onclick="changeProduct('blush')"> Blush<img src="icons/brush.png" class=icons></div>`
    productList.append(listHeader,listBox)

    //Right Product-Cards
    let productCards=document.createElement("div")
    productCards.className="productCards"
    mainBox.append(productList,productCards)
    productSection.append(mainBox)
    document.body.append(productSection)

    //Page-Footer
    let footer=document.createElement("div")
    footer.className="pageFooter"
    let div1=document.createElement("div")
    div1.innerText="Developed by Mayuresan"
    let div2=document.createElement("div")
    div2.innerText="Contact:  mayublade@gmail.com"
    footer.append(div1,div2)
    document.body.append(footer)

   //slideshow-logic
   let sliderImg=[".\\sliderImages\\49d4c6a03633349bfac2722394cbade0.gif",".\\sliderImages\\279a2116d1f00502fdbf4061950e5b4b.jpg",".\\sliderImages\\revbanners3.jpg",".\\sliderImages\\ca5d691688159790e67ad8f7598f7f85.jpg",".\\sliderImages\\Spring_SaleDesktopLP24March.jpg"]
   imageTurn=setInterval(turnImage,2000);
   let i=0;
   let pageNo=0;
   slideshowImage=document.querySelector("#slideshowImage")
   function turnImage()
   {    
       if(i > 4) 
       i=0;
       slideshowImage.src=sliderImg[i];
       i++;
   }
   function previousTurn()
   {    
    clearInterval(imageTurn)
       i=i-1;
       if(i < 0) i=4;
       slideshowImage.src=sliderImg[i];
       imageTurn=setInterval(turnImage,2000);
   }
   function nextTurn()
   {
       clearInterval(imageTurn)
   
    i=i+1;
    if(i > 4) i=0;
    slideshowImage.src=sliderImg[i];
    imageTurn=setInterval(turnImage,2000);
   }
   function pauseTurn(){
    clearInterval(imageTurn)
   }
   function resumeTurn()
   {
    imageTurn=setInterval(turnImage,2000);
   }


   //let productCards=document.getElementsByClassName("productCards")[0];
   let searchName=document.getElementById("search")
   let product="lipstick";
   let filteredData=[];

   function changeProduct(name)
   {
       product=name;
       pageNo=0;
       filteredData=[];
       postProduct(originalData);
   }
   function changeBrand(name)
   {
       brand=name;
       pageNo=0;
       filteredData=[];
       brandFilter(brand);
   }

   function searchProduct(e)
   {

       filteredData=[];
       pageNo=0;
       if(e.keyCode === 13)
       {
        let temp=searchName.value;
        searchName.value="";
        searchFilter(temp)
        }
   }

let originalData
 getProduct();
   async function getProduct()
   { productCards.innerHTML =`<h2 class="loading">Loading...</h2>`
    let loadingImage=document.createElement("img")
       loadingImage.src=".\\loadingImage\\Silver-Balls-Swinging.gif";
       loadingImage.style.width="100%"
        productCards.append(loadingImage)
      try{
        let rawData= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        originalData= await rawData.json();
       postProduct(originalData)
      }
      catch(error)
      {
          console.log(error)
          productCards.innerHTML =`<h2>The Product is not found. Please click refresh and try again</h2>`
      }
   }
   function searchFilter(newData)
   {
       const regex = new RegExp(newData ,'gi')
       originalData.forEach(i => {
           if(regex.test(i.name))
           {
               filteredData.push(i)
           }
       });
       if(filteredData.length == 0)
       {
        productCards.innerHTML =`<h2>No products found</h2>`
       }
       else
       listData(filteredData)
   }
   function brandFilter(newData)
   {
    originalData.forEach(i => {
            if(i.brand == newData)
            {
                filteredData.push(i)
            }
        });
        listData(filteredData)
   }
   function postProduct(newData)
   {    productCards.innerHTML='';
        newData.forEach(i => {
            if(i.product_type == product)
            {
                filteredData.push(i)
            }
        });
        listData(filteredData)
    }
        // console.log(data)
        function listData(data)
        {
            productCards.innerHTML ='';
        for(let i=pageNo;i<(pageNo+10);i++)
        {  

            if(i < data.length)
            {
            
          let  productName=data[i].name;
           let productBrand=data[i].brand;
           let productPrice=data[i].price;
           let productDescription=data[i].description;
           let productShades=data[i].product_colors;
            let productImage=data[i].image_link;
           let  productLink=data[i].product_link;
            
         
            productCards.innerHTML +=
            `<div class="card">
                    <div >
                        <img class="cardImage" src=${productImage} onerror="this.src='https://source.unsplash.com/VJ4pn_PSBLo/'">
                    </div>
                    <div class="cardBody">
                        <div class="productName"><h3>${productName}</h3></div>
                        <div class="productBrand"><b>Brand<b>   ${productBrand}</div>
                        <div class="productPrice"><b>$${productPrice}</b></div>
                        <div class="productDescription"><p>${productDescription}</p></div>
                        <div class="productShades">
                            <div ><p>Shades Available:</p></div>
                            <div class="shadesContainer${i} shadesContainer">
                                
                            </div>
                        </div>
                        <div class="productLink"><a href="#">${productLink}</a></div>
                    </div>
               </div>
            `
            let a ="shadesContainer"+i
            let shadesContainer=document.getElementsByClassName(a)[0]
            for(let j=0;j<productShades.length;j++)
            {
               
                let newShade=document.createElement("div")
                newShade.style.backgroundColor=productShades[j].hex_value
                newShade.className="shades";
                shadesContainer.append(newShade)
            }
        }
            
        }
        productCards.innerHTML +=`
            <div class="Buttons">
                    <div ><button class="btn btn-dark" onclick="previousPage()">Previous</button></div>
                    <div ><button class="btn btn-dark" onclick="nextPage()">Next</button></div>
                </div>`
    }
   function previousPage()
   {
      
       if(pageNo >= 10)
       {
       productCards.innerHTML =`<h2 class="loading">Loading...</h2>`
       pageNo -= 10;
       listData(filteredData)
       }
   }
   function nextPage()
   {
       if(pageNo < filteredData.length-11)
       {
       productCards.innerHTML =`<h2 class="loading">Loading...</h2>`
       pageNo += 10;
       listData(filteredData)
       }

   }
