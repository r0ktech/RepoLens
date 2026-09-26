import './globals.css';

export const metadata = {
  title: 'RepoLens',
  description: 'Understand any codebase. Ask it anything.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
