import React, { useState } from 'react'
import { Typography, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';

const { TextArea } = Input;

const Continents = [
    {key: 1, value: 'Africa'},
    {key: 2, value: 'Europe'},
    {key: 3, value: 'Asia'},
    {key: 4, value: 'North America'},
    {key: 5, value: 'South America'},
    {key: 6, value: 'Austrailia'},
    {key: 7, value: 'Arab'},
]

function UploadProductPage() {

    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState(0);
    const [Continent, setContinent] = useState(1);
    const [Images, setImages] = useState([]);

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value);
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value);
    }
    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value);
    }
    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value);
    }
    const updateImages = (newImages) => {
        setImages(newImages);
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2>여행상품업로드</h2>
            </div>

            <Form>
                <FileUpload refreshFunction={updateImages}/>
                <br />
                <br />
                <label>이름</label>
                <Input value={Title} onChange={titleChangeHandler}/>
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description}></TextArea>
                <br />
                <br />
                <label>가격($)</label>
                <Input type='number' onChange={priceChangeHandler} value={Price}/>
                <br />
                <br />
                <select onChange={continentChangeHandler} value={Continent}>
                    {
                        Continents.map(item => (
                            <option key={item.key} value={item.key}>{item.value}</option>
                        ))
                    }
                </select>
                <br />
                <br />
                <button>확인</button>
            </Form>
        </div>
    )
}

export default UploadProductPage
