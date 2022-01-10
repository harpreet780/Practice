import React from 'react';
import ButtonWrap from '../components/Button/Button';
import TableBox from '../components/Table';
import Material from '../components/MaterialUi';
import colors from '../constants/colors'
import UseEffect from '../components/useEffect';
import Rout from '../components/Router';
import Ant from '../components/AntD';
import Practice from '../components/classComponent';
import Toastify from '../components/Toastify';
import SearchTable from '../components/Search';
const Trail = (props) => {
  return (
    <>
    {/* <div>
        <ButtonWrap name="Demo" hideText={false} background={colors.secondary} color={colors.black}/>
        <ButtonWrap name="Text" hideText={true} background={colors.primary} />
    </div> */}
    {/* <Practice/>
    <Toastify/> */}
    <div>
      {/* <Rout/> */}
    {/* <UseEffect/> */}
    </div>
    <div>
      {/* <TableBox/> */}
      {/* <Material/> */}
    </div>
    {/* <Ant/> */}
    <SearchTable/>
    </>
  );
}

export default Trail;
