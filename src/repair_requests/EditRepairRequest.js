import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Accordion from 'react-bootstrap/Accordion';

export default function EditRepairRequest() {

  let navigate = useNavigate()

  const { id } = useParams()

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
    status: "Нет статуса",
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
    totalPriceOfWorks,
    status
  } = repairRequest

  const onInputChange = (e) => {
    setRepairRequest({ ...repairRequest, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    loadRepairRequest()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/car-service/requests/${id}`, repairRequest)
    navigate("/")
  }

  const loadRepairRequest = async () => {
    const result = await axios.get(`http://localhost:8080/car-service/requests/${id}`)
    setRepairRequest(result.data)
  }

  const notify = () => toast.info("Заявка успешно обновлена!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (
    <div className="container">
      <h5 className="text-center m-4">Изменение заявки</h5>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="row g-3">
            <div className="col-sm-8">
              <div className="row g-2">
                <div className="col-sm-6">
                  <label for="carOwnerName" className="form-label h6">ФИО владельца</label>
                  <input type="text" className="form-control" id="carOwnerName" placeholder="Введите ФИО владельца" name="carOwnerName" value={carOwnerName} onChange={(e) => onInputChange(e)}></input>
                </div>

                <div className="col-sm-6">
                  <label for="carOwnerContactInfo" className="form-label h6">Контактные данные</label>
                  <input type="text" className="form-control" id="carOwnerContactInfo" placeholder="Введите e-mail или телефон" name="carOwnerContactInfo" value={carOwnerContactInfo} onChange={(e) => onInputChange(e)}></input>
                </div>

                <div className="col-sm-6">
                  <label for="carName" className="form-label h6">Название машины</label>
                  <input type="text" className="form-control" id="carName" placeholder="Введите название машины" name="carName" value={carName} onChange={(e) => onInputChange(e)}></input>
                </div>

                <div className="col-sm-6">
                  <label for="carColor" className="form-label h6">Цвет</label>
                  <input type="text" className="form-control" id="carColor" placeholder="Желтый" name="carColor" value={carColor} onChange={(e) => onInputChange(e)}></input>
                </div>

                <div className="col-sm-4">
                  <label for="carManufactureYear" className="form-label h6">Год выпуска</label>
                  <input type="text" className="form-control" id="carManufactureYear" placeholder="1990" name="carManufactureYear" value={carManufactureYear} onChange={(e) => onInputChange(e)}></input>
                </div>

                <div className="col-sm-4">
                  <label for="carMileage" className="form-label h6">Пробег (.км)</label>
                  <input type="number" className="form-control" id="carMileage" placeholder="0" name="carMileage" value={carMileage} min="0" onChange={(e) => onInputChange(e)}></input>
                </div>

                <div className="col-sm-4">
                  <label for="carLicensePlateNumber" className="form-label h6">Гос. номер</label>
                  <input type="text" className="form-control" id="carLicensePlateNumber" placeholder="a000a000" name="carLicensePlateNumber" value={carLicensePlateNumber} onChange={(e) => onInputChange(e)}></input>
                </div>

                <div className="col-sm-12">
                  <label for="appealReason" className="form-label h6">Прична обращения</label>
                  <textarea className="form-control" id="appealReason" placeholder="Причина обращения" name="appealReason" value={appealReason} onChange={(e) => onInputChange(e)}></textarea>
                </div>

                <div className="col-sm-12">
                  <label for="declaredWorks" className="form-label h6">Заявленные работы</label>
                  <textarea className="form-control" id="declaredWorks" rows="10" placeholder="-Работа 1" name="declaredWorks" value={declaredWorks} onChange={(e) => onInputChange(e)}></textarea>
                </div>

                <div className="col-sm-4">
                  <label for="totalPriceOfWorks" className="form-label h6">Общая стоимость работ (.руб)</label>
                  <input type="number" min="0" step="0.01" className="form-control" id="totalPriceOfWorks" placeholder="Введите e-mail или телефон" name="totalPriceOfWorks" value={totalPriceOfWorks} onChange={(e) => onInputChange(e)}></input>
                </div>

                <div>
                  <button type="submit" className="btn btn-outline-success mt-2" onClick={notify}>Обновить данные</button>
                  <Link className="btn btn-outline-warning mt-2 mx-2" to="/">Отмена</Link>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <p className="h6">Справочная ифнормация</p>
              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><p className="h6">Ремонт двигателей</p></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.

                    <ul>
                      <li>sdfsdfsdf</li>
                      <li>dsfsfsdff</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><p className="h6">Ремонт трансмиссии</p></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header><p className="h6">Ремонт трансмиссии</p></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header><p className="h6">Ремонт трансмиссии</p></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header><p className="h6">Ремонт трансмиссии</p></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header><p className="h6">Ремонт трансмиссии</p></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
      </form>
    </div>
  )
}
