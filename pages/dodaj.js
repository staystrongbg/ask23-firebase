import { H1, H2, P } from '../components/utils';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '../components';
import { styled } from '@mui/material/styles';
import { FormControlLabel, FormGroup } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
//#023430
//#00ED64
//#00684A
//#001E2B
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#00ED64',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#00684A',
    },
    '&:hover fieldset': {
      borderColor: '#00ED64',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00ED64',
    },
  },
});

const DodajProizvod = () => {
  // -------------------------------------------------
  // -------------------------------------------------

  //   {
  //     "_id": {
  //       "$oid": "6257d0abc1d4d9a0790c0c2e"
  //     },
  //     "tip": "посластица",
  //     "name": "100 ролни за глод,MIX PAK.9-10MM",
  //     "price": "8",
  //     "detail": "-",
  //     "image": "/artikli/rolne-za-glodanje.jpg",
  //     "novo": false,
  //     "akcija": false,
  //     "title": "глодари",
  //     "link": "glodari"
  //   }
  // -------------------------------------------------
  // -------------------------------------------------
  const noviProizvodRef = useRef(null);
  console.log(noviProizvodRef);
  return (
    <div className=' bg-[#023430] flex items-center justify-center  relative '>
      <P className='absolute border-b-0 left-4 text-[#00ED64] rotate-6'>
        "tip": "посластица",
        <br /> "name": "100 ролни за глод,MIX PAK.9-10MM",
        <br /> "price": "8",
        <br /> "detail": "-",
        <br /> "image": "/artikli/rolne-za-glodanje.jpg",
        <br /> "novo": false,
        <br /> "akcija": false,
        <br /> "title": "глодари",
      </P>
      <div className={` flex flex-col my-40 `}>
        <H1 className='text-[#00ED64]'>Маре царе додај нови производ :)</H1>
        <form className='flex flex-col gap-4 ' ref={noviProizvodRef}>
          <CssTextField
            label='име производа'
            variant='outlined'
            name='ime'
            required
          />
          <CssTextField
            label='тип производа'
            variant='outlined'
            name='tip'
            required
          />
          <CssTextField
            label='врста животиње'
            variant='outlined'
            name='kategorija'
            required
          />
          <CssTextField label='линк слике' variant='outlined' name='image' />
          <CssTextField
            label='цена'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
          />

          <CssTextField
            label='детаљи'
            multiline
            name='details'
            rows={10}
            variant='outlined'
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='ново'
              name='novo'
            />
            <FormControlLabel
              control={<Checkbox />}
              label='акција'
              name='akcija'
            />
          </FormGroup>

          <Button className='bg-[#00ED64]' title='додај' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default DodajProizvod;
