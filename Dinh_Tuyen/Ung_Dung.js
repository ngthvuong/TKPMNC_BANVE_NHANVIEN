const express = require("express")
const routes = express.Router()

const XL_Bien_Co_Trang_Chinh = require("../XL_Bien_Co/Bien_Co_Trang_Chinh")
const XL_Bien_Co_Trang_Ban_Ve = require("../XL_Bien_Co/Bien_Co_Trang_Ban_Ve")
const XL_Bien_Co_Trang_Xuat_Chieu = require("../XL_Bien_Co/Bien_Co_Trang_Xuat_Chieu")



routes.use((Yeu_Cau, Phan_Hoi, next) => {
    if (!Yeu_Cau.session.Nguoi_Dung) {
        return Phan_Hoi.redirect("/dang-nhap")
    }
    Phan_Hoi.locals.Nguoi_Dung = Yeu_Cau.session.Nguoi_Dung

    next()
})

routes.get("/", XL_Bien_Co_Trang_Chinh.Man_Hinh_Chinh)

routes.get("/ban-ve", XL_Bien_Co_Trang_Ban_Ve.Man_Hinh_Ban_Ve)
routes.post("/ban-ve", XL_Bien_Co_Trang_Ban_Ve.Man_Hinh_Ban_Ve)
routes.get("/ban-ve/xuat-chieu", XL_Bien_Co_Trang_Ban_Ve.Lay_Thong_Tin_Xuat_Chieu)
routes.post("/ban-ve/tao-ve", XL_Bien_Co_Trang_Ban_Ve.Tao_Ve)

routes.get("/xuat-chieu/danh-sach", XL_Bien_Co_Trang_Xuat_Chieu.Man_Hinh_Tra_Cuu_Xuat_Chieu)
routes.get("/xuat-chieu/:ID", XL_Bien_Co_Trang_Xuat_Chieu.Man_Hinh_Tra_Cuu_Xuat_Chieu_Chi_Tiet)





module.exports = routes