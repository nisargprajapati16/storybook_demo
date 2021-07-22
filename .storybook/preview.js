import Center from "../src/components/Center/Center"
import '../src/assets/fomantic/dist/semantic.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Center>
      <Story />
    </Center>
  ),
];