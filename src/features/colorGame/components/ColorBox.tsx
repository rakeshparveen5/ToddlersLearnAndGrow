import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

interface Props {
    color: string;
    onPress: (color: string) => void;
}

const ColorBox: React.FC<Props> = ({ color, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.box, { backgroundColor: color.toLowerCase() }]}
            onPress={() => onPress(color)}
        />
    );
};

export default ColorBox;

const styles = StyleSheet.create({
    box: {
        width: 120,
        height: 120,
        margin: 10,
        borderRadius: 15,
    },
});