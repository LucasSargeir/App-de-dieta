import React from 'react'
import { Text, View } from 'react-native';
import * as Linking from 'expo-linking';

interface DataProps{
    href: string;
   // onPress: ()=>{};
}

const Anchor:React.FC<DataProps> = (props) => {

    const _handlePress = () => {
        Linking.openURL(props.href);
        //props.onPress && props.onPress();
    };

  return(  

      <View onTouchEnd={_handlePress}>
        {props.children}
      </View>

    );
}

export default Anchor;