import { Icon } from "@rneui/themed";
import {Entypo} from '@expo/vector-icons';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from "./style";

export default function App() {

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.KeyboardAvoiding}>
    <SafeAreaView style={styles.container}
    >
      <View style={styles.userBall}>
        <Icon
          name='person'
          size={110}
        />
      </View>
      <View style={styles.sectionStyles}>
        <Icon
          name='person'
          size={25}
          color={"#FFF"}
          marginLeft={5}
        />
        <TextInput style={styles.email}
          placeholder='EMAIL'
          color='#FFF'
          placeholderTextColor={"#FFF"}
          selectionColor={"#023047"}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={styles.sectionStyles}>
        <Icon
          name='lock'
          size={25}
          color={"#FFF"}
          marginLeft={5}
        />
        <TextInput style={styles.senha}
          placeholder='PASSWORD'
          secureTextEntry={true}
          color='#FFF'
          selectionColor={"#023047"}
          placeholderTextColor={"#FFF"} />
      </View>

      <View style={styles.sectionSignIn}>
       <Entypo
       name="magnifying-glass"
       size={30}
       color={"#FFF"}
       />
      <TouchableOpacity style={styles.signIn}>
        <Text style={styles.textSignIn}>SIGN IN</Text>
      </TouchableOpacity>
      <Entypo name="cog" size={30} color={"#FFF"} style={{}}/>
      </View>
      <TouchableOpacity style={styles.cadastro}>
        <Text style={styles.textCadastro}>CREATE AN ACCOUNT</Text>
      </TouchableOpacity>
    </SafeAreaView>

    </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

