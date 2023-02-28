import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewDetailsRepairRequestArchive() {
  const [repairRequest, setRepairRequest] = useState({
    id: "",
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
    status: "",
    createdDate: 0,
    completedDate: 0,
  });

  const { id } = useParams();

  const dateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  };

  useEffect(() => {
    loadRepairRequest();
  }, []);

  const loadRepairRequest = async () => {
    const result = await axios.get(
      `http://localhost:8080/car-service/requests/archive/${id}`
    );
    setRepairRequest(result.data);
  };

  return (
    <div className="container">
      <p className="h4 my-3">Архив</p>

      <div className="row m-3">
        <p className="text-start h4 mb-2">Заявка под ID: {repairRequest.id}</p>
        <p className="text-start h4 mb-2">Статус: {repairRequest.status}</p>

        <div className="col-md-8">
          <fieldset disabled>
            <div className="row g-2 mb-2">
              <div className="col-md-6">
                <label for="completedDate" className="form-label">
                  <strong>Дата создания</strong>
                </label>
                <input
                  type="text"
                  id="completedDate"
                  className="form-control"
                  value={Intl.DateTimeFormat("ru", dateOptions).format(
                    new Date(repairRequest.createdDate)
                  )}
                ></input>
              </div>
              <div className="col-md-6">
                <label for="completedDate" className="form-label">
                  <strong>Дата выполнения</strong>
                </label>
                <input
                  type="text"
                  id="completedDate"
                  className="form-control"
                  value={Intl.DateTimeFormat("ru", dateOptions).format(
                    new Date(repairRequest.completedDate)
                  )}
                ></input>
              </div>
            </div>

            <div>
              <label for="appealReason" className="form-label">
                <strong>Прчина обращения</strong>
              </label>
              <textarea
                type="text"
                id="appealReason"
                className="form-control"
                value={repairRequest.appealReason}
              ></textarea>
            </div>
            <div>
              <label for="declaredWorks" className="form-label">
                <strong>Заявленные работы</strong>
              </label>
              <textarea
                type="text"
                id="declaredWorks"
                rows="15"
                className="form-control"
                value={repairRequest.declaredWorks}
              ></textarea>
            </div>
            <div>
              <label for="totalPriceOfWorks" className="form-label">
                <strong>Общая стоимость работ (.руб)</strong>
              </label>
              <input
                type="text"
                id="totalPriceOfWorks"
                className="form-control"
                value={repairRequest.totalPriceOfWorks}
              ></input>
            </div>
          </fieldset>
        </div>

        <div className="col-md-4">
          <label className="form-label">
            <strong>Данные клиента</strong>
            <ul className="list-group">
              <li className="list-group-item">
                ФИО владельца: {repairRequest.carOwnerName}
              </li>
              <li className="list-group-item">
                Контактные данные: {repairRequest.carOwnerContactInfo}
              </li>
            </ul>
          </label>

          <br></br>

          <label className="form-label">
            <strong>Данные ТС</strong>
            <ul className="list-group">
              <li className="list-group-item">
                Название машины: {repairRequest.carName}
              </li>
              <li className="list-group-item">
                Год выпуска: {repairRequest.carManufactureYear}
              </li>
              <li className="list-group-item">
                Пробег: {repairRequest.carMileage}
              </li>
              <li className="list-group-item">
                Цвет: {repairRequest.carColor}
              </li>
              <li className="list-group-item">
                Гос. номер: {repairRequest.carLicensePlateNumber}
              </li>
            </ul>
          </label>
        </div>
      </div>

      <Link className="btn btn-primary my-2" to={"/archive"}>
        Назад в архив
      </Link>
    </div>
  );
}
