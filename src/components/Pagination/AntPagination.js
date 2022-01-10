import React from 'react';
import { Pagination } from 'antd';
const AntPagination = ({Paginate}) => {
    return (
        <div>
            <Pagination
                defaultCurrent={1}
                total={20}
                defaultPageSize={10}
                onChange={Paginate}
            />
        </div>
    );
};


export default AntPagination;