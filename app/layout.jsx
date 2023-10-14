import "@styles/globals.css"
import Nav from '@components/Nav'

export const metadata = {
    title: "AI-Prompt",
    description: "Discover and share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"></div>
            </div>

            <main className="app">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout