import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

function LoginScreen(props) {
    return (
    <SafeAreaView style={styles.container}>
        <View>
        <Text style={styles.title}>
            Click here if you are a client
        </Text>
        <Button
            title="Login as client"
            onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
        <Separator />

        <View>
        <Text style={styles.title}>
        Click here if you are a lawyer
        </Text>
        <Button
            title="Login as Lawyer"
            color="#f194ff"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        </View>
        <Separator />

        <View>
        <Text style={styles.title}>
        Click here if you are a farm
        </Text>
        <Button
            title="Login as Farm"
            color="#27d930"
            onPress={() => Alert.alert('Farm')}
        />
        </View>
        <Separator />

        <View>
        <Text style={styles.title}>
            Don't have an account? Click here to register
        </Text>
        <View style={styles.fixToText}>
            <Button
                title="Register"
                onPress={() => Alert.alert('Register button pressed')}
            />
        </View>
        </View>
        </SafeAreaView>
);
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default LoginScreen;