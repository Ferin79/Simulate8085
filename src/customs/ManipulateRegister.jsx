import React, { useContext } from "react";
import style from "./css/Register.module.css";
import { Table, Button, Icon, TextInput } from "react-materialize";
import { Context } from "../data/context";

const ManipulateRegister = () => {
  const { RegisterData, setRegisterData } = useContext(Context);

  const handleRegisterEditBtn = (register) => {
    var datas = RegisterData;
    datas.forEach((data) => {
      if (data.id === register.id) {
        data.isEdit = true;
      }
    });
    setRegisterData([...datas]);
  };
  const handleSubmit = (register) => {
    var datas = RegisterData;
    datas.forEach((data) => {
      if (data.id === register.id) {
        if (parseInt(data.value) <= 255) {
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
              <th data-field="Name">Register Name</th>
              <th data-field="value">Value</th>
              <th data-field="action">Action</th>
            </tr>
          </thead>
          <tbody>
            {RegisterData.map((register) => (
              <tr key={register.id}>
                {register.isEdit ? (
                  <div>
                    <TextInput
                      type="number"
                      error="Between 0 to 255 only"
                      validate
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
                      small
                      waves
                      style={{ margin: "20px" }}
                      onClick={() => handleSubmit(register)}
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
