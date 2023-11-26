import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, } from "react-native";


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("0");

  const calculate = (title: any) => {
    if(title == 'C'){
      setResult('')
    }else if(title == 'DE'){
      setResult(result.substring(0, result.length - 1))
    }else if(title == '='){
      const ans = Number(eval(result).toFixed(3)).toString()
      setResult(ans)
    }else{
      setResult(result + title)
    }
  }

  const Btn = ({ title, type }: any) => {
    return (
      <TouchableOpacity style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(colors.dark1, colors.light1),
        height: 70,
        width: 70,
        margin: 10,
      }} onPress={() => calculate(title)}>
        <Text style={{
          fontSize: 37,
          textAlign: 'center',
          textAlignVertical: 'center',
          color: getBtnColor(type),
        }}>{title}</Text>
      </TouchableOpacity>
    )
  }

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '272B33',
    light: '#fff',
    light1: '#f1f1f1',
    light2: '#f7f7f7',
    track: '#dfe6e9'
  };

  const getColor = (light: any, dark: any) => darkTheme ? light : dark;

  const getBtnColor = (type: any) => {
    if (type == 'top') {
      return '#35FBD6';
    } else if (type == 'right') {
      return '#EB6363';
    } else {
      return getColor(colors.light, colors.dark);
    }
  };

  return (
    <View style={{
      height: '100%',
      width: '100%',
      paddingVertical: 20,
      backgroundColor: getColor(colors.dark, colors.light),
      alignItems: 'center',
    }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.light, colors.dark)}
        trackColor={{ true: colors.track, false: colors.track }}
      />
      <Text style={{
        fontSize: 40,
        color: getColor(colors.light, colors.dark),
        width: '100%',
        paddingRight: 20,
        textAlign: 'right',
        marginTop: 100,
        paddingBottom: 20
      }}>{result}</Text>

      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: getColor(colors.dark1, colors.light1),
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}>
        <Btn title="C" type='top' />
        <Btn title="DE" type='top' />
        <Btn title="/" type='top' />
        <Btn title="%" type='top' />
        <Btn title="7" type='number' />
        <Btn title="8" type='number' />
        <Btn title="9" type='number' />
        <Btn title="*" type='right' />
        <Btn title="4" type='number' />
        <Btn title="5" type='number' />
        <Btn title="6" type='number' />
        <Btn title="+" type='right' />
        <Btn title="3" type='number' />
        <Btn title="2" type='number' />
        <Btn title="1" type='number' />
        <Btn title="-" type='right' />
        <Btn title="0" type='number' />
        <Btn title="00" type='number' />
        <Btn title="." type='number' />
        <Btn title="=" type='right' />
      </View>
    </View>
  )
}


export default App;