import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";
import { COLORS } from "../../theme";
import { useAth } from "../../hooks/auth";


export function SigninBox() {

    const { singIn, isSigningIn } = useAth();

    return (
        <View style={styles.container}>

            <Button
                title="Entrar com o GitHub"
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                icon="github"
                onPress={singIn}
                isLoading={isSigningIn}
            />

        </View>
    )
}