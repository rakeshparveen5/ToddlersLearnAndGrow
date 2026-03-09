import Tts from "react-native-tts";

let ttsReady = false;

export const initTTS = async () => {
    try {
        await Tts.getInitStatus();

        Tts.setDefaultLanguage("en-US");
        Tts.setDefaultRate(0.5);
        Tts.setDefaultPitch(1.2);

        ttsReady = true;
    } catch (error) {
        console.log("TTS initialization error:", error);
    }
};

export const speak = (text: string) => {
    if (!ttsReady) {
        console.log("TTS not ready yet");
        return;
    }
    Tts.stop();
    Tts.speak(text);
};

export const speakCorrect = (color: string) => {
    if (!ttsReady) {
        console.log("TTS not ready yet");
        return;
    }
    Tts.stop();
    Tts.speak(`Great job! This is ${color}`);
};

export const speakWrong = (targetColor: string) => {
    if (!ttsReady) {
        console.log("TTS not ready yet");
        return;
    }
    Tts.stop();
    Tts.speak(`Oops! Try again. Find ${targetColor}`);
};