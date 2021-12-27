import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const UseEffect = () => {
    const { register, handleSubmit } = useForm();
    const formSubmit = (data) => {
        console.log(data);
    }
    const rowData = {
        data: [
            {
                id: 1, innerdata: [
                    { id: 1, name: "harpreet" },
                    { id: 2, name: "js" },
                    { id: 3, name: "India" },
                ]
            },
            {
                id: 2, innerdata: [
                    { id: 4, name: "create" },
                    { id: 5, name: "harpreet" },
                ]
            },
            {
                id: 3, innerdata: [
                    { id: 1, name: "create" },
                    { id: 2, name: "js" },
                    { id: 3, name: "harpreet" },
                ]
            }
        ]
    }
    const array = [20, 20, 40, 30, 50, 50]
    const [choosefile, setChoosefile] = useState(null);
    const updates = React.useRef(0);
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        updates.current++;
    });
    const Updates = ({ updates }) => (
        <h4>{updates}</h4>
    );
    return (
        <>
            <div style={{ padding: '40px' }}>
                   {rowData?.data?.map((item) => {
                    const isIdthree = item.id < 3
                    return (
                        <div>
                            {isIdthree ? item?.innerdata.map(item => (
                                <div>
                                    <span style={{ marginRight: '10px' }}>{item.id}</span>
                                    <span>{item.name}</span>
                                </div>
                            ))
                                :
                                null
                            }
                        </div>
                    )
                })
                }
                <form>
                    <input
                        style={{height:100,border:'1px solid',marginBottom:'20px'}}
                        type="file"
                        accept="images/*"
                        onChange={(e) => setChoosefile(e.target.files[0])}
                    />
                </form>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <input type="text" name="name" {...register('name')} />
                    <input type="password" name="password" {...register('password', {
                        required: true, maxLength: 8
                    })} />
                    <button>Submit</button>
                </form>
                {array?.filter((item, index) => {
                    return array.indexOf(item) === index
                }).map((item) => {
                    return (
                        <p>{item}</p>
                    )
                }
                )}
                <div className="blue-wrapper">
                    <input value={text} placeholder="Write something" onChange={(e) => setText(e.target.value)} />
                    <Updates updates={updates.current} />
                    <br />
                </div>
            </div>

        </>
    )

}
export default UseEffect;