import React from 'react';
import '../../App.css';
const SearchItem = ({searchItem,handleChange,searchResults,rowPerPage,currentPage}) => {
    return (
        <div>
            <input
                type="search"
                id="search"
                placeholder="Search..."
                value={searchItem}
                onChange={handleChange}
                className='searchInput' />
            <table className='search-table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.slice(rowPerPage - 10 * currentPage, currentPage * rowPerPage).map((item, currentPage) => (
                        <tr>
                            <td>{currentPage + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default SearchItem;