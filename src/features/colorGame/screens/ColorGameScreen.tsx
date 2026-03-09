import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { correctAnswer, wrongAnswer } from "../slice/colorGameSlice";
import ColorBox from "../components/ColorBox";
import { speakCorrect, speakWrong } from "../../../utils/tts";

const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Black", "White"];

const ColorGameScreen: React.FC = () => {
    const dispatch = useDispatch();
    const { targetColor, score } = useSelector(
        (state: RootState) => state.colorGame
    );

    const handlePress = (color: string) => {
        if (color === targetColor) {
            speakCorrect(targetColor);
            dispatch(correctAnswer());
        } else {
            speakWrong(targetColor);
            dispatch(wrongAnswer());
        }
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>Tap the color: {targetColor}</Text>
            <Text style={styles.score}>Score: {score}</Text>


            <View style={styles.grid}>
                {colors.map((c) => (
                    <ColorBox key={c} color={c} onPress={handlePress} />
                ))}
            </View>
        </ScrollView>
    );
};

export default ColorGameScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e9f6fb",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
    },
    score: {
        fontSize: 20,
        marginVertical: 10,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
});