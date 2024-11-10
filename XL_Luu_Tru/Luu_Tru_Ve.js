'use strict'

class Luu_Tru_Ve {
    Tao_Ve = async (Xuat_Chieu_ID, Ghe_ID) => {
        const data = {
            Xuat_Chieu_ID,
            Ghe_ID
        }
        const Phan_Hoi = await fetch("http://localhost:6102/banve/ve", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const Ket_Qua = await Phan_Hoi.json()
        return Ket_Qua
    }
}

module.exports = new Luu_Tru_Ve()
