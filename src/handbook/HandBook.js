import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function HandBook() {
  return (
    <div className="container my-5">
      <p className="text-start h4 mb-4">Справочная информация</p>

      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header><p className="h4">Диагностика автомобиля</p></Accordion.Header>
          <Accordion.Body>
            <table className="table table-borderless table-hover">
            <thead>
                <tr>
                  <th scope="col">Услуга</th>
                  <th scope="col">Легковые автомобили</th>
                  <th scope="col">Джипы, минивены</th>
                </tr>
              </thead>
              <tbody>
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
          <Accordion.Header><p className="h4">Замена масла</p></Accordion.Header>
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
          <Accordion.Header><p className="h4">Ремонт двигателей</p></Accordion.Header>
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
          <Accordion.Header><p className="h4">Ремонт дополнительных частей двигателя</p></Accordion.Header>
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
          <Accordion.Header><p className="h4">Ремонт МКПП и АКПП</p></Accordion.Header>
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
          <Accordion.Header><p className="h4">Ремонт рулевой рейки</p></Accordion.Header>
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
  )
}