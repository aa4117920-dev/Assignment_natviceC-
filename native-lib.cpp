#include <jni.h>
#include <string>

extern "C" JNIEXPORT jstring JNICALL
Java_com_example_tevta_std_ilt_MainActivity_stringFromJNI(
        JNIEnv* env,
        jobject /* this */) {
    
    // Sirf testing ke liye aik rangeen string
    std::string test_message = "<font color='#00FF00'><b>SUCCESS!</b></font><br>"
                               "<font color='#FF0000'>Native C++ is Working.</font><br>"
                               "<font color='#FFFF00'><i>Testing HTML Colors...</i></font>";

    return env->NewStringUTF(test_message.c_str());
}
