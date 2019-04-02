import React, {Component} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import NavigationBar from './NavigationBar';

export default class Girl extends Component {
  // 封装左右侧代码
  renderButton(image){
    return <TouchableOpacity
      onPress={()=>{
        this.props.navigator.pop() // 点击按钮时关闭当前窗口
      }}
    >
      <Image style={{width:22,height:22,margin:5}} source={image}></Image>
    </TouchableOpacity>
  }


  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title='Girl'
          style = {{
            backgroundColor:'#EE6363',
          }}
          leftButton={
            this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))
          }

          rightButton={
            this.renderButton(require('./res/images/ic_star.png'))
          }
        />
        <Text style={styles.text}>I am girl</Text>
        <Text style={styles.text}>我收到了男孩送的:{this.props.what}</Text>
        <Text style={styles.text}
              onPress={()=>{
                this.props.onCallBack('一盒巧克力')
                this.props.navigator.pop()
              }}
        >回赠巧克力</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent:'center'
  },
  text: {
    fontSize: 22,
  }
});
