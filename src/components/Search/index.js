import React, { useState, useEffect } from 'react';
import AntPagination from '../Pagination/AntPagination';
import SearchItem from '../Table/Table';

const SearchTable = () => {
    const [searchItem, setSearchItem] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchItem(event.target.value);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const Paginate = (e) => {
        setCurrentPage(e);
    }
    const [rowPerPage, setRowperPage] = useState(10);
    const rowData = {
        data: [
            { id: 0, name: 'vishal', status: 'pending', country: "India" },
            { id: 2, name: 'harpreet', status: 'success', country: "America" },
            { id: 3, name: 'sumit', status: 'success', country: "Portugal" },
            { id: 4, name: 'manav', status: 'Failed', country: "England" },
            { id: 5, name: 'vibhu', status: 'pending', country: "Ireland" },
            { id: 6, name: 'manjinder', status: 'pending', country: "Russia" },
            { id: 7, name: 'attar', status: 'failed', country: "Canada" },
            { id: 8, name: 'shivani', status: 'success', country: "New-zealand" },
            { id: 9, name: 'navneet', status: 'pending', country: "Austrila" },
            { id: 10, name: 'avneet', status: 'failed', country: "Dubai" },
            { id: 11, name: 'gurpreet', status: 'pending', country: "NetherLand" },
            { id: 12, name: 'amit', status: 'success', country: "Africa" },
            { id: 13, name: 'saswati', status: 'Failed', country: "Iraq" },
            { id: 14, name: 'preet', status: 'success', country: "Bangladesh" },
            { id: 15, name: 'gopi', status: 'failed', country: "Germany" },
            { id: 16, name: 'happy', status: 'failed', country: "Italy" },
            { id: 17, name: 'amit', status: 'success', country: "China" },
            { id: 18, name: 'Prem', status: 'Failed', country: "Japan" },
            { id: 19, name: 'abhi', status: 'pending', country: "Thailand" },
            { id: 20, name: 'karan', status: 'Failed', country: "Singapur" },
        ]
    }
    useEffect(() => {
        const results = rowData?.data?.filter(item =>
            item?.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
        );
        setSearchResults(results);
    }, [searchItem]);
    return (
        <div className='seachWrap'>
            <SearchItem
                searchItem={searchItem}
                handleChange={handleChange}
                searchResults={searchResults}
                rowPerPage={rowPerPage}
                currentPage={currentPage} />
            <div className='pagination'>
                <AntPagination Paginate={Paginate} />
            </div>
        </div>
    );
};


export default SearchTable;