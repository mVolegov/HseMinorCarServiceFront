import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddRepairRequest() {

    let navigate = useNavigate()

    const [repairRequest, setRepairRequest] = useState({
        carOwnerName: "",
        carOwnerContactInfo: "",
        carName: "",
        carManufactureYear: "",
        carMileage: 0,
        carColor: "",
        carLicensePlateNumber: "",
        appealReason: "",
        declaredWorks: "",
        totalPriceOfWorks: 0
    })

    const {
        carOwnerName,
        carOwnerContactInfo,
        carName,
        carManufactureYear,
        carMileage,
        carColor,
        carLicensePlateNumber,
        appealReason,
        declaredWorks,
        totalPriceOfWorks
    } = repairRequest

    const onInputChange = (e) => {
        setRepairRequest({ ...repairRequest, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/car-service/requests", repairRequest)
        navigate("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
                    <h5 className="text-center m-4">Добавить новую заявку</h5>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="CarOwnerName" className="form-label mt-3">ФИО владельца</label>
                            <input type={"text"} className="form-control" placeholder="Введите ФИО владельца" name="carOwnerName" value={carOwnerName} onChange={(e) => onInputChange(e)}></input>

                            <label htmlFor="CarOwnerContactInfo" className="form-label mt-3">Контактные данные владельца машины</label>
                            <input type={"text"} className="form-control" placeholder="Введите email или телефон" name="carOwnerContactInfo" value={carOwnerContactInfo} onChange={(e) => onInputChange(e)}></input>

                            <label htmlFor="CarName" className="form-label mt-3">Название машины</label>
                            <input type={"text"} className="form-control" placeholder="Введите название машины" name="carName" value={carName} onChange={(e) => onInputChange(e)}></input>

                            <label htmlFor="CarManufactureYear" className="form-label mt-3">Год выпуска машины</label>
                            <input type={"text"} className="form-control" placeholder="1990" name="carManufactureYear" value={carManufactureYear} onChange={(e) => onInputChange(e)}></input>

                            <label htmlFor="CarMileage" className="form-label mt-3">Пробег (.км)</label>
                            <input type={"number"} className="form-control" placeholder="100000" name="carMileage" value={carMileage} onChange={(e) => onInputChange(e)}></input>

                            <label htmlFor="CarColor" className="form-label mt-3">Цвет машины</label>
                            <input type={"text"} className="form-control" placeholder="Желтый" name="carColor" value={carColor} onChange={(e) => onInputChange(e)}></input>

                            <label htmlFor="CarLicensePlateNumber" className="form-label mt-3">Гос. номер</label>
                            <input type={"text"} className="form-control" placeholder="а100а01" name="carLicensePlateNumber" value={carLicensePlateNumber} onChange={(e) => onInputChange(e)}></input>

                            <label htmlFor="AppealReason" className="form-label mt-3">Причина обращения</label>
                            <input type={"text"} className="form-control" placeholder="Введите причину обращения" name="appealReason" value={appealReason} onChange={(e) => onInputChange(e)}></input>

                            <label htmlFor="DeclaredWorks" className="form-label mt-3">Перечень работ</label>
                            {/* <input type={"text"} className="form-control" placeholder="Введите список работ" name="DeclaredWorks"></input> */}
                            <textarea className="form-control" name="declaredWorks" rows="4" cols="50" value={declaredWorks} onChange={(e) => onInputChange(e)}></textarea>

                            <label htmlFor="TotalPriceOfWorks" className="form-label mt-3">Общая стоимость работ (.руб)</label>
                            <input type={"number"} step="0.01" className="form-control" placeholder="20000.00" name="totalPriceOfWorks" value={totalPriceOfWorks} onChange={(e) => onInputChange(e)}></input>
                        </div>
                        <button type="submit" className="btn btn-outline-success">Создать</button>
                        <Link className="btn btn-outline-warning mx-2" to="/">Отмена</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
