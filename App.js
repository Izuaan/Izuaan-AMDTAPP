import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';
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
    const todos= this.state.todos.reverse().map((todo,key)) =>
    <View style{{ flexDirection:'row', marginTop: 20}}>
      <TouchableOpacity style= {{
        width:20,
        height:20,
        borderRadius: 15, 
        borderWidth: 3,
        borderColor:'white',
        margin: 15,
      }}>
        </TouchableOpacity>
        <Text style={{ paddingLeft: 5, magtinTop:10, fontSize:28, color:"white",}}>{todo.title}
      </View>
      );
      
    return ( 
        <LinearGradient colors={['#527f9e', '#24386f']} style={{flex:1}}>
        <StatusBar barStyle="light-content" />
        <View>
          <TextInput 
          style={styles.input}
          onSubmitEditing={this.addItem}
          onChangeText={this.changetext}
          placeholder= "Add a thing to do"
          value={this.state.inputValue}
          placeholderTextColor={'#fff'}
          multiline={true}
          autoCapitalize="sentences"
          underlineColorAndroid="transparent"
          selectionColor={"white"}
          maxLength={30}
          returnKeyType="done"
          autoCorrect={false}
          blurOnSubmit={true}
        />
        </View>
        </LinearGradient>
    );
  }
}

const styles = {
  input:
  {
    marginTop:30,
    paddingTop:10,
    paddingRight:15,
    paddingLeft:15,
    fontSize:29,
    color:"white",
    fontWeight: '500'
  }
}


















