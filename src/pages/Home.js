import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  const [requests, setRequests] = useState([])

  const { id } = useParams()

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    const result = await axios.get("http://localhost:8080/car-service/requests")
    console.log(result.data)
    setRequests(result.data)
  }

  const deleteRequest = async (id) => {
    await axios.delete(`http://localhost:8080/car-service/requests/${id}`)
    loadRequests()
    notifyDeleted()
  }

  const setDoneRequest = async (id) => {
    await axios.put(`http://localhost:8080/car-service/requests/set-done/${id}`)
    loadRequests()
    notifyDone()
  }

  const notifyDeleted = () => toast.error("Заявка успешно отменена!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyDone = () => toast.success("Заявка выполнена и перемещена в архив", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });

  return (
    <div className="container">
      <ToastContainer />
      <Link className="btn btn-lg btn-success my-3" to="/add-request">Добавить новую заявку</Link>

      <p className="text-start h4 mb-2">Текущие заявки</p>
      <div>
        <div className="card">
          <table className="table table-striped table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID заявки</th>
                <th scope="col">Название машины</th>
                <th scope="col">Гос. номер</th>
                <th scope="col">Вледелец</th>
                <th scope="col">Действие</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {
                requests.map((request, index) => (
                  <tr>
                    <th scope="row" key={index}>{index + 1}</th>
                    <td>{request.id}</td>
                    <td>{request.carName}</td>
                    <td>{request.carLicensePlateNumber}</td>
                    <td>{request.carOwnerName}</td>
                    <td>
                      <Link className="btn btn-info mx-2" to={`/view-repair-request/${request.id}`}>Детали</Link>
                      <Link className="btn btn-outline-primary mx-2" to={`/edit-repair-request/${request.id}`}>Изменить</Link>
                      <button className="btn btn-outline-danger mx-2" onClick={() => deleteRequest(request.id)}>Отменить</button>
                    </td>
                    <td>
                      <Link className="btn btn-outline-success" onClick={() => setDoneRequest(request.id)}>Выполнено</Link>
                      {/* <Link className="btn btn-success mx-2" to={`/view-repair-request/${request.id}`}>Выполнено</Link> */}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
