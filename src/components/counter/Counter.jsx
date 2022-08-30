import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter(props) {

    const { incrementation } = props

    const [value, setValue] = useState(0)

    const handleAdd = () => {
        setValue(p => p + incrementation)
    }

    const handleReset = () => {
        setValue(0)
    }

    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counterValue}>{value}</Text>
            <Button title={ "+" + incrementation} onPress={handleAdd}></Button>
            <Button title="Reset" onPress={handleReset}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        alignItems: "center"
    },
    counterValue: {
        fontSize: 40
    }
})