import React from 'react';
import { Menu, Steps, Carousel } from "antd";
import { MailOutlined } from '@ant-design/icons';

const Ant = () => {
    const { SubMenu } = Menu;
    const { Step } = Steps;
    const handleClick = e => {
        console.log('click ', e);
    };
    return (
        <>
            <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.ItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
            <Steps size="small" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
            <div style={{ marginTop: '4em' }}>
                <Carousel autoplay>
                    <div style={{ width: '100%', height: 300, backgroundColor: 'black', color: '#fff', textAlign: 'center' }}>
                        <h3>Carsousel</h3>
                        <p>
                            The functional components are not aware of the other components in your program whereas
                            the class components can work with each other. We can pass data from one class component
                            to other class components.
                        </p>
                    </div>
                    <div style={{ width: '100%', height: 300, backgroundColor: 'black', color: '#fff', textAlign: 'center' }}>
                        <h3>2</h3>
                        <p>
                            The functional components are not aware of the other components in your program whereas
                            the class components can work with each other. We can pass data from one class component
                            to other class components.
                        </p>
                    </div>
                    <div style={{ width: '100%', height: 300, backgroundColor: 'black', color: '#fff', textAlign: 'center' }}>
                        <h3>3</h3>
                        <p>
                            The functional components are not aware of the other components in your program whereas
                            the class components can work with each other. We can pass data from one class component
                            to other class components.
                        </p>
                    </div>
                    <div style={{ width: '100%', height: 300, backgroundColor: 'black', color: '#fff', textAlign: 'center' }}> 
                        <h3>4</h3>
                        <p>
                            The functional components are not aware of the other components in your program whereas
                            the class components can work with each other. We can pass data from one class component
                            to other class components.
                        </p>
                    </div>
                </Carousel>
            </div>
        </>
    )

}
export default Ant;