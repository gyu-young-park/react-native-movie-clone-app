package com.firstapp;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // SplashScreen.show(this, R.style.SplashScreenTheme);
        //true로 바꾸어주는 이유는 이렇게 해야 안드로이드에서 전체화면으로 나오기 때문이다.
        SplashScreen.show(this, true);
        super.onCreate(savedInstanceState);
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "FirstApp";
  }
}
