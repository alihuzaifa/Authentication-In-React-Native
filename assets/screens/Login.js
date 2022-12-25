import React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    Logo: {
        fontSize: 40,
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60
    },
    greet: {
        marginTop: 20,
        paddingLeft: 30,
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 2
    },
    input1: {
        marginHorizontal: 25,
        backgroundColor: "#f1f1f1",
        marginVertical: 7,
        paddingLeft: 8,
        borderRadius: 8,
    },
    input2: {
        marginHorizontal: 25,
        backgroundColor: "#f1f1f1",
        marginVertical: 7,
        paddingLeft: 8,
        borderRadius: 8,
    },
    LoginButton: {
        marginHorizontal: 25,
        borderRadius: 6,
        marginVertical: 5,
    },
    forgot: {
        marginTop: 20,
        textAlign: 'center',
        color: "orange",
        fontWeight: "500"
    },
    otherAuthentication: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 40
    }
})

function Login() {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View>
            <Text style={styles.Logo}> Login </Text>
            <View>
                <Text style={styles.greet}>
                    Welcome!
                </Text>
            </View>
            <SafeAreaView>
                <TextInput
                    style={styles.input1}
                    onChangeText={onChangeText}
                    keyboardType="email-address"
                    value={text}
                    placeholder="Enter Your Email"
                />
                <TextInput
                    style={styles.input2}
                    onChangeText={onChangeNumber}
                    keyboardType="visible-password"
                    value={number}
                    placeholder="Enter Your Password"
                />
            </SafeAreaView>
            <View style={styles.LoginButton}>
                <Button
                    title="Login"
                    color="orange"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <View>
                <Text style={styles.forgot}>
                    Forgot Password?
                </Text>
            </View>
            <View style={styles.otherAuthentication}>
                <View>
                    <Icon.Button
                        name="google"

                        backgroundColor="#4AC217"
                    >
                        Login with Google
                    </Icon.Button>
                </View>
                <View><Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                >
                    Login with Facebook
                </Icon.Button></View>
            </View>
            <View>
                <Text style={{ textAlign: "center" }}>Dont have an account? <Text style={{ color: "orange", fontWeight: "bold", fontSize: 17 }}>Signup</Text></Text>
            </View>
        </View >
    )
}
export default Login;
