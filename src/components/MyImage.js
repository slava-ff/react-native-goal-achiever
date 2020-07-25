import React from 'react';
import {Image} from 'react-native';

const MyImage = ({imgName, style}) => {
  const iconNames = {
    cat_1: (
      <Image source={require('../assets/iconsPNG/cat_1.png')} style={style} />
    ),
    cat_2: (
      <Image source={require('../assets/iconsPNG/cat_2.png')} style={style} />
    ),
    cat_3: (
      <Image source={require('../assets/iconsPNG/cat_3.png')} style={style} />
    ),
    cat_4: (
      <Image source={require('../assets/iconsPNG/cat_4.png')} style={style} />
    ),
    cat_5: (
      <Image source={require('../assets/iconsPNG/cat_5.png')} style={style} />
    ),
    cat_6: (
      <Image source={require('../assets/iconsPNG/cat_6.png')} style={style} />
    ),
    cat_7: (
      <Image source={require('../assets/iconsPNG/cat_7.png')} style={style} />
    ),
    cat_8: (
      <Image source={require('../assets/iconsPNG/cat_8.png')} style={style} />
    ),
    cat_9: (
      <Image source={require('../assets/iconsPNG/cat_9.png')} style={style} />
    ),
    cat_10: (
      <Image source={require('../assets/iconsPNG/cat_10.png')} style={style} />
    ),
    cat_11: (
      <Image source={require('../assets/iconsPNG/cat_11.png')} style={style} />
    ),
    cat_12: (
      <Image source={require('../assets/iconsPNG/cat_12.png')} style={style} />
    ),
    cat_13: (
      <Image source={require('../assets/iconsPNG/cat_13.png')} style={style} />
    ),
    cat_14: (
      <Image source={require('../assets/iconsPNG/cat_14.png')} style={style} />
    ),
    cat_15: (
      <Image source={require('../assets/iconsPNG/cat_15.png')} style={style} />
    ),
    cat_16: (
      <Image source={require('../assets/iconsPNG/cat_16.png')} style={style} />
    ),
    cat_17: (
      <Image source={require('../assets/iconsPNG/cat_17.png')} style={style} />
    ),
    cat_18: (
      <Image source={require('../assets/iconsPNG/cat_18.png')} style={style} />
    ),
    cat_19: (
      <Image source={require('../assets/iconsPNG/cat_19.png')} style={style} />
    ),
    cat_20: (
      <Image source={require('../assets/iconsPNG/cat_20.png')} style={style} />
    ),
    cat_21: (
      <Image source={require('../assets/iconsPNG/cat_21.png')} style={style} />
    ),
    cat_22: (
      <Image source={require('../assets/iconsPNG/cat_22.png')} style={style} />
    ),
    cat_23: (
      <Image source={require('../assets/iconsPNG/cat_23.png')} style={style} />
    ),
    cat_24: (
      <Image source={require('../assets/iconsPNG/cat_24.png')} style={style} />
    ),
    cat_25: (
      <Image source={require('../assets/iconsPNG/cat_25.png')} style={style} />
    ),
    cat_26: (
      <Image source={require('../assets/iconsPNG/cat_26.png')} style={style} />
    ),
    cat_27: (
      <Image source={require('../assets/iconsPNG/cat_27.png')} style={style} />
    ),
    cat_28: (
      <Image source={require('../assets/iconsPNG/cat_28.png')} style={style} />
    ),
    cat_29: (
      <Image source={require('../assets/iconsPNG/cat_29.png')} style={style} />
    ),
    cat_30: (
      <Image source={require('../assets/iconsPNG/cat_30.png')} style={style} />
    ),
    cat_31: (
      <Image source={require('../assets/iconsPNG/cat_31.png')} style={style} />
    ),
    cat_32: (
      <Image source={require('../assets/iconsPNG/cat_32.png')} style={style} />
    ),
    cat_33: (
      <Image source={require('../assets/iconsPNG/cat_33.png')} style={style} />
    ),
    cat_34: (
      <Image source={require('../assets/iconsPNG/cat_34.png')} style={style} />
    ),
    cat_35: (
      <Image source={require('../assets/iconsPNG/cat_35.png')} style={style} />
    ),
    cat_36: (
      <Image source={require('../assets/iconsPNG/cat_36.png')} style={style} />
    ),
    cat_37: (
      <Image source={require('../assets/iconsPNG/cat_37.png')} style={style} />
    ),
    cat_38: (
      <Image source={require('../assets/iconsPNG/cat_38.png')} style={style} />
    ),
    cat_39: (
      <Image source={require('../assets/iconsPNG/cat_39.png')} style={style} />
    ),
    cat_40: (
      <Image source={require('../assets/iconsPNG/cat_40.png')} style={style} />
    ),
    cat_41: (
      <Image source={require('../assets/iconsPNG/cat_41.png')} style={style} />
    ),
    cat_42: (
      <Image source={require('../assets/iconsPNG/cat_42.png')} style={style} />
    ),
    cat_43: (
      <Image source={require('../assets/iconsPNG/cat_43.png')} style={style} />
    ),
    cat_44: (
      <Image source={require('../assets/iconsPNG/cat_44.png')} style={style} />
    ),
    cat_45: (
      <Image source={require('../assets/iconsPNG/cat_45.png')} style={style} />
    ),
    cat_46: (
      <Image source={require('../assets/iconsPNG/cat_46.png')} style={style} />
    ),
    cat_47: (
      <Image source={require('../assets/iconsPNG/cat_47.png')} style={style} />
    ),
    cat_48: (
      <Image source={require('../assets/iconsPNG/cat_48.png')} style={style} />
    ),
    cat_49: (
      <Image source={require('../assets/iconsPNG/cat_49.png')} style={style} />
    ),
    cat_50: (
      <Image source={require('../assets/iconsPNG/cat_50.png')} style={style} />
    ),
    cat_51: (
      <Image source={require('../assets/iconsPNG/cat_51.png')} style={style} />
    ),
    cat_52: (
      <Image source={require('../assets/iconsPNG/cat_52.png')} style={style} />
    ),
    cat_53: (
      <Image source={require('../assets/iconsPNG/cat_53.png')} style={style} />
    ),
    cat_54: (
      <Image source={require('../assets/iconsPNG/cat_54.png')} style={style} />
    ),
    cat_55: (
      <Image source={require('../assets/iconsPNG/cat_55.png')} style={style} />
    ),
    cat_56: (
      <Image source={require('../assets/iconsPNG/cat_56.png')} style={style} />
    ),
  };

  let image;

  if (imgName) {
    image = iconNames[imgName];
  } else {
    image = <Image style={style} />;
  }

  return image;
};

export default MyImage;
