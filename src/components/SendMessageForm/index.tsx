import React, { useState } from "react";
import { View, TextInput, Alert, Keyboard } from "react-native";
import { api } from "../../services/api";
import { COLORS } from "../../theme";
import { Button } from "../Button";
import { styles } from "./styles";


export function SendMessageFrom() {
    const [message, setMessage] = useState("");
    const [sendingMessage, setSendMessage] = useState(false);

    async function handleMessageSubmit() {

        const messageFormatted = message.trim();


        if (messageFormatted.length > 0) {
            setSendMessage(true);
            await api.post("/messages", { message: messageFormatted });

            setMessage("");
            Keyboard.dismiss()
            setSendMessage(false);
            
            Alert.alert("Mensagem enviada com sucesso!")

        } else {
            Alert.alert("Escreva a mesagem para enviar.")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Qual sua expectativa para o evento"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                maxLength={140}
                multiline
                keyboardAppearance="dark"
                style={styles.input}
                onChangeText={setMessage}
                value={message}
                editable={!sendingMessage}
            />

            <Button
                title="Enviar mensagem"
                backgroundColor={COLORS.PINK}
                color={COLORS.WHITE}
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
            />

        </View>
    )
}