import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';





export default function Home() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
    
    const [tx, setTx] = useState([{id:1, description:'Florida Credit Union', amount:85},
    {id:2, description:'Insight Credit Union', amount:84},{id:3, description:'VyStar Credit Union - Downtown', amount:76},{id:4, description:'Fairwinds Credit Union', amount:73},{id:5, description:'Orlando Credit Union - SODO', amount:68},])
    const txList = tx.map((data) => {
        return (
         <TouchableOpacity onPress={()=>{Linking.openURL('https://flcu.org/Business?referral=MARIALENDSBA01');}}><View style={{backgroundColor:`${data.amount>80 ? '#bc33a4' : "#ca66ba"}`, width:'90%', alignSelf:'center', borderRadius:10, paddingLeft:'5%', paddingVertical:'5%', flexDirection:'row', display:'flex', marginVertical:'1.5%'}}>
           
              <Text style={{fontFamily:'A', fontSize:17, textAlignVertical:'center', color:'#FFF'}}>{data.description}</Text>
              <Text style={{fontFamily:'A', fontSize:20, textAlignVertical:'center', color:'#FFF', textAlign:'right', alignSelf:'baseline', position:'absolute', top:20, right:20 }}>     {data.amount}</Text>
              </View></TouchableOpacity>
        )
      })

      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ alignSelf:'center', marginTop:'15%', backgroundColor:'#664bd5', width:'90%', borderRadius:10 }}>
              <View style={{marginHorizontal:'5%', marginTop:'7.5%', marginBottom:'6.5%'}}>
                <Image source={require('../assets/chef.jpg')} style={{width:150, height:150, resizeMode:'cover', borderRadius:200, alignSelf:'center'}}></Image>
                <Text style={{fontFamily:'A', fontSize:25, color:'#FFF', textAlign:'left', marginLeft:'5%',marginTop:'5%', alignSelf:'center'}}>Maria B.</Text>
                <Text style={{fontFamily:'A', fontSize:15, color:'#FFF', textAlign:'left', marginLeft:'5%', alignSelf:'center'}}>ZIP Code: 32801</Text>
              </View>
            </View>
           
                <View>
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%', marginLeft:'5%'}}>Recommended Credit Unions</Text>
                <View style={{height:'65%'}}><ScrollView>{txList}</ScrollView></View>
                </View>
                <Image source={require('../assets/ad.jpg')} style={{resizeMode:'contain', width:400, height:70, position:'absolute', zIndex:2, bottom:0, alignSelf:'center'}}></Image>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});