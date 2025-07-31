"Use Client";

import React, { use } from "react";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Toast,
  ToastBody,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Button,
  Table,
  Input,
  FormGroup,
  FormFeedback,
  Form,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import "react-multi-carousel/lib/styles.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTrash,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

import oldpage, { Titlemkr } from "./oldpage";

//import fs from 'fs';
//import { readFile, writeFile } from "fs/promises";

//import Registros from "./Registros.json";

export function APICard() {
  var [Consulted, ShowConsult] = useState(false);
  const [ProductPlacements, searchProducts] = useState([]);
  const [UserPlacements, searchUsers] = useState([]);

  var [randseed, setseed] = useState(0);

  useEffect(() => {
    if (Consulted) {
      fetch("https://fakestoreapi.com/users")
        .then((response) => response.json())
        .then((data) => {
          searchUsers(data);
          console.log(data);
        })
        .catch((error) =>
          console.error("Error fetching data , no jaló la api =p:", error)
        );

      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          searchProducts(data);
          console.log(data);
          const maxStart = Math.max(0, data.length - 15);
          const randomIndex = Math.floor(Math.random() * maxStart);
          setseed(randomIndex);
        })
        .catch((error) =>
          console.error("Error fetching data , no jaló la api =p:", error)
        );
    }
  }, [Consulted]);

  return (
    <div className="px-[300px] bg-radial from-[#71b4cf] to-[#79ff79]">
      <Button onClick={() => ShowConsult(!Consulted)}>
        {" "}
        realizar/cerrar consulta
      </Button>
      {Consulted && (
        <div>
          {
            UserPlacements.slice(0, 1).map((users) => (
              <Card key={users.id} style={{ width: "15rem" }}>
                <CardBody>
                  <CardTitle tag="h5">
                    {" "}
                    {users.name.firstname}
                    {users.name.lastname}{" "}
                  </CardTitle>
                  <CardText>
                    <br></br>
                    <strong>Username:</strong> {users.username}
                    <br></br>
                    <strong>Email:</strong> {users.email}
                    <br></br>
                    <strong>Phone:</strong> {users.phone}
                  </CardText>
                  <CardFooter>
                    City: {users.address.city},{users.address.street} #
                    {users.address.number}
                  </CardFooter>
                </CardBody>
              </Card>
            ))

            /*<Card key={UserPlacements[0].id} style={{ width: "15rem" }}>
              <CardBody>
                <CardTitle tag="h5">
                  {" "}
                  {UserPlacements[0].name.firstname}
                  {UserPlacements[0].name.lastname}{" "}
                </CardTitle>
                <CardText>
                  <strong>Username:</strong> {UserPlacements[0].username}
                  <br></br>
                  <strong>Email:</strong> {UserPlacements[0].email}
                  <br></br>
                  <strong>Phone:</strong> {UserPlacements[0].phone}
                </CardText>
                <CardFooter>
                  City: {UserPlacements[0].address.city},
                  {UserPlacements[0].address.street} #
                  {UserPlacements[0].address.number}
                </CardFooter>
              </CardBody>
            </Card>

            */
          }
          {Consulted && (
            <div>
              <Table bordered={true} className="w-[600px] block">
                <thead>
                  <tr>
                    <th>Productos</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>id</td>
                    <td>item</td>
                    <td>price</td>
                    <td>description</td>
                    <td>category</td>
                    <td>rating rate</td>
                    <td>rating count</td>
                  </tr>
                  {ProductPlacements.slice(randseed, randseed + 15).map(
                    (item, index) => (
                      <tr key={index}>
                        <td>
                          <img src={item.image} alt={item.title} height="50" />
                        </td>
                        <td>{item.id}</td>
                        <td>${item.price}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td>{item.rating?.rate}</td>
                        <td>{item.rating?.count}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function NewestForm() {
  const IniFormdataData = {
    Name: "",
    LastNames: "",
    Mail: "",
    Password: "",
    Age: 0,
    isMale: false,
    Role: "",
    Options: "",
    Notes: "",
    Date: "",
  };

  var [FormData, UpdateData] = useState(IniFormdataData);

  var [Validinput, UpdateValid] = useState({
    Name: null,
    LastNames: null,
    Mail: null,
    Age: null,
    Date: null,
  });

  var [renderTable, EnableTable] = useState(false);
  var [renderModal, EnableModal] = useState(false);

  var comparedata = (e) => {
    const { name, value, type, checked } = e.target;

    /*
    if (type === "checkbox") {
      // para opciones múltiples
      setFormData((prev) => {
        if (checked) {
          return { ...prev, options: [...prev.options, value] };
        } else {
          return {
            ...prev,
            options: prev.options.filter((opt) => opt !== value),
          };
        }
      });
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, isMale: value === "true" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }*/
    /*
    if (
      e.target.name == "Name" &&
      /^[A-Za-z]+$/.test(e.target.value) &&
      String(e.target.value).length > 0
    ) {
      UpdateData({ FormData, Name: e.target.value });

      UpdateValid({ Validinput, Name: true });
    } else {
      UpdateValid({ Validinput, Name: false });
    }

    if (
      e.target.name == "LastNames" &&
      /^[A-Za-z]+$/.test(e.target.value) &&
      String(e.target.value).length > 0
    ) {
      FormData.LastNames = e.target.value;
      UpdateValid({ Validinput, LastNames: true });
    } else {
      UpdateValid({ Validinput, LastNames: false });
    }

    if (e.target.name == "Mail") {
      FormData.Mail = e.target.value;
    }
    if (e.target.name == "Password") {
      FormData.Password = e.target.value;
    }
    if (e.target.name == "Age") {
      FormData.Age = e.target.value;
    }
    if (e.target.name == "isMale") {
      FormData.isMale = e.target.value;
    }
    if (e.target.name == "Role") {
      FormData.Role = e.target.value;
    }
    if (e.target.name == "Options") {
      FormData.Options = FormData.Options + e.target.value;
    }
    if (e.target.name == "Notes") {
      FormData.Notes = e.target.value;
    }
    if (e.target.name == "Date") {
      FormData.Date = e.target.value;
    }
*/

    if (name === "Name" || name === "LastNames") {
      const ValidatedStrings = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/.test(value.trim());
      UpdateValid((prev) => ({
        ...prev,
        [name]: ValidatedStrings,
      }));
      if (ValidatedStrings === true) {
        UpdateData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }

    if (name === "Mail") {
      const validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
      UpdateValid((prev) => ({
        ...prev,
        [name]: validMail,
      }));
      if (validMail === true) {
        UpdateData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }

    if (name === "Age") {
      const validAge = /^(?:[1-9]|[1-9][0-9]|1[0-2][0-9])$/.test(value.trim());
      UpdateValid((prev) => ({
        ...prev,
        [name]: validAge,
      }));
      if (validAge === true) {
        UpdateData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }
    if (name === "Date") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const registerDate = new Date(value);
      registerDate.setHours(0, 0, 0, 0);

      var validDate = registerDate >= today;

      UpdateValid((prev) => ({
        ...prev,
        [name]: validDate,
      }));
      if (validDate === true) {
        UpdateData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }

    UpdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function clearFormData() {
    window.location.reload(true);
  }

  return (
    <div className="px-[450px] bg-linear-to-r from-[#71cfbe] to-[#1f2a87]">
      <Form className="w-[600px] block">
        <Titlemkr
          showtext="Formulario de registro"
          tsize="text-[40px]"
          color1="text-gray-600"
          fontT="font-bold"
        />
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Nombre
          <Input
            name="Name"
            placeholder="pon tu nombre aquí"
            onChange={comparedata}
            valid={Validinput.Name === true}
            invalid={Validinput.Name === false}
            value={FormData.Name}
          />
          <FormFeedback invalid>
            intenta no usar numeros en tu nombre
          </FormFeedback>
        </div>
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Apellidos
          <Input
            placeholder="ingresa tus apellidos aqui"
            name="LastNames"
            onChange={comparedata}
            valid={Validinput.LastNames === true}
            invalid={Validinput.LastNames === false}
          />
          <FormFeedback invalid>
            intenta no usar numeros en tus apellidos
          </FormFeedback>
        </div>
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Correo
          <Input
            type="email"
            placeholder="ingresa tu correo aqui"
            name="Mail"
            onChange={comparedata}
            valid={Validinput.Mail === true}
            invalid={Validinput.Mail === false}
          />
          <FormFeedback invalid>
            intenta usar un formato como micorreo@empresa.com
          </FormFeedback>
        </div>
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Contraseña
          <Input
            type="password"
            placeholder="****"
            name="Password"
            onChange={comparedata}
          />
        </div>
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Edad
          <Input
            type="number"
            placeholder="00"
            name="Age"
            onChange={comparedata}
            valid={Validinput.Age === true}
            invalid={Validinput.Age === false}
          />
          <FormFeedback invalid>
            intenta no usar numeros negativos o mayores a 120
          </FormFeedback>
        </div>
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Género
          <FormGroup tag="fieldset">
            <FormGroup check>
              Masculino
              <Input
                type="radio"
                name="isMale"
                value="true"
                onChange={comparedata}
              ></Input>
            </FormGroup>
            <FormGroup check>
              Femenino
              <Input
                type="radio"
                name="isMale"
                value="false"
                onChange={comparedata}
              ></Input>
            </FormGroup>
          </FormGroup>
        </div>
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Rol?
          <Input type="select" name="Role" onChange={comparedata}>
            <option> no se a que se refiere con rol</option>
            <option> si se a que se refiere con rol</option>
            <option> no entiendo a que se refiere con rol</option>
            <option> de canéla porfavor</option>
          </Input>
        </div>
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Opciones
          <FormGroup>
            <div>
              <Input
                type="checkbox"
                name="Options"
                onChange={comparedata}
                value="op1"
              />
              <label>opción 1</label>
            </div>
            <div>
              <Input
                type="checkbox"
                name="Options"
                onChange={comparedata}
                value="op2"
              />
              <label>opción uno</label>
            </div>
            <div>
              <Input
                type="checkbox"
                name="Options"
                onChange={comparedata}
                value="op3"
              />
              <label>opción one</label>
            </div>
            <div>
              <Input
                type="checkbox"
                name="Options"
                onChange={comparedata}
                value="op4"
              />
              <label>opción um</label>
            </div>
            <div>
              <Input
                type="checkbox"
                name="Options"
                onChange={comparedata}
                value="op5"
              />
              <label>opción unu</label>
            </div>
            <div>
              <Input
                type="checkbox"
                name="Options"
                onChange={comparedata}
                value="op6"
              />
              <label>opción eins</label>
            </div>
            <div>
              <Input
                type="checkbox"
                name="Options"
                onChange={comparedata}
                value="op7"
              />
              <label>opción un</label>
            </div>
            <div>
              <Input
                type="checkbox"
                name="Options"
                onChange={comparedata}
                value="op8"
              />
              <label>opción unus</label>
            </div>
          </FormGroup>
        </div>
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Notas / Observaciones
          <Input type="textarea" name="Notes" onChange={comparedata} />
        </div>
        <div className="text-[20px] text-[#54480b] font-extrabold">
          Fecha{String(Validinput.Date)}
          <Input
            type="date"
            name="Date"
            onChange={comparedata}
            valid={Validinput.Date === true}
            invalid={Validinput.Date === false}
          />
          <FormFeedback invalid>
            intenta no usar fechas anteriores a las de hoy
          </FormFeedback>
        </div>

        <div className="buttons px-[150px]">
          <BotonShowForm FormStructData={FormData}></BotonShowForm>
          <Button onClick={clearFormData}>Reiniciar Formulario</Button>
          <Button onClick={() => EnableTable(true)}> Guardar</Button>
        </div>
      </Form>
      {renderTable && (
        <div className="px-[-500px]">
          {" "}
          <Table bordered={true} className="w-[600px] block px-[-500px]">
            <thead>
              <tr>
                <th>Registro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.entries(FormData).map(([key, value], index) => (
                  <td key={index}> {String(key)}</td>
                ))}
                <td>Actions</td>
              </tr>
              <tr>
                {Object.entries(FormData).map(([key, value], index) => (
                  <td key={index}> {String(value)}</td>
                ))}
                <td>
                  <Button onClick={() => UpdateData(IniFormdataData)}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-[#c90000] "
                    ></FontAwesomeIcon>{" "}
                  </Button>
                  <Button onClick={() => EnableModal(true)}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="text-[#00c98d] "
                    ></FontAwesomeIcon>{" "}
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}{" "}
      {renderModal && (
        <div
          style={{
            display: "block",
            width: 1000,
            padding: 30,
            backgroundColor: "blue",
          }}
        >
          <Modal
            isOpen={renderModal}
            modalTransition={{ timeout: 2000 }}
            className="bg-blue-200"
          >
            <ModalBody className="bg-blue-300">
              <Table bordered={true} className="w-[600px] block px-[-500px]">
                <thead>
                  <tr>
                    <th>Registro</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    {Object.entries(FormData).map(([key, value], index) => (
                      <td key={index}> {String(key)}</td>
                    ))}
                  </tr>
                  <tr>
                    {Object.entries(FormData).map(([key, value], index) => (
                      <td key={index}>
                        <Input
                          name={String(key)}
                          onChange={comparedata}
                          value={String(value)}
                        />
                      </td>
                    ))}
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </ModalBody>
            <ModalFooter className="bg-[#494bca]">
              <button
                onClick={() => EnableModal(false)}
                className="bg-[#b69191]"
              >
                Cerrar y Aceptar
              </button>
            </ModalFooter>
          </Modal>
        </div>
      )}
    </div>
  );
}

export function MyForm() {
  /*
  const fs = require("fs");

  try {
    var characterdata = JSON.parse(Registers);
  } catch (error) {
    console.log("no jaló");
  }*/

  var Jdata = require("./data/Registros.json");
  var characterdata = JSON.parse(JSON.stringify(Jdata));

  return (
    <div className="w-[500px] py-3 px-3 block ">
      <Titlemkr
        showtext="mi primera tabla de reacstrap, un poco de tailwind y fontawesome"
        tsize="text-[40px]"
        color1="text-gray-600"
        fontT="font-bold"
      />

      <Table bordered={true}>
        <thead>
          <tr>
            <th>cabecera de mi tabla</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> ID </td>
            <td> Honorario </td>
            <td> Nombre </td>
            <td>
              {" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#000000] "
              ></FontAwesomeIcon>{" "}
            </td>
            <td> desplegar </td>
          </tr>

          <tr>
            <td> {characterdata.Register1.IDentifier} </td>
            <td> {characterdata.Register1.honorario} </td>
            <td> {characterdata.Register1.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register1.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register2.IDentifier} </td>
            <td> {characterdata.Register2.honorario} </td>
            <td> {characterdata.Register2.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register2.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register3.IDentifier} </td>
            <td> {characterdata.Register3.honorario} </td>
            <td> {characterdata.Register3.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register3.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register4.IDentifier} </td>
            <td> {characterdata.Register4.honorario} </td>
            <td> {characterdata.Register4.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register4.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register5.IDentifier} </td>
            <td> {characterdata.Register5.honorario} </td>
            <td> {characterdata.Register5.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register5.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register6.IDentifier} </td>
            <td> {characterdata.Register6.honorario} </td>
            <td> {characterdata.Register6.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register6.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register7.IDentifier} </td>
            <td> {characterdata.Register7.honorario} </td>
            <td> {characterdata.Register7.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register7.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register8.IDentifier} </td>
            <td> {characterdata.Register8.honorario} </td>
            <td> {characterdata.Register8.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register8.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register9.IDentifier} </td>
            <td> {characterdata.Register9.honorario} </td>
            <td> {characterdata.Register9.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register9.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register10.IDentifier} </td>
            <td> {characterdata.Register10.honorario} </td>
            <td> {characterdata.Register10.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register10.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register11.IDentifier} </td>
            <td> {characterdata.Register11.honorario} </td>
            <td> {characterdata.Register11.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register11.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register12.IDentifier} </td>
            <td> {characterdata.Register12.honorario} </td>
            <td> {characterdata.Register12.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register12.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register13.IDentifier} </td>
            <td> {characterdata.Register13.honorario} </td>
            <td> {characterdata.Register13.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register13.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register14.IDentifier} </td>
            <td> {characterdata.Register14.honorario} </td>
            <td> {characterdata.Register14.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register14.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register15.IDentifier} </td>
            <td> {characterdata.Register15.honorario} </td>
            <td> {characterdata.Register15.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register15.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register16.IDentifier} </td>
            <td> {characterdata.Register16.honorario} </td>
            <td> {characterdata.Register16.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register16.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register17.IDentifier} </td>
            <td> {characterdata.Register17.honorario} </td>
            <td> {characterdata.Register17.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register17.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register18.IDentifier} </td>
            <td> {characterdata.Register18.honorario} </td>
            <td> {characterdata.Register18.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register18.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register19.IDentifier} </td>
            <td> {characterdata.Register19.honorario} </td>
            <td> {characterdata.Register19.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register19.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
          <tr>
            <td> {characterdata.Register20.IDentifier} </td>
            <td> {characterdata.Register20.honorario} </td>
            <td> {characterdata.Register20.nombre} </td>
            <td></td>
            <td>
              {" "}
              <BotonModal
                imglink={characterdata.Register20.imagelink}
              ></BotonModal>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

/* carrusel, solo funciona si se pone en la página principal



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};







<Carousel   responsive={responsive}  showDots={true} autoPlaySpeed={10} transitionDuration={5} >

<div>

<img     src={'https://tse3.mm.bing.net/th/id/OIP.e22h0sw5uanhGoZWDfjEFgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3' }  ></img>

</div>
<div>

<img     src={'https://tse2.mm.bing.net/th/id/OIP.wUA_CHXmkwdc4cCJu7qs5gHaKp?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3' }  ></img>

</div>
<div>

<img     src={'https://i.ytimg.com/vi/-YA12_vjaC8/maxresdefault.jpg' }  ></img>

</div>
<div>

<img     src={'https://tse2.mm.bing.net/th/id/OIP.n9YwQqG4iEevRSX0jzy3pAHaE8?pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3' }  ></img>

</div>
<div>

<img     src={'https://alchetron.com/cdn/bionicle-maze-of-shadows-8f3a108f-b6a6-4203-9fcd-70cc1011435-resize-750.jpeg' }  ></img>

</div>
<div>

<img     src={'https://amazingtoys.cstatic.io/media/4c/08/53/1678199987/lego-bionicle-toa-whenua-8603-1.jpg' }  ></img>

</div>

</Carousel>


// supuesta mente esto debería hacer flechas  propias, pero  no encuentra los icónos
const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  // onMove means if dragging or swiping in progress.
  return (
    <button className="custom-arrow custom-arrow-right bg-green-500" onClick={() => onClick()}>
      {'>'}
    </button>
  )
}

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  return (
    <button className="custom-arrow custom-arrow-left bg-green-500" onClick={() => onClick()}>
      {'<'}
    </button>
  )
}
  // aqui termina las flecas propias




*/

export function BotonShowForm({ FormStructData }) {
  var [contadorB, ActualizarBool] = useState(false);

  function DetectarClick() {
    ActualizarBool((contadorB = !contadorB));
  }

  var showdata = JSON.stringify(FormStructData);
  if (contadorB) {
    return (
      <div>
        <div
          style={{
            display: "block",
            width: 700,
            padding: 30,
            backgroundColor: "blue",
          }}
        >
          <Modal
            isOpen={contadorB}
            modalTransition={{ timeout: 2000 }}
            className="bg-blue-200"
          >
            <ModalBody className="bg-blue-300">{showdata}</ModalBody>
            <ModalFooter className="bg-[#494bca]">
              <button onClick={DetectarClick} className="bg-[#22979d]">
                Cerrar modal
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Button onClick={DetectarClick} className="bg-[#565cd5] ">
          Mostrar Datos
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[#013680] "
          ></FontAwesomeIcon>
        </Button>{" "}
      </div>
    );
  }
}

export function BotonModal({ imglink }) {
  var [contadorB, ActualizarBool] = useState(false);

  function DetectarClick() {
    ActualizarBool((contadorB = !contadorB));
  }

  if (contadorB) {
    return (
      <div>
        <div
          style={{
            display: "block",
            width: 700,
            padding: 30,
            backgroundColor: "blue",
          }}
        >
          <Modal
            isOpen={contadorB}
            modalTransition={{ timeout: 2000 }}
            className="bg-blue-200"
          >
            <ModalBody className="bg-blue-300">
              <img
                src={imglink}
                alt="no sale la imagen pero si funcina la imagen"
              ></img>
            </ModalBody>
            <ModalFooter className="bg-[#494bca]">
              <button onClick={DetectarClick} className="bg-[#b69191]">
                Cerrar modal
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Button onClick={DetectarClick} className="bg-[#4d1191] ">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[#cd3131] "
          ></FontAwesomeIcon>
        </Button>{" "}
      </div>
    );
  }
}

export function BotonTostada() {
  var [contadorB, ActualizarBool] = useState(false);

  function DetectarClick() {
    ActualizarBool((contadorB = !contadorB));
  }

  if (contadorB) {
    return (
      <div>
        <div
          style={{
            display: "block",
            width: 700,
            padding: 30,
            backgroundColor: "blue",
          }}
        >
          <Toast className="p-3 my-2 e bg-blue-600">
            <ToastBody className="bg-blue-100">
              Notificación de tostada
            </ToastBody>
          </Toast>

          <button onClick={DetectarClick} className="bg-[#fff4b2]">
            Cerrar Tostada
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={DetectarClick} className="bg-[#fff4b2]">
          Mostrar tostada
        </button>
      </div>
    );
  }
}

/*

export function Carruseldeimagenesl(){
  
  var [contadorB,ActualizarContador]=useState(0);

  var [contadorAnim,ActualizarAnim]=useState(false);

  var itemarray = [
    
      {   
        caption: 'Toa Vakama',
          src: 'https://tse3.mm.bing.net/th/id/OIP.e22h0sw5uanhGoZWDfjEFgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
          altText: 'El bionicle más genial'
          },

  
 {   
        caption: 'Toa Nuju',
          src: 'https://tse2.mm.bing.net/th/id/OIP.wUA_CHXmkwdc4cCJu7qs5gHaKp?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3',
          altText: 'El toa de los puzzles'
          },




            {   
        caption: 'Toa Onewa',
          src: 'https://i.ytimg.com/vi/-YA12_vjaC8/maxresdefault.jpg',
          altText: 'El toa de cambiar de toa'
          },
    
   


            {   
        caption: 'Toa Matau',
          src: 'https://tse2.mm.bing.net/th/id/OIP.n9YwQqG4iEevRSX0jzy3pAHaE8?pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3',
          altText: 'El toa de la parte más dificil del juego'
          },  


          {   
        caption: 'Toa Nokama ',
          src: 'https://alchetron.com/cdn/bionicle-maze-of-shadows-8f3a108f-b6a6-4203-9fcd-70cc1011435-resize-750.jpeg',
          altText: 'La traductora'
          },


               {   
        caption: 'Bionicle Whenua',
          src: 'https://amazingtoys.cstatic.io/media/4c/08/53/1678199987/lego-bionicle-toa-whenua-8603-1.jpg',
          altText: 'El toa que no tiene su propia pantalla '
          },
 
    
 
   

  ];


  var itemlength = itemarray.length-1

  var PrevButton = () =>{
    if(contadorAnim){return
    }else{
       const nextindex = contadorB === 0?
        itemlength : contadorB-1;
        ActualizarContador(nextindex)
    }
  }
  

  var NextButton = () =>{
    if(contadorAnim){return
    }else{
       const nextindex = contadorB === itemlength?
        itemlength : contadorB+1;
        ActualizarContador(nextindex)
    }
  }

  const CarouselItemData = () => {
  return (
    <>
      {itemarray.map((item) => (
        <CarouselItem
          key={item.src}
          onExited={() => ActualizarAnim(false)}
          onExiting={() => ActualizarAnim(true)}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      ))}
    </>
  );
};



return(

  <div    style={{display: 'block',width:320, padding:30}}>
      <h4> Carrusel de bionicle de reacstrap</h4>
          <Carousel
          previous={PrevButton} next={NextButton}
          activeIndex={contadorB}
          >
            <CarouselIndicators
            items={itemarray}
            activeIndex={contadorB}
            onClickHandler={(newIndex)=>{
              if (contadorAnim){return}else{ActualizarContador(newIndex)}
            }}
            
            />

             <CarouselItemData/>
             

              <CarouselControl directionText="Prev"
                direction="prev"  onClickHandler={PrevButton}/>
                <CarouselControl directionText="Next"
                direction="next"  onClickHandler={NextButton}/>



          </Carousel>

  </div>






)




}


*/
