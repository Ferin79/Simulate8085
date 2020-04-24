import React, { useState, useContext } from "react";
import style from "./css/Address.module.css";
import { Table, Button, Icon, TextInput } from "react-materialize";
import { Context } from "../data/context";

const ManipulateAddress = () => {
  const { addressRange, setAddressRange } = useContext(Context);
  const [showTextField, setShowTextField] = useState(false);
  const [addressText, setAddressText] = useState(null);
  const [addressValue, setAddressValue] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnSubmit = () => {
    var hexnum = parseInt(addressValue);
    if (hexnum <= 65535) {
      var data = {
        id: currentIndex,
        address: addressText,
        value: hexnum.toString(16),
      };
      const old = addressRange;
      old.push(data);
      var newOld = currentIndex;
      newOld++;
      setCurrentIndex(newOld);
      setAddressRange([...old]);
      setShowTextField(false);
    }
  };

  const handleDeleteClick = (id) => {
    var data = addressRange;
    data = data.filter((register) => register.id !== id);
    setAddressRange([...data]);
  };

  return (
    <div className={style.addressWrapper}>
      <div className={style.addressTitle}>
        <p className={style.title}>Memory Editing</p>
        <p className={style.subtitlesmall}>
          Address and value in decimal. Later Address's values will be converted
          into Hex
        </p>
      </div>
      <div className={style.addressTable}>
        <Table centered hoverable responsive striped>
          <thead className="orange lighten-2">
            <tr>
              <th data-field="address">Address</th>
              <th data-field="address-value">Value</th>
              <th data-field="address-action">Actions</th>
            </tr>
          </thead>
          <tbody>
            {addressRange.length > 0
              ? addressRange.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.address}</td>
                      <td style={{ textTransform: "uppercase" }}>
                        {data.value}
                      </td>
                      <td>
                        <Button
                          floating
                          icon={<Icon className="red">delete</Icon>}
                          onClick={() => handleDeleteClick(data.id)}
                        />
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </div>
      {showTextField ? (
        <div style={style.inputWrapper}>
          <div style={style.inputFieldWrapper}>
            <TextInput
              type="number"
              min="1"
              required
              error="Address Only Greater Than 1"
              validate
              placeholder="Enter Addresss"
              onChange={(event) => setAddressText(event.target.value)}
            />
            <TextInput
              type="number"
              min="1"
              required
              max="65535"
              error="Address Values Only Greater Than 1 and Less than 65535"
              validate
              placeholder="Enter Value"
              onChange={(event) => setAddressValue(event.target.value)}
            />
          </div>
          <div>
            <Button type="submite" onClick={handleOnSubmit}>
              Confirm
            </Button>
            <Button
              className="red lighten-2"
              onClick={() => {
                setAddressText(null);
                setAddressValue(null);
                setShowTextField(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button onClick={() => setShowTextField(true)}>
          <Icon>add</Icon>
        </Button>
      )}
    </div>
  );
};

export default ManipulateAddress;
