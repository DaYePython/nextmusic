import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'
import animationsPlugin from '@windicss/animations'
import scrollBarPlugin from '@windicss/plugin-scrollbar'
import questionMarkPlugin from '@windicss/plugin-question-mark'
export default defineConfig({
    darkMode: "class",
    attributify: true,
    plugins: [
        formsPlugin,
        scrollSnapPlugin,
        scrollBarPlugin,
        questionMarkPlugin,
        animationsPlugin({
            settings: {
                animatedSpeed: 1000,
                heartBeatSpeed: 1000,
                hingeSpeed: 2000,
                bounceInSpeed: 750,
                bounceOutSpeed: 750,
                animationDelaySpeed: 1000,
            }
        },
        )
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["-apple-system", "BlinkMacSystemFont", 'Helvetica Neue', "Helvetica", "Segoe UI", "Arial", "Roboto", 'PingFang SC', "miui", 'Hiragino Sans GB', 'Microsoft Yahei', "sans-serif"],
            }
        }
    }
})