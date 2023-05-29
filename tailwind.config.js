/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile-image": "url('https://media.licdn.com/dms/image/D4E03AQEMk9IqOqKpww/profile-displayphoto-shrink_800_800/0/1684892045691?e=1690416000&v=beta&t=FkNRSmDFYOuxedxIPXkVAIbEl471-pR9GIeXLw9hA3I')",
      },
      colors: {
        offwhite: "#e9ded6",
        leafgreen: "#3f515a",
        charcoal: "#333",
      }
    },
  },
  plugins: [],
}

