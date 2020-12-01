import React, {useContext, useEffect} from 'react'
import Styled from 'styled-components/native'
import {Linking} from 'react-native'
import SplashScreen  from 'react-native-splash-screen'
import {StackNavigationProp} from '@react-navigation/stack'

import {UserContext} from '-/Context/User'

import Input from '-/Components/Inputs'
import Button from '-/Components/Button'

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #141414;
    align-items: center;
    justify-content: center;
`

const FormContainer = Styled.View`
    width: 100%;
    padding: 40px;
`
//비밀번호 재설정 컴포넌트
const PasswordReset = Styled.Text`
    width: 100%;
    font-size: 12px;
    color: #FFFFFF;
    text-align: center;
`
//navigator를 사용하기 위해서는 props를 받아야 한다.
type NavigationProp = StackNavigationProp<LoginNaviParamList,'Login'>

interface Props {
    navigation: NavigationProp;
}

const Login = ({navigation} : Props) => {
    const {login} = useContext<IUserContext>(UserContext)
    useEffect(() => {
        SplashScreen.hide()
    },[])

    return(
        <Container>
            <FormContainer>
                <Input style={{marginBottom: 16}} placeholder="이메일" />
                <Input 
                    style={{marginBottom: 16}} 
                    placeholder="비밀번호"
                    secureTextEntry={true} 
                />
                <Button
                    style={{marginBottom: 24}}
                    label="로그인"
                    onPress={()=>{
                        login('dev','dev')
                    }}
                />
                <PasswordReset
                    onPress={() => {
                        //비밀번호 재설정으로 지금은 새로운 URL로 보내기위해 만들었고 대충 아무대나 보냈다.
                        //리액트 네이티브는 Linking 컴포넌트를 제공하여 웹 브라우저를 연다
                        Linking.openURL('https://dev-yakuza.github.io/ko/')
                    }}>
                    비밀번호 재설정
                </PasswordReset>
            </FormContainer>
        </Container>
    )
}

export default Login