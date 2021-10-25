import React, { useState } from "react";
import { Collapse, Radio } from "antd";

const { Panel } = Collapse;

function RadioBox(props) {
  const [Value, setValue] = useState(0);

  const renderRadioBox = () => (
    props.price && props.price.map((el, idx) => (
        <Radio key={idx} value={el._id}>{el.name}</Radio>
    ))
  )
  const handleChange = (e) => {
    setValue(e.target.value);
    props.handleFilters(e.target.value);
  }
  return (
    <Collapse defaultActiveKey={["0"]}>
      <Panel header="가격범위설정" key="1">
            <Radio.Group onChange={handleChange} value={Value}>
                {renderRadioBox()}
            </Radio.Group>
      </Panel>
    </Collapse>
  );
}

export default RadioBox;

{/* <Radio value={1}>A</Radio> */}