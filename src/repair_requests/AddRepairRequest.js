import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Accordion from 'react-bootstrap/Accordion';

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

  const notify = () => toast.success("Заявка успешно создана!", {
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
      <h5 className="text-center m-4">Создание заявки</h5>
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
                  <button type="submit" className="btn btn-outline-success mt-2" onClick={notify}>Создать</button>
                  <Link className="btn btn-outline-warning mt-2 mx-2" to="/">Отмена</Link>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <p className="h6">Справочная ифнормация</p>
              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><p className="h6">Диагностика автомобиля</p></Accordion.Header>
                  <Accordion.Body>
                    <table className="table table-borderless table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Услуга</th>
                          <th scope="col">Легковые автомобили</th>
                          <th scope="col">Джипы, минивены</th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider">
                        <tr>
                          <td>Диагностика подвески</td>
                          <td>от 500 руб.</td>
                          <td>от 500 руб.</td>
                        </tr>
                        <tr>
                          <td>Диагностика заправочных емкостей</td>
                          <td>от 300 руб.</td>
                          <td>от 500 руб.</td>
                        </tr>
                        <tr>
                          <td>Диагностика приводных ремней</td>
                          <td>от 100 руб.</td>
                          <td>от 150 руб.</td>
                        </tr>
                        <tr>
                          <td>Диагностика двигателя и микропроцессора</td>
                          <td>от 300 руб.</td>
                          <td>от 550 руб.</td>
                        </tr>
                        <tr>
                          <td>Диагностика дисковых тормозных колодок</td>
                          <td>от 100 руб.</td>
                          <td>от 150 руб.</td>
                        </tr>
                        <tr>
                          <td>Диагностика барабанных тормозных колодок</td>
                          <td>от 200 руб.</td>
                          <td>от 250 руб.</td>
                        </tr>
                      </tbody>
                    </table>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><p className="h6">Замена масла</p></Accordion.Header>
                  <Accordion.Body>
                    <table className="table table-borderless table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Услуга</th>
                          <th scope="col">Легковые автомобили</th>
                          <th scope="col">Джипы, минивены</th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider">
                        <tr>
                          <td>Замена масла ДВС и масляного фильтра</td>
                          <td>от 500 руб.</td>
                          <td>от 700 руб.</td>
                        </tr>
                        <tr>
                          <td>Замена воздушного фильтра</td>
                          <td>от 150 руб.</td>
                          <td>от 200 руб.</td>
                        </tr>
                        <tr>
                          <td>Замена салонного фильтра</td>
                          <td>от 300 руб.</td>
                          <td>от 700 руб.</td>
                        </tr>
                        <tr>
                          <td>Замена топливного фильтра</td>
                          <td>от 200 руб.</td>
                          <td>от 1250 руб.</td>
                        </tr>
                        <tr>
                          <td>Замена свечей</td>
                          <td>от 350 руб.</td>
                          <td>от 500 руб.</td>
                        </tr>
                        <tr>
                          <td>Замена масла в МКПП</td>
                          <td>от 400 руб.</td>
                          <td>от 500 руб.</td>
                        </tr>
                        <tr>
                          <td>Замена масла в АКПП</td>
                          <td>от 500 руб.</td>
                          <td>от 1300 руб.</td>
                        </tr>
                      </tbody>
                    </table>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header><p className="h6">Ремонт двигателей</p></Accordion.Header>
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
                  <Accordion.Header><p className="h6">Ремонт дополнительных частей двигателя</p></Accordion.Header>
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
                  <Accordion.Header><p className="h6">Ремонт МКПП и АКПП</p></Accordion.Header>
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
                  <Accordion.Header><p className="h6">Ремонт рулевой рейки</p></Accordion.Header>
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
