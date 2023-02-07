import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewRepairRequest() {

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
    totalPriceOfWorks: 0,
    status: ""
  })

  const { id } = useParams()

  useEffect(() => {
    loadRepairRequest()
  }, [])

  const loadRepairRequest = async () => {
    const result = await axios.get(`http://localhost:8080/car-service/requests/${id}`)
    setRepairRequest(result.data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">
          <h5 className="text-center m-4">Детали заявки под ID : {repairRequest.id}</h5>

          <div className="card">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b className="m-2">ФИО клиента:</b>
                  {repairRequest.carOwnerName}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Контактные данные клиента:</b>
                  {repairRequest.carOwnerContactInfo}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Название машины:</b>
                  {repairRequest.carName}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Год выпуска машины:</b>
                  {repairRequest.carManufactureYear}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Пробег: (.км)</b>
                  {repairRequest.carMileage}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Цвет кузова:</b>
                  {repairRequest.carColor}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Гос. номер:</b>
                  {repairRequest.carLicensePlateNumber}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Причина обращения:</b>
                  {repairRequest.appealReason}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Заявленные работы:</b>
                  {repairRequest.declaredWorks}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Стоимость работ: (.руб)</b>
                  {repairRequest.totalPriceOfWorks}
                </li>
                <li className="list-group-item">
                  <b className="m-2">Статус:</b>
                  {repairRequest.status}
                </li>
              </ul>
            </div>
          </div>

          <Link className="btn btn-primary my-2" to={"/"}>Назад на главную</Link>
        </div>
      </div>
    </div>
  )
}
