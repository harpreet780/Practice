import React from 'react';
import { TableWrap } from './style';
const TableBox = () => {
    const rowData = {
        data: [
            {
                id: 1, innerdata: [
                    { id: 1, name: "harpreet" },
                    { id: 1, name: "js" },
                    { id: 1, name: "India" },
                ]
            },
            {
                id: 2, innerdata: [
                    { id: 1, name: "create" },
                    { id: 1, name: "harpreet" },
                ]
            }
        ]
    }
    const cities = {
        city: [
            { name: 'Los Angeles', population: 3792621, country: "India" },
            { name: 'Houston', population: 2099451, country: "India" },
            { name: 'Philadelphia', population: 1526006, country: "India" },
            { name: 'India', population: 2526006, country: "India" },
            { name: 'Canada', population: 2026006, country: "India" },
        ]
    }
    // const person = {
    //     Name: 'John',
    //     lastName: 'Doe'
    // };
    // const conversion=Object.entries(person);
    // console.log(conversion);
    return (
        <>
            <TableWrap>
                <table className="table">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Country</th>
                    </tr>
                    <tbody>
                        {rowData?.data?.map((item, index) => {
                            return <tr>
                                <td> {index + 1}</td>
                                {item?.innerdata.map((item) => {
                                    return <td>
                                        {item.name}
                                    </td>
                                })
                                }
                            </tr>
                        })
                        }
                    </tbody>
                </table>
                <table className="table" style={{ marginTop: '40px' }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Identity Number</th>
                            <th>Name</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {cities?.city?.filter(item => item.population < 3000000 */}
                        {/* {cities?.city?.splice(2,1,"indiiiaaaaa")?.map((item, index) => { */}
                        {cities?.city?.slice(1).map((item, index) => {
                            return <tr>
                                <td> {index + 1}</td>
                                <td>
                                    {item.population}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.country}
                                </td>
                            </tr>
                        })
                        }
                        {/* {rowData?.data?.filter((item) => {
                            return item.innerdata.length === 2
                        }).map((item, index) => {
                            return <tr>
                                <td> {index + 1}</td>
                                {item?.innerdata.map((item) => {
                                    return <td>
                                        {item.name}
                                    </td>
                                })
                                }
                            </tr>
                        })
                        } */}
                    </tbody>
                </table>
            </TableWrap>
        </>
    )
}
export default TableBox;