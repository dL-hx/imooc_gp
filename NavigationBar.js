import React, {Component } from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Image, Platform,StatusBar} from 'react-native';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape = {
  backgroundColor:PropTypes.string,
  barStyle:PropTypes.oneOf(['default','light-content', 'dark-content']),
  hidden:PropTypes.bool
}
export default class NavigationBar extends Component {
  static propTypes = { // 指定属性的约束
    style:PropTypes.style,
    title:PropTypes.string,
    titleView:PropTypes.element,  // 设置 titileView 为元素
    hide:PropTypes.bool,// 设置鼠标隐藏
    leftButton:PropTypes.element, // 左右侧按钮
    rightButton:PropTypes.element,
    statusBar: PropTypes.shape(StatusBarShape) // 允许用户指定状态栏,约束形状
  }

  static defaultProps = {
    statusBar:{
      barStyle:'light-content',
      hidden:false
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      hide:false
    };
  }

  render() {
    let status = <View style={[styles.statusBar,this.props.statusBar]}>
      <StatusBar {...this.props.statusBar}/>
    </View>
    let titleView = this.props.titleView?this.props.titleView:
      <Text style={styles.title}>{this.props.title}</Text>
    let content = <View style={styles.navBar}>
      {this.props.leftButton}
      <View style={styles.titleViewContainer}>
        {titleView}
      </View>
      {this.props.rightButton}
    </View>
    return (
      <View style={[styles.container, this.props.style]}>
        {status}
       {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  navBar:{
    justifyContent:'space-between',// 两侧空格
    alignItems:'center', // 文字居中显示
    height:Platform.OS ==='ios' ?NAV_BAR_HEIGHT_IOS :NAV_BAR_HEIGHT_ANDROID,// 指定高度
    // backgroundColor: 'red',
    flexDirection:'row'// 文字显示在一排
  },
  titleViewContainer:{
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    left:40,
    right:40,
    top:0,
    bottom:0
  },
  title:{
    fontSize:20,
    color:'white'
  },
  statusBar:{
    height:Platform.OS ==='ios' ?STATUS_BAR_HEIGHT :0,// 指定高度
  }
});
