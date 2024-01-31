import React from 'react'

export default function ContentLeft(props) {

    const addTicket = (soGhe, gia, daDat) => {
        let newDangChon = [...props.dangChon]
        let findIndex = props.dangChon.findIndex((it) => {
            return soGhe == it.soGhe
        })
        if (findIndex == -1) {
            newDangChon.push({soGhe,gia,daDat })
        }
        else {
            newDangChon.splice(findIndex, 1)
        }
        props.setDangchon(newDangChon)
    }

    const renderDSGhe = () => {
        return props.data.map((item) => {
            return <div className='hangGhe' key={item.hang}>
                <button className='ghe ghe'>{item.hang}</button>
                {item.danhSachGhe.map((it) => {
                    let check = props.dangChon.findIndex((checkItem) => { return checkItem.soGhe == it.soGhe })
                    return <button disabled={it.daDat} onClick={() => { addTicket(it.soGhe, it.gia, it.daDat) }} key={it.soGhe} className={`ghe ${check != -1 ? "dangChon" : ""} ${it.daDat ? "active" : ""}`}>{it.soGhe}</button>;
                })}
            </div>
        })
    }

    return (
        <div>
            <h1>ĐẶT VÉ XEM PHIM</h1>
            <h2>Màn hình</h2>
            <div className='screen'></div>
            <div className='chonGhe'>
                {renderDSGhe()}
            </div>
        </div>
    )
}
