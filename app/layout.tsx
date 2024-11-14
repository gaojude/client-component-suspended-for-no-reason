import { ThemeProvider } from "next-themes";

export default function DynamicRootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  const { children } = props;

  return (
    <html
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
