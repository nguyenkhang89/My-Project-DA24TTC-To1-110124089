//Khai báo mảng đối tượng để lưu dữ liệu sản phẩm
/*const productList = [
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
*/
const productList = [
    {
        id: "01",
        name: "Mô hình Gundam RX-78-2",
        price: "550.000",
        image: "../assets/images/gundam-rx78.jpg",
        productLink: "product-detail.html",
        desc: "Mô hình Gundam RX-78-2 là biểu tượng huyền thoại của dòng Gunpla, mang thiết kế cổ điển nhưng vô cùng tinh xảo. Với khớp nối linh hoạt và độ chi tiết cao, đây là lựa chọn hoàn hảo cho cả người mới bắt đầu và những nhà sưu tầm lâu năm muốn tái hiện lại những trận chiến kinh điển trong vũ trụ Gundam."
    },
    {
        id: "02",
        name: "Mô hình Gundam Barbatos",
        price: "450.000",
        image: "../assets/images/gundam-barbatos.jpg",
        productLink: "product-detail.html",
        desc: "Gundam Barbatos sở hữu vẻ ngoài gai góc và mạnh mẽ đặc trưng từ series Iron-Blooded Orphans. Mô hình này nổi bật với khung xương cơ khí chi tiết, cho phép tạo hình nhiều tư thế chiến đấu linh hoạt. Một món đồ chơi lắp ráp không thể thiếu cho những ai yêu thích phong cách robot thực dụng và bền bỉ."
    },
    {
        id: "03",
        name: "Figure Pokemon Pikachu",
        price: "250.000",
        image: "../assets/images/pokemon-pikachu.jpg",
        productLink: "product-detail.html",
        desc: "Figure Pikachu đáng yêu với biểu cảm sống động, là người bạn đồng hành không thể thiếu của mọi fan hâm mộ Pokemon. Được làm từ chất liệu nhựa cao cấp, mô hình giữ được màu sắc tươi sáng và độ bền theo thời gian, rất thích hợp để trang trí bàn làm việc hoặc làm quà tặng ý nghĩa."
    },
    {
        id: "04",
        name: "Figure Pokemon Mewtwo",
        price: "350.000",
        image: "../assets/images/pokemon-mewtwo.webp",
        productLink: "product-detail.html",
        desc: "Mewtwo - Pokemon huyền thoại hệ Siêu linh được tái hiện mạnh mẽ trong phiên bản Figure này. Với tư thế đứng uy nghiêm và các đường nét được điêu khắc tỉ mỉ, sản phẩm toát lên vẻ quyền năng khó cưỡng, xứng đáng là tâm điểm trong bộ sưu tập Pokemon của bất kỳ huấn luyện viên nào."
    },
    {
        id: "05",
        name: "Mô hình Gundam Wing Zero",
        price: "1.200.000",
        image: "../assets/images/gundam-wing.jpg",
        productLink: "product-detail.html",
        desc: "Gundam Wing Zero nổi bật với đôi cánh thiên thần trắng muốt, tạo nên vẻ đẹp sang trọng và uy lệ. Đây là phiên bản cao cấp với chất liệu nhựa tốt nhất, decal sắc nét và khả năng chuyển đổi hình dạng mượt mà, mang đến trải nghiệm lắp ráp đỉnh cao và giá trị trưng bày vượt trội cho người chơi."
    },
    {
        id: "06",
        name: "Figure Pokemon Charizard",
        price: "400.000",
        image: "../assets/images/pokemon-charizard.jpg",
        productLink: "product-detail.html",
        desc: "Rồng lửa Charizard với đôi cánh rộng mở và ngọn lửa rực cháy trên đuôi là biểu tượng của sức mạnh. Mô hình được thiết kế tinh xảo từ cơ bắp đến thần thái hung hãn, tái hiện hoàn hảo hình ảnh một trong những Pokemon được yêu thích nhất mọi thời đại, khơi dậy niềm đam mê chiến đấu rực cháy."
    },
    {
        id: "07",
        name: "Mô hình Gundam Unicorn",
        price: "650.000",
        image: "../assets/images/gundam-unicorn.webp",
        productLink: "product-detail.html",
        desc: "Mô hình Gundam Unicorn gây ấn tượng mạnh với khả năng thay đổi diện mạo giữa chế độ Unicorn và Destroy mode. Các chi tiết khung trong suốt phát sáng tạo điểm nhấn độc đáo, mang lại cảm giác công nghệ tương lai. Đây là thử thách thú vị và đầy tự hào cho những ai yêu thích sự biến hóa kỳ diệu."
    },
    {
        id: "08",
        name: "Figure Pokemon Lucario",
        price: "300.000",
        image: "../assets/images/pokemon-lucario.png",
        productLink: "product-detail.html",
        desc: "Lucario được biết đến với khả năng cảm nhận hào quang, xuất hiện trong mô hình với tư thế sẵn sàng tung đòn Aura Sphere. Độ hoàn thiện của sản phẩm cực tốt, từ các chi tiết nhỏ trên lông đến ánh mắt kiên định, giúp người sưu tầm cảm nhận rõ rệt tinh thần võ sĩ đạo của dòng Pokemon này."
    },
    {
        id: "09",
        name: "Mô hình Gundam Exia",
        price: "480.000",
        image: "../assets/images/gundam-exia.webp",
        productLink: "product-detail.html",
        desc: "Gundam Exia với thiết kế thanh mảnh, tập trung vào tốc độ và cận chiến. Mô hình đi kèm với bộ GN Sword và các lưỡi kiếm laser đặc trưng, cho phép người dùng tự do sáng tạo những tư thế hành động cực ngầu. Một sản phẩm tuyệt vời đại diện cho dòng Gundam 00 hiện đại và tinh tế."
    },
    {
        id: "10",
        name: "Figure Pokemon Rayquaza",
        price: "500.000",
        image: "../assets/images/pokemon-rayquaza.jpg",
        productLink: "product-detail.html",
        desc: "Rayquaza - rồng thần bầu trời được tái hiện trong dáng vẻ uốn lượn uyển chuyển nhưng đầy quyền lực. Với chiều dài ấn tượng và lớp sơn bóng bẩy, mô hình này mô phỏng chân thực vẻ ngoài thần thánh của Pokemon cai trị tầng bình lưu, là một món quà vô giá cho những fan hâm mộ dòng Pokemon huyền thoại."
    }
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
    productLink.setAttribute("href", hyperLink + "?id="+id);
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
