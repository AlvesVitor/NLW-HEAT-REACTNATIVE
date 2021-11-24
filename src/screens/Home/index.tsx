
import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { MessageList } from '../../components/MessageList';
import { SigninBox } from '../../components/SigninBox';
import { SendMessageFrom } from '../../components/SendMessageForm';
import { useAth } from '../../hooks/auth';


export function Home() {
  const { user } = useAth();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Header />

        <MessageList />

        {user ?
          <SendMessageFrom />
          :
          <SigninBox />
        }

      </View>
    </KeyboardAvoidingView>

  );
}

