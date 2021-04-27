
var totalPrice = Number(node("#total_price").innerHTML);
function accountTotalPrice() {
    let totalRoom = Number(node("#total_room").value);
    const dateCurrent = new Date();
    const date1 = new Date(node("#ngay_nhan").value);
    const date2 = new Date(node("#ngay_tra").value);
    if (dateCurrent.getTime() < date1.getTime() || dateCurrent.getTime() < date2.getTime()) {

        if (node("#ngay_nhan").value !== "" && node("#ngay_tra").value !== "") {
            if (date2 > date1 && dateCurrent.getTime() < date2.getTime()) {
                let totalDate = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
                if (totalDate == 0) {
                    totalDate = 1;
                }
                node("#info_price").innerHTML = `<div class="d-flex justify-content-between">
                                                        <p>Tổng số ngày: </p>
                                                        <p><span class="total_number">${totalDate} </span> x <span class="total_price_item">${totalPrice} </span> <span class=""> đ </span> </p>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <p>Tổng số phòng: </p>
                                                        <p><span class="total_number">${totalRoom} </span> x <span class="total_price_item">${totalPrice} <span class=""> đ </span> </span> </p>
                                                        <!-- <input type="hidden" name="total_price"> -->
                                                    </div>`;
                
                totalPriceAll = totalPrice * totalDate * totalRoom;
                
                node("#total_price").innerHTML = totalPriceAll;
            } else {
                alert("Chọn ngày trả không hợp lệ!");
                node("#ngay_tra").value = "";
            }

        }

    } else {
        alert("Ngày nhận không hợp lệ");
        node("#ngay_nhan").value = "";
    }
}

node("#ngay_nhan").onchange = () => {
    accountTotalPrice();
}

node("#ngay_tra").onchange = () => {
    accountTotalPrice();
}

node("#total_room").onchange = () => {
    accountTotalPrice();
}