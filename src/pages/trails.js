import React from 'react';
import ButtonWrap from '../components/Button/Button';
import TableBox from '../components/Table';
import Material from '../components/MaterialUi';
import colors from '../constants/colors'
import UseEffect from '../components/useEffect';
import Rout from '../components/Router';
import Ant from '../components/AntD';
import Practice from '../components/classComponent';
const Trail = (props) => {
  return (
    <>
    {/* <div>
        <ButtonWrap name="Demo" hideText={false} background={colors.secondary} color={colors.black}/>
        <ButtonWrap name="Text" hideText={true} background={colors.primary} />
    </div> */}
    <Practice/>
    <div>
      {/* <Rout/> */}
    {/* <UseEffect/> */}
    </div>
    <div>
      {/* <TableBox/> */}
      {/* <Material/> */}
    </div>
    {/* <Ant/> */}
    </>
  );
}

export default Trail;
