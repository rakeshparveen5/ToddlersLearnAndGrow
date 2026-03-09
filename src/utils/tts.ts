import Tts from "react-native-tts";

// Optional: slower rate for kids
Tts.setDefaultLanguage("en-US");
Tts.setDefaultRate(0.5);
Tts.setDefaultPitch(1.2);

export const speakCorrect = (color: string) => {
    Tts.stop();
    Tts.speak(`Great job! This is ${color}`);
};

export const speakWrong = (targetColor: string) => {
    Tts.stop();
    Tts.speak(`Oops! Try again. Find ${targetColor}`);
};