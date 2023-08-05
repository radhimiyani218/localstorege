let products= JSON.parse(localStorage.getItem("products")) || [];

const ui =(products)=>{
    document.getElementById("output").innerHTML="";
    products.map((product)=>{
        let main = document.createElement("main")
        main.setAttribute("class","main")

        let div = document.createElement("div")
        div.setAttribute("class","book")
        let img = document.createElement("img")
        img.src=product.img
        img.setAttribute("class","imgeses")
        let title = document.createElement("h2")
        title.innerHTML=product.title
        let price = document.createElement("h3")
        price.innerHTML=product.price
        let add = document.createElement("button")
        add.innerHTML="Add To Cart"
        add.setAttribute("class","buttons")


        div.append(img,title,price,add);
        main.append(div);
        document.getElementById("output").append(main)
    })
}

ui(products);

const productdata = (e) =>{
    e.preventDefault();

    let product = {
        img : document.getElementById("img").value,
        title : document.getElementById("title").value,
        price : document.getElementById("price").value,
        price

    }
    console.log(products);
    products.push(product)
    localStorage.setItem("products",JSON.stringify(products))
    ui(products);
}
document.querySelector("form").addEventListener("submit" ,productdata)