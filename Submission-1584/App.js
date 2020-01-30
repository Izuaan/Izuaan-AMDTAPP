import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state = {
    inputValue: '',
    todos: []
  };

    changeText= value => {
      this.setState({
        inputValue:value
      });
    }

      addItem = () => {
        if (this.state.inputValue !== '') {
          this.setState(prevState => {
            const newToDo = {
              title: this.state.inputValue,
              createdAt: Date.now(),
            };
            
            var todos = this.state.todos.concat(newToDo);

            this.setState({
              todos:todos,
            });
          });
        }
      };

  render() {
    const todos= this.state.todos.reverse().map((todo, key) =>
    <View style={styles.viewo}>
    <Image style ={styles.img} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
      <TouchableOpacity style= {styles.check}>
        </TouchableOpacity>
        <Text style={styles.pinput}>{todo.title} </Text>
      </View>
    );
    return ( 
        <LinearGradient colors={['#527f9e', '#24386f']} style={{flex:1}}>
        <StatusBar barStyle="light-content" />
        <View>
          <TextInput 
          style={styles.input}
          onSubmitEditing={this.addItem}
          onChangeText={this.changeText}
          placeholder= "Type here to add a to do."
          value={this.state.inputValue}
          placeholderTextColor={"white"}
          multiline={true}
          autoCapitalize="sentences"
          underlineColorAndroid="transparent"
          spellCheck={true}
          selectionColor={"black"}
          maxLength={30}
          returnKeyType="done"
          autoCorrect={true}
          blurOnSubmit={true}
        />
        </View>
        <View styles={styles.pinput}>
        {todos}
        </View>
        </LinearGradient>
    );
  }
}

const styles = {
  viewo:
  {
    flexDirection:'row',
    marginTop: 20
  },

  
  img:
  {
    height:25,
    width:25
  },
  check:
  {
     width:10,
    height:10,
    borderRadius: 15, 
    borderWidth: 1,
    borderColor:'blue',
    margin:8
  },
  pinput:
  {
    color: "red",
    fontWeight:"bold",
    fontSize:15

  },
  input:
  {
    marginTop:30,
    paddingTop:10,
    paddingRight:15,
    paddingLeft:15,
    fontSize:15,
    color:"blue",
    fontWeight: '500'
  }
}