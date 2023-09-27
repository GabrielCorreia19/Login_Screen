import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    KeyboardAvoiding: {
      flex:1
    },
    container: {
      flex: 1,
      backgroundColor: '#29354B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    userBall: {
      width: 132,
      height: 132,
      bottom: '15%',
      borderRadius: 70,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    userImage: {
      width: 100,
      height: 100
    },
    sectionStyles: {
      flexDirection: 'row',
      backgroundColor: '#6F7887',
      width: "70%",
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: "4%",
    },
    email: {
      flex: 1,
      backgroundColor: '#6F7887',
      marginLeft: 10
    },
    senha: {
      flex: 1,
      backgroundColor: '#6F7887',
      marginLeft: 10
    },
    sectionSignIn: {
      width: '90%',
      height: "10%",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      top: "70%",
      position: "absolute",
    },
    signIn: {
      backgroundColor: '#FFF',
      width: '50%',
      height: 30,
      margin: 55,
      borderRadius: 5,
    },
    textSignIn: {
      color: "red",
      textAlign: 'center',
      marginTop: 5,
    },
    cadastro: {
      backgroundColor: '#6F7887',
      width: '90%',
      height: "6%",
      top: '25%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textCadastro: {
      color: '#FFF',
      textAlign: 'center',
      marginTop: 5,
    }
  
  });

  export default styles;