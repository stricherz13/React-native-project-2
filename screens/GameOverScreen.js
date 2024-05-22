import {Button, View, Text, StyleSheet} from "react-native";

function GameOverScreen() {
    return (
        <Text style={styles.title}>Game Over</Text>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
});