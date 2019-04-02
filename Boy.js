import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Girl from './Girl';
import NavigationBar from './NavigationBar';
export default class Boy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      what:''
    };
  }

  render() {
    let what = this.state.what===''?'':'我收到了女孩回赠的:' + this.state.what;
    return (
      <View style={styles.container}>
        <NavigationBar
          title='Boy'
          style = {{
            backgroundColor:'red',
          }}
        />
        <Text style={styles.tips}>I am boy</Text>
        <Text style={styles.tips}
          onPress={()=>{
            this.props.navigator.push({
              component:Girl,
              params:{
                what: '一支玫瑰',
                onCallBack:(what) => {
                  this.setState({
                    what:what ,
                  });
                }
              }
            })
          }}
        >送女孩一支玫瑰</Text>
        <Text style={styles.text}>{this.state.word}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  tips: {
    fontSize: 29,
  }
});
