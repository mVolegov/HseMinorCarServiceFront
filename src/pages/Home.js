import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

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
    }

    return (
        <div className="container">
            <b>Текущие заявки</b>
            <div className="py-4">
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
                                            <Link className="btn btn-primary mx-2" to={`/view-repair-request/${request.id}`}>Детали</Link>
                                            <Link className="btn btn-outline-warning mx-2" to={`/edit-repair-request/${request.id}`}>Изменить</Link>
                                            <button className="btn btn-outline-danger mx-2" onClick={() => deleteRequest(request.id)}>Отменить</button>
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
