import React, { useState } from "react";
import style from "./css/Register.module.css";
import { Table, Button, Icon, TextInput } from "react-materialize";

const ManipulateRegister = () => {
  const [RegisterData, setRegisterData] = useState([
    {
      id: 0,
      name: "W Register",
      value: 0,
      isEdit: false,
      key: 0,
    },
    {
      id: 1,
      name: "Z Register",
      value: 0,
      isEdit: false,
      key: 0,
    },
    {
      id: 2,
      name: "B Register",
      value: 0,
      isEdit: false,
      key: 0,
    },
    {
      id: 3,
      name: "C Register",
      value: 0,
      isEdit: false,
      key: 0,
    },
    {
      id: 4,
      name: "D Register",
      value: 0,
      isEdit: false,
      key: 0,
    },
    {
      id: 5,
      name: "E Register",
      value: 0,
      isEdit: false,
      key: 0,
    },
    {
      id: 6,
      name: "H Register",
      value: 0,
      isEdit: false,
      key: 0,
    },
    {
      id: 7,
      name: "L Register",
      value: 0,
      isEdit: false,
      key: 0,
    },
  ]);

  return (
    <div className={style.addressWrapper}>
      <div className={style.addressTitle}>
        <p className={style.title}>Manipulate Individual Registers</p>
        <p className={style.subtitle}>Update values of individual registers</p>
      </div>
      <div className={style.addressTableWrapper}>
        <Table centered hoverable responsive striped>
          <thead className="orange lighten-2">
            <tr>
              <th data-field="Namee">Register Name</th>
              <th data-field="value">Value</th>
              <th data-field="action">Action</th>
            </tr>
          </thead>
          <tbody>
            {RegisterData.map((register) => {
              if (register.isEdit && register.key === 1) {
                return (
                  <div key={register.id}>
                    <TextInput type="number" placeholder="Enter Value" />
                    <Button small waves style={{ margin: "20px" }}>
                      Submit
                    </Button>
                    <Button small waves className="red lighten-2">
                      Cancel
                    </Button>
                  </div>
                );
              } else {
                return (
                  <tr key={register.id}>
                    <td>{register.name}</td>
                    <td>{register.value}</td>
                    <td>
                      <Button
                        floating
                        icon={<Icon>edit</Icon>}
                        onClick={() => {
                          setRegisterData((RegisterData) => {
                            RegisterData.forEach((data) => {
                              if (data.id === register.id) {
                                data.isEdit = true;
                                data.key = 1;
                              }
                            });
                            console.log(RegisterData);
                            return RegisterData;
                          });
                        }}
                      />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </div>
      <Button node="button" className="red lighten-1" waves="light">
        Reset
      </Button>
    </div>
  );
};
export default ManipulateRegister;
