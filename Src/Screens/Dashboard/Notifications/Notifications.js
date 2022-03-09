import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class Notifications extends Component {
  
  render() {
    return (
      
<SafeAreaView style={styles.safearea} >
    <View style={{flexDirection:'row'}}>
    
<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#000000',marginLeft:35, marginTop:25, marginBottom:25}}>
    <Text style={{color:'#FFFFFF', fontSize:26, fontFamily:'Gilroy-Bold', fontWeight:'bold'}}>Notifications</Text>
</View>
</View>
<View style={styles.container}>


<View style={{backgroundColor:'#fff', flex:1, borderTopRightRadius:35,borderTopLeftRadius:35}}> 

<View style={{marginLeft:114, marginTop:50}}>
<Text style={{fontFamily:'Gilroy-Bold',color:'#000000', opacity:1,fontSize:15,fontWeight:'bold'}}>Core Concentrate</Text>
  </View>

<View style={{marginLeft:114, marginTop:10}}>
<Text style={{color:'#848A8D', fontFamily:'Gilroy-Medium', fontSize:12,opacity:1}}>You're connected! Chat now</Text>
  </View>
<ScrollView   showsVerticalScrollIndicator={false}
>

<TouchableOpacity 

style={{ marginTop:50,flexDirection:'row'}}>
<View style={{height:66,width:66,borderColor:'#00A69C', borderWidth:2, marginLeft:27,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
  
  <Image
    source={require('../../../assets/images/newLogo.jpeg')}
resizeMode='contain'
style={{width:66,height:66}}
    />
</View>

<View style={{marginLeft:20}}>
  <View style={{ marginTop:10  }}>
<Text style={{fontFamily:'Gilroy-Bold',color:'#000000', opacity:1,fontSize:15,fontWeight:'bold'}}>Cozy Floor</Text>
</View>

<View style={{ marginTop:10}}>
<Text style={{color:'#848A8D', fontFamily:'Gilroy-Medium', fontSize:12,opacity:1, fontWeight:'bold'}}>I can come tommorrow</Text>
</View>

  </View> 
</TouchableOpacity>

<TouchableOpacity 
style={{ marginTop:50,flexDirection:'row'}}>
<View style={{height:66,width:66,borderColor:'#00A69C', borderWidth:2, marginLeft:27,borderRadius:100, alignItems:'center', justifyContent:'center'}}>
  <Image
    source={require('../../../assets/images/newLogo.jpeg')}
resizeMode='contain'
style={{width:66,height:66}}
    />
</View>

<View style={{marginLeft:20}}>
  <View style={{ marginTop:10  }}>
<Text style={{fontFamily:'Gilroy-Bold',color:'#000000', opacity:1,fontSize:15,fontWeight:'bold'}}>Core Concentrate</Text>
</View>

<View style={{ marginTop:10}}>
<Text style={{color:'#848A8D', fontFamily:'Gilroy-Medium', fontSize:12,opacity:1, fontWeight:'bold'}}>You're connected! Chat now</Text>
</View>

  </View> 
</TouchableOpacity>

<TouchableOpacity
style={{ marginTop:50,flexDirection:'row'}}>

<View style={{height:66,width:66,borderColor:'#00A69C', borderWidth:2, marginLeft:27,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
  <Image
    source={require('../../../assets/images/newLogo.jpeg')}
resizeMode='contain'
style={{width:66,height:66}}
    />
</View>

<View style={{marginLeft:20}}>
  <View style={{ marginTop:10  }}>
<Text style={{fontFamily:'Gilroy-Bold',color:'#000000', opacity:1,fontSize:15,fontWeight:'bold'}}>Cozy Floor</Text>
</View>

<View style={{ marginTop:10}}>
<Text style={{color:'#848A8D', fontFamily:'Gilroy-Medium', fontSize:12,opacity:1, fontWeight:'bold'}}>I can come tommorrow</Text>
</View>

  </View> 
</TouchableOpacity>
<TouchableOpacity
style={{ marginTop:50,flexDirection:'row'}}>
<View style={{height:66,width:66,borderColor:'#00A69C', borderWidth:2, marginLeft:27,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
  <Image
    source={require('../../../assets/images/newLogo.jpeg')}
resizeMode='contain'
style={{width:66,height:66}}
    />
</View>

<View style={{marginLeft:20}}>
  <View style={{ marginTop:10  }}>
<Text style={{fontFamily:'Gilroy-Bold',color:'#000000', opacity:1,fontSize:15,fontWeight:'bold'}}>Core Concentrate</Text>
</View>

<View style={{ marginTop:10}}>
<Text style={{color:'#848A8D', fontFamily:'Gilroy-Medium', fontSize:12,opacity:1, fontWeight:'bold'}}>You're connected! Chat now</Text>
</View>

  </View> 
</TouchableOpacity>

</ScrollView>
</View>





    
</View>




</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor:'#000000',
    justifyContent: 'center',
  },
 container:{
   flex: 1,
    justifyContent: 'center',
    
    backgroundColor:'#000000'
 },
bottomcontainer:{
height:71,
width:421,
backgroundColor:'#fff',
padding:1,
},
  bottomcontainerchild:{
justifyContent:'space-between',
flexDirection:'row',
marginLeft:25,
marginRight:25
  },
  bottomcontainerchildinner5:{marginRight:25, marginTop:19, alignItems:'center',
justifyContent:'center'},
  bottomcontainerchildinner:{
marginTop:15,
alignItems:'center',
justifyContent:'center'
  },
child:{
marginTop:7
},
childtext:{
fontSize:11,
fontWeight:'bold',
fontFamily:'Gilroy-Medium',
color:'#232F3F',
alignItems:'center',
justifyContent:'center'
},


})