'use strict'

const Luu_Tru_Xuat_Chieu = require("../XL_Luu_Tru/Luu_Tru_Xuat_Chieu")
const Luu_Tru_Ve = require("../XL_Luu_Tru/Luu_Tru_Ve")

const Nghiep_Vu_Xuat_Chieu = require("../XL_Nghiep_Vu/Nghiep_Vu_Xuat_Chieu")

const controller = {}

controller.Man_Hinh_Ban_Ve = async (Yeu_Cau, Phan_Hoi) =>{
    const Danh_Sach_Xuat_Chieu = await Luu_Tru_Xuat_Chieu.Lay_Danh_Sach_Xuat_Chua_Chieu()
    const Danh_Sach_Phim = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Phim(Danh_Sach_Xuat_Chieu)
    const Danh_Sach_Ngay_Chieu = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Ngay_Chieu(Danh_Sach_Xuat_Chieu)
    const Danh_Sach_Ca = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Ca(Danh_Sach_Xuat_Chieu)
    const Danh_Sach_Rap = Nghiep_Vu_Xuat_Chieu.Lay_Danh_Sach_Rap(Danh_Sach_Xuat_Chieu)

    return Phan_Hoi.render("Man_Hinh_Ban_Ve", {
        Danh_Sach_Xuat_Chieu: JSON.stringify(Danh_Sach_Xuat_Chieu),
        Danh_Sach_Phim,
        Danh_Sach_Ngay_Chieu,
        Danh_Sach_Ca,
        Danh_Sach_Rap
    })
}

controller.Lay_Thong_Tin_Xuat_Chieu = async (Yeu_Cau, Phan_Hoi) =>{
    try{
        const ID = Yeu_Cau.query.ID
        const Xuat_Chieu = await Luu_Tru_Xuat_Chieu.Lay_Thong_Tin_Xuat_Chieu(ID)
        return Phan_Hoi.json(Xuat_Chieu)
    }catch(error){
        console.log(error)
    }
}

controller.Tao_Ve = async (Yeu_Cau, Phan_Hoi) =>{
    try{
        const {Xuat_Chieu_ID, Ghe_ID} = Yeu_Cau.body
        const Xuat_Chieu = await Luu_Tru_Ve.Tao_Ve(Xuat_Chieu_ID, Ghe_ID)
        return Phan_Hoi.json(Xuat_Chieu)
    }catch(error){
        console.log(error)
    }
}

module.exports = controller