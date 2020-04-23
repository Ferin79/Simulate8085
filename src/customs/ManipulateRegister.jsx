import React, { useState } from "react";
import style from "./css/Register.module.css";
import { Table, Button, Icon, TextInput } from "react-materialize";

const ManipulateRegister = () => {
  const [isErrorText, setisErrorText] = useState(false);
  const [RegisterData, setRegisterData] = useState([
    {
      id: 0,
      name: "W Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 1,
      name: "Z Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 2,
      name: "B Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 3,
      name: "C Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 4,
      name: "D Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 5,
      name: "E Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 6,
      name: "H Register",
      value: 0,
      isEdit: false,
    },
    {
      id: 7,
      name: "L Register",
      value: 0,
      isEdit: false,
    },
  ]);

  const handleRegisterEditBtn = (register) => {
    var datas = RegisterData;
    datas.forEach((data) => {
      if (data.id === register.id) {
        data.isEdit = true;
      }
    });
    setRegisterData([...datas]);
  };
  const handleSubmitCancel = (register) => {
    var datas = RegisterData;
    datas.forEach((data) => {
      if (data.id === register.id) {
        if (parseInt(data.value) > 255) {
          setisErrorText(true);
        } else {
          var deci = data.value;
          var hexString = parseInt(deci).toString(16);
          data.value = hexString;
          data.isEdit = false;
        }
      }
    });
    setRegisterData([...datas]);
  };

  const handleCancel = (register) => {
    var datas = RegisterData;
    datas.forEach((data) => {
      if (data.id === register.id) {
        data.isEdit = false;
        data.value = 0;
      }
    });
    setRegisterData([...datas]);
  };

  const handleReset = () => {
    var datas = RegisterData;
    datas.forEach((data) => {
      data.isEdit = false;
      data.value = 0;
    });
    setRegisterData([...datas]);
  };

  return (
    <div className={style.addressWrapper}>
      <div className={style.addressTitle}>
        <p className={style.title}>Manipulate Individual Registers</p>
        <p className={style.subtitle}>Update values of individual registers</p>
        <p className={style.subtitleSmaller}>
          Add Values in Decimal (0 to 255) and Data will be converted to Hex
        </p>
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
            {RegisterData.map((register) => (
              <tr>
                {register.isEdit ? (
                  <div>
                    <TextInput
                      type="number"
                      error={isErrorText ? "only 0 to 255" : null}
                      max="255"
                      placeholder="Enter Value"
                      onChange={(event) => {
                        const data = RegisterData;
                        data.forEach((data) => {
                          if (data.id === register.id) {
                            data.value = event.target.value;
                          }
                        });
                        setRegisterData([...data]);
                      }}
                    />
                    <Button
                      type="submit"
                      validate
                      small
                      waves
                      style={{ margin: "20px" }}
                      onClick={() => handleSubmitCancel(register)}
                    >
                      Submit
                    </Button>
                    <Button
                      small
                      waves
                      className="red lighten-2"
                      onClick={() => handleCancel(register)}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <React.Fragment>
                    <td>{register.name}</td>
                    <td style={{ textTransform: "uppercase" }}>
                      {register.value}
                    </td>
                    <td>
                      <Button
                        floating
                        icon={<Icon>edit</Icon>}
                        onClick={() => handleRegisterEditBtn(register)}
                      />
                    </td>
                  </React.Fragment>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Button
        node="button"
        className="red lighten-1"
        waves="light"
        onClick={handleReset}
      >
        Reset
      </Button>
    </div>
  );
};
export default ManipulateRegister;
