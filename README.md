# react-native-movie-clone-app

react-native의 스플래쉬와 아이콘 설정, 네비게이션에 관해 공부하기 위해 만든 클론 앱입니다.  

- 아이콘, 스플래쉬 설정 라이브러리
    해당 라이브러리를 설치한 다음 react-native cli 명령어 set을 통해, 아이콘 및 스플래쉬 설정이 가능합니다.  
    단, ios의 경우에는 별도의 작업이 필요합니다.  
    ```
    @bam.tech/react-native-make
    ```
    
- 스플래쉬 스크린 이미지 다루기
    아이콘은 별도의 라이브러리 없이 위의 라이브러리를 통해 추가가 가능하지만, splash는 다음의 라이브러리가 필요하다.  
    ```
    react-native-splash-screen
    ```

- 네비게이션
    기본적으로 네비게이션을 사용하기 위한 라이브러리  
    ```
    @react-navigation/native
    react-native-reanimated
    react-native-gesture-handler
    react-native-screens
    react-native-safe-area-context
    @react-native-community/masked-view
    ```
    Stack Navigation 만을 사용할 때의 라이브러리  
    ```
    @react-navigation/stack
    ```
    drawer, bottom-tabs 사용을 원할 경우  
    ```
    @react-navigation/drawer
    @react-navigation/bottom-tabs
    ```
    Material bottom-tabs를 원할 경우  
    ```
    @react-navigation/material-bottom-tabs
    react-native-paper
    ```
    Material Top Tab Navigation을 원할 경우
    ```
    @react-navigation/material-top-tabs
    react-native-tab-view
    ```