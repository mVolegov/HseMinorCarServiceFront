import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { repairRequestSchema } from "../schemas/RepairRequestSchema";
import Accordion from "react-bootstrap/Accordion";
import { ToastContainer, toast } from "react-toastify";

export default function AddRepairRequestFormik() {
  let navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    await axios.post("http://localhost:8080/car-service/requests", values);

    navigate("/");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
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
      },
      validationSchema: repairRequestSchema,
      onSubmit,
    });

  console.log(errors);

  const notify = () =>
    toast.success("Заявка успешно создана!", {
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
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-sm-8">
            <div className="row g-2">
              <div className="col-sm-6">
                <label for="carOwnerName" className="form-label h6">
                  ФИО владельца
                </label>
                <input
                  type="text"
                  id="carOwnerName"
                  placeholder="Введите ФИО владельца"
                  value={values.carOwnerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.carOwnerName && touched.carOwnerName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></input>
                {errors.carOwnerName && touched.carOwnerName && (
                  <div className="invalid-feedback">{errors.carOwnerName}</div>
                )}
              </div>

              <div className="col-sm-6">
                <label for="carOwnerContactInfo" className="form-label h6">
                  Контактные данные
                </label>
                <input
                  type="text"
                  id="carOwnerContactInfo"
                  placeholder="Введите контактные данные"
                  value={values.carOwnerContactInfo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.carOwnerContactInfo && touched.carOwnerContactInfo
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></input>
                {errors.carOwnerContactInfo && touched.carOwnerContactInfo && (
                  <div className="invalid-feedback">
                    {errors.carOwnerContactInfo}
                  </div>
                )}
              </div>

              <div className="col-sm-6">
                <label for="carName" className="form-label h6">
                  Название машины
                </label>
                <input
                  type="text"
                  id="carName"
                  placeholder="Введите название ТС"
                  value={values.carName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.carName && touched.carName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></input>
                {errors.carName && touched.carName && (
                  <div className="invalid-feedback">{errors.carName}</div>
                )}
              </div>

              <div className="col-sm-6">
                <label for="carColor" className="form-label h6">
                  Цвет
                </label>
                <input
                  type="text"
                  id="carColor"
                  placeholder="Введите цвет"
                  value={values.carColor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.carColor && touched.carColor
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></input>
                {errors.carColor && touched.carColor && (
                  <div className="invalid-feedback">{errors.carColor}</div>
                )}
              </div>

              <div className="col-sm-4">
                <label for="carManufactureYear" className="form-label h6">
                  Год выпуска
                </label>
                <input
                  type="number"
                  id="carManufactureYear"
                  placeholder="Введите год выпуска"
                  min="1886"
                  value={values.carManufactureYear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.carManufactureYear && touched.carManufactureYear
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></input>
                {errors.carManufactureYear && touched.carManufactureYear && (
                  <div className="invalid-feedback">
                    {errors.carManufactureYear}
                  </div>
                )}
              </div>

              <div className="col-sm-4">
                <label for="carMileage" className="form-label h6">
                  Пробег (.км)
                </label>
                <input
                  type="number"
                  id="carMileage"
                  placeholder="Введите пробег"
                  min="0"
                  value={values.carMileage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.carMileage && touched.carMileage
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></input>
                {errors.carMileage && touched.carMileage && (
                  <div className="invalid-feedback">{errors.carMileage}</div>
                )}
              </div>

              <div className="col-sm-4">
                <label for="carLicensePlateNumber" className="form-label h6">
                  Гос. номер
                </label>
                <input
                  type="text"
                  id="carLicensePlateNumber"
                  placeholder="Введите гос. номер"
                  value={values.carLicensePlateNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.carLicensePlateNumber &&
                    touched.carLicensePlateNumber
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></input>
                {errors.carLicensePlateNumber &&
                  touched.carLicensePlateNumber && (
                    <div className="invalid-feedback">
                      {errors.carLicensePlateNumber}
                    </div>
                  )}
              </div>

              <div className="col-sm-12">
                <label for="appealReason" className="form-label h6">
                  Прична обращения
                </label>
                <textarea
                  id="appealReason"
                  placeholder="Введите причину обращения"
                  value={values.appealReason}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.appealReason && touched.appealReason
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></textarea>
                {errors.appealReason && touched.appealReason && (
                  <div className="invalid-feedback">{errors.appealReason}</div>
                )}
              </div>

              <div className="col-sm-12">
                <label for="declaredWorks" className="form-label h6">
                  Заявленные работы
                </label>
                <textarea
                  id="declaredWorks"
                  placeholder="-Работа 1"
                  rows="10"
                  value={values.declaredWorks}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.declaredWorks && touched.declaredWorks
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></textarea>
                {errors.declaredWorks && touched.declaredWorks && (
                  <div className="invalid-feedback">{errors.declaredWorks}</div>
                )}
              </div>

              <div className="col-sm-4">
                <label for="totalPriceOfWorks" className="form-label h6">
                  Общая стоимость работ (.руб)
                </label>
                <input
                  type="number"
                  id="totalPriceOfWorks"
                  placeholder="Введите стоимость работ"
                  min="0.00"
                  step="0.01"
                  value={values.totalPriceOfWorks}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.totalPriceOfWorks && touched.totalPriceOfWorks
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                ></input>
                {errors.totalPriceOfWorks && touched.totalPriceOfWorks && (
                  <div className="invalid-feedback">
                    {errors.totalPriceOfWorks}
                  </div>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="btn btn-outline-success mt-2"
                  onClick={notify}
                >
                  Создать
                </button>
                <Link className="btn btn-outline-warning mt-2 mx-2" to="/">
                  Отмена
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <p className="h6">Справочная ифнормация</p>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className="h6">Диагностика автомобиля</p>
                </Accordion.Header>
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
                <Accordion.Header>
                  <p className="h6">Замена масла</p>
                </Accordion.Header>
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
                <Accordion.Header>
                  <p className="h6">Ремонт двигателей</p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <p className="h6">Ремонт дополнительных частей двигателя</p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <p className="h6">Ремонт МКПП и АКПП</p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <p className="h6">Ремонт рулевой рейки</p>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </form>
    </div>
  );
}
