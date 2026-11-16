/** @type {import('tailwindcss').Config} */
module.exports = {
    blocklist: ["overline"],
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./index.html"],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
                popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
                primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
                secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
                muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
                accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
                destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                blush: { DEFAULT: "#FAF1EF", soft: "#F5E4E1", card: "#FFF9F7", deep: "#EFD6D0" },
                rose: { DEFAULT: "#B76E79", bright: "#DCA9A0", dark: "#8E5A5F", mist: "#E5BFC0" },
                champagne: "#FAF5EF",
                ink: { DEFAULT: "#33202B", soft: "#4F3543", mute: "#8A6E7D" },
                plum: "#241318",
                wa: "#25D366",
            },
            fontFamily: {
                display: ["Fraunces", "Georgia", "serif"],
                body: ["Jost", "sans-serif"],
                hindi: ['"Rozha One"', "serif"],
            },
            keyframes: {
                floaty: {
                    "0%,100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            animation: {
                floaty: "floaty 6s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
