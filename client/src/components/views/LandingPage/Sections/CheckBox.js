import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    // 누른 것의 index를 구하고
    const currentIdx = Checked.indexOf(value);
    // 전체 checked된 state에서 현재 Checkbox가 이미 있다면 빼주고 없다면 넣어준다.
    const copy = [...Checked];
    if (currentIdx === -1) {
        copy.push(value)
    } else {
        copy.splice(currentIdx, 1);
    }
    setChecked(copy);
    props.handleFilters(copy);
  };

  const renderCheckboxLists = () =>
    props.continents &&
    props.continents.map((el, idx) => (
      <React.Fragment key={idx}>
        <Checkbox onChange={() => handleToggle(el._id)} checked={Checked.indexOf(el._id) === -1 ? false : true}/>
        <span>{el.name}</span>
      </React.Fragment>
    ));
  return (
    <Collapse defaultActiveKey={["0"]}>
      <Panel header="대륙선택" key="1">
        {renderCheckboxLists()}
      </Panel>
    </Collapse>
  );
}

export default CheckBox;
