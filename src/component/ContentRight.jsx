import React, { useState } from 'react'

export default function ContentRight(props) {
  
    const renderList = () => {
        return props.dangChon.map((it) => {
            return <tr key={it.soGhe}>
                <td>{it.soGhe}</td>
                <td>{it.gia}</td>
                <td><button onClick={() => { cancel(it.soGhe) }} className='cancel'>Hủy</button></td>
            </tr>
        })
    }
    const handleChange=(event)=>{
       props.setInput({...props.input, [event.target.name]: event.target.value})
    }

    const cancel = (soGhe) => {
        let newDangChon = [...props.dangChon]
        let findIndex = props.dangChon.findIndex((it) => {
            return soGhe == it.soGhe
        })
        newDangChon.splice(findIndex, 1)
        props.setDangchon(newDangChon)
    }
    let total=  props.dangChon.reduce((acc, item) => {
        return acc+item.gia
    }, 0)
    return (
        <div>
            <h1>DANH SÁCH GHẾ BẠN CHỌN </h1>
            <div className="loaiGhe">
                <button className='chuaDat'></button>
                <span>Ghế chưa đặt</span>
            </div>
            <div className="loaiGhe">
                <button className='daDat'></button>
                <span>Ghế đã đặt</span>
            </div>
            <div className="loaiGhe">
                <button className='dangChon'></button>
                <span>Ghế bạn đặt</span>
            </div>
            <div className='TinhGia'>
                <table border={1}>
                    <thead >
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá </th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderList()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td >Tổng tiền</td>
                            <td colSpan={2}>
                               {Number(total).toLocaleString()}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <div>
                                    {/* Button trigger modal */}
                                    <button type="button " className="btn btn-primary btn-lg datVe" data-toggle="modal" data-target="#modelId">
                                        Đặt vé
                                    </button>
                                    {/* Modal */}
                                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Thông tin đặt vé </h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <span><b>Họ và tên</b></span>
                                                    <input value={props.input.name} name="name" onChange={handleChange} type="text" />
                                                    <p className='errip'>{props.inputErr.name}</p>
                                                    <span><b>Số điện thoại</b></span>
                                                    <input value={props.input.phone} name="phone" onChange={handleChange} type="text" />
                                                    <p className='errip'>{props.inputErr.phone}</p>
                                                    <span><b>Email</b></span>
                                                    <input value={props.input.email} name="email" onChange={handleChange} type="text" />
                                                    <p className='errip'>{props.inputErr.email}</p>
                                                    <span><b>Khung giờ</b></span>
                                                    <input value={props.input.time} name="time" onChange={handleChange} type="datetime-local" />
                                                    <p className='errip'>{props.inputErr.time}</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary datVe" data-dismiss="modal">Close</button>
                                                    <button onClick={()=>{props.submit()}} type="button"  className="btn btn-primary datVe">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
