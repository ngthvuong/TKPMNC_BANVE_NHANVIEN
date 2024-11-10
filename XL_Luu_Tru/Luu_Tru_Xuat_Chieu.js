'use strict'

class Luu_Tru_Xuat_Chieu {
    Lay_Danh_Sach_Xuat_Chua_Chieu = async () => {
        const Phan_Hoi = await fetch("http://localhost:6102/banve/xuatchieu/danhsachchuachieu",{
            method: "GET"
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }

    Lay_Thong_Tin_Xuat_Chieu = async (ID) => {
        const Phan_Hoi = await fetch(`http://localhost:6102/banve/xuatchieu?ID=${ID}`,{
            method: "GET"
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }
}

module.exports = new Luu_Tru_Xuat_Chieu()
