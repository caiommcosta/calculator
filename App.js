import React, { useState, useEffect, memo } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Buttons from './src/Buttons';



export default function App() {
  console.disableYellowBox = true;


  const [memory, setMemory] = useState("");
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState("");

  const [strCalc, setStrCalc] = useState("0");

  var number = [];

  for (let i = 0; i <= 9; i++) {
    number.push(i);
  }

  function calculator(n) {
    if (operator == "") {
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStrCalc(parseInt(firstNumber.toString() + n.toString()));
    }

    if (n == "+" || n == "-" || n == "/" || n == "*" && secondNumber == 0) {
      setStrCalc(firstNumber.toString() + n);
      setOperator(n);
    }

    if (operator != "") {
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStrCalc(firstNumber + operator + parseInt(secondNumber.toString() + n.toString()));
    }

    if (n == "=") {
      let result = 0;

      if (operator == "") {
        result = firstNumber;
      } else if (operator == "+") {
        result = firstNumber + secondNumber;
      } else if (operator == "-") {
        result = firstNumber - secondNumber;
      } else if (operator == "/") {
        result = firstNumber / secondNumber;
      } else {
        result = firstNumber * secondNumber;
      }

      memoryFunc();
      setStrCalc(result);
      setFirstNumber(result);
      setSecondNumber(0);
      setOperator("");
    }
  }

  function erase() {
    setFirstNumber(0);
    setSecondNumber(0);
    setOperator("");
    setStrCalc("0");
    setMemory("");
  }

  function memoryFunc() {
    if (operator != "")
      return setMemory(firstNumber.toString() + operator.toString() + secondNumber.toString() + "=");

    return setMemory(firstNumber.toString() + "=");
  }

  
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.top}>
        <Text style={styles.operationMemory}>{memory}</Text>
        <Text style={styles.result}>{strCalc} </Text>
      </View>
      <View style={styles.operators}>
        <TouchableOpacity onPress={() => calculator("+")} style={styles.singleOperator}><Text style={styles.text}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => calculator("-")} style={styles.singleOperator}><Text style={styles.text}>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => calculator("/")} style={styles.singleOperator}><Text style={styles.text}>/</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => calculator("*")} style={styles.singleOperator}><Text style={styles.text}>*</Text></TouchableOpacity>
      </View>
      <View style={styles.numbers}>
        {
          number.slice(0).reverse().map(function (e) {
            return (
              <Buttons calculator={calculator} number={e}></Buttons>
            )
          })
        }
      </View>
      <View style={styles.ActionsLeft}>
        <TouchableOpacity onPress={() => erase()} style={styles.actions}><Text style={styles.text}>C</Text></TouchableOpacity>
      </View>
      <View style={styles.ActionsRight}>
        <TouchableOpacity onPress={() => calculator("=")} style={styles.actions}><Text style={styles.equal}>=</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4287f5'
  },
  top: {
    padding: 10,
    borderBottomColor: '#454545',
    borderBottomWidth: 2,
    backgroundColor: 'white',
    height: '33.3%',
    justifyContent: 'flex-end',
    paddingLeft: 20
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  },
  result: {
    fontSize: 60,
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#454545'
  },
  operationMemory: {
    fontSize: 30,
    textAlign: 'right',
    color: '#454545'
  },
  operators: {
    flexDirection: 'row',
    height: '16.6%',
    alignItems: 'center',
  },
  singleOperator: {
    width: '25%',
    borderRightColor: '#769fe3',
    borderRightWidth: 1,
    borderLeftColor: '#769fe3',
    borderLeftWidth: 1,
    height: '100%',
    justifyContent: 'center'
  },
  numbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopColor: '#e8e8e8',
    borderTopWidth: 2,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ActionsLeft: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    width: '33.3%',
    bottom: 0,
    left: 0,
    height: '12.5%',
    borderWidth: 1,
    borderColor: '#769fe3'
  },
  ActionsRight: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    width: '33.3%',
    bottom: 0,
    right: 0,
    height: '12.5%',
    borderWidth: 1,
    borderColor: '#769fe3'
  },
  actions: {
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#4287f5',
  },
  equal: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40
  }
});
