import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {

    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false)
    }

    function gameOverHandler() {
        setGameIsOver(true);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} onGameOver={gameOverHandler}/>;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber}/>;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen/>;
    }

    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground source={require('./assets/images/background.png')} resizeMode={"cover"}
                             style={styles.rootScreen} imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
