import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Alert } from "react-native-web";


export default function Home (){

    let [Valor, setValor] = useState();   
    let [msg, setMsg] = useState();
    //let [total, setTotal] = useState();

    function CalcularTotal(){

        let resultado = Valor % 2;
        //setTotal(resultado);

        if(resultado == 0) {

            alert(" O número é Par");            
        }
        else{
            alert(" O número é Impar");
        };


    }

    return(
        <View style= {styles.container}>
            <Text style= {styles.titulo}><i><u>App Impar ou Par?</u></i></Text>

            <TextInput onChangeText={setValor} style= {styles.campo} placeholder="Digite o número"/>

            <TouchableOpacity style= {styles.botao} onPress={CalcularTotal}>
                <Text style= {styles.botaoTexto}><i>Impar ou par?</i></Text>
            </TouchableOpacity>

        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFB6C0',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',        
    },

    titulo:{
        fontSize:30,
        color:'#000',
        fontWeight:'bold',
        marginBottom: 40,
    },

    campo:{
        backgroundColor:'#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width:300,
        borderRadius: 10,
        textAlign: 'center',
        
    },

    botao:{
        backgroundColor:'#FFFF66',
        alignItems: 'center',
        padding: 15,
        borderRadius:7,
        marginTop: 20,
        widht: 250
    },

    botaoTexto: {
        color: "",
        fontSize:17,
        fontWeight: "700",

    }
});


