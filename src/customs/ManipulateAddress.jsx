import React, { useState } from "react";
import style from "./css/Address.module.css";
import { Table, Button, Icon } from "react-materialize";

const ManipulateAddress = () => {
  var addressKeyvalue = [];
  for (let index = 0; index < 10; index++) {
    addressKeyvalue.push({
      id: index,
      address: index + 1000,
      value: 0,
    });
  }

  const [addressRange, setAddressRange] = useState(addressKeyvalue);

  return (
    <div className={style.addressWrapper}>
      <div className={style.addressTitle}>
        <p className={style.title}>Memory Editing</p>
      </div>
      <div className={style.addressTable}>
        <Table centered hoverable responsive striped>
          <thead className="orange lighten-2">
            <tr>
              <th data-field="address">Address</th>
              <th data-field="value">Value</th>
              <th data-field="action">Actions</th>
            </tr>
          </thead>
          <tbody>
            {addressRange.map((data) => {
              return (
                <tr>
                  <td>{data.address}</td>
                  <td>{data.value}</td>
                  <td>
                    <Button floating icon={<Icon>edit</Icon>} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Button>
        <Icon>add</Icon>
      </Button>
    </div>
  );
};

export default ManipulateAddress;
