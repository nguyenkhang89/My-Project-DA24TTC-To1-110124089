//Khai báo mảng đối tượng để lưu dữ liệu sản phẩm
const productList = [
    {id: "01", name: "Mô hình Gundam RX-78-2", price: "550.000", image: "../assets/images/gundam-rx78.jpg", productLink: "product-detail.html"},
    {id: "02", name: "Mô hình Gundam Barbatos", price: "450.000", image: "../assets/images/gundam-barbatos.jpg", productLink: "product-detail.html"},
    {id: "03", name: "Figure Pokemon Pikachu", price: "250.000", image: "../assets/images/pokemon-pikachu.jpg", productLink: "product-detail.html"},
    {id: "04", name: "Figure Pokemon Mewtwo", price: "350.000", image: "../assets/images/pokemon-mewtwo.webp", productLink: "product-detail.html"},
    {id: "05", name: "Mô hình Gundam Wing Zero", price: "1.200.000", image: "../assets/images/gundam-wing.jpg", productLink: "product-detail.html"},
    {id: "06", name: "Figure Pokemon Charizard", price: "400.000", image: "../assets/images/pokemon-charizard.jpg", productLink: "product-detail.html"},
    {id: "07", name: "Mô hình Gundam Unicorn", price: "650.000", image: "../assets/images/gundam-unicorn.webp", productLink: "product-detail.html"},
    {id: "08", name: "Figure Pokemon Lucario", price: "300.000", image: "../assets/images/pokemon-lucario.png", productLink: "product-detail.html"},
    {id: "09", name: "Mô hình Gundam Exia", price: "480.000", image: "../assets/images/gundam-exia.webp", productLink: "product-detail.html"},
    {id: "10", name: "Figure Pokemon Rayquaza", price: "500.000", image: "../assets/images/pokemon-rayquaza.jpg", productLink: "product-detail.html"}
];

function addProduct(id, name, price, image, hyperLink)
{
    //Tạo một product item
    //1. Tao khung chua 1 item
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col-md-3 col-sm-6");

    //2. Tạo khung chứa hình
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product-image ratio ratio-1x1 overflow-hidden");

    //3. Tạo đối tượng hình ảnh
    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute("class", "img-fluid object-fit-cover h-100");
    //4. Gán hình vào khung
    productImage.appendChild(Image);

    //5. Tạo khung chứa thông tin
     const productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product-info text-center text-truncate");
    //Tạo paragraph 1
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);
  
    //Tạo paragraph 2
    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price);
    productPrice.appendChild(productPriceText);

    
    //Tạo hyperLink
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink);
    productLink.setAttribute("class", "btn btn-outline-info btn-sm mt-auto");

    //gán paragraph 1, 2 và Link vào khung
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);

    //6. Gán khung hình và khung thông tin vào product item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    //Gắn product item vào product list
    document.getElementById("product-list").appendChild(productItem);
}
