/** @type {import('tailwindcss').Config} */
import { gray, indigo } from "tailwindcss/colors"

export const content = [
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
    "./src/app/**/components/**/*.tsx",
]
export const theme = {
    extend: {
        colors: {
            primary: gray,
            accent: indigo,
        },
    },
}
export const plugins = []
