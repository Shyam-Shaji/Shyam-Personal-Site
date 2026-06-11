import { ThemeProvider } from "./context/theme-provider";
import { SmoothScroll } from "./components/SmoothScroll";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <main className="min-h-screen bg-background text-foreground">
          <Nav />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </SmoothScroll>
      <Toaster
        position="bottom-right"
        richColors
        closeButton
        toastOptions={{
          style: { fontFamily: "inherit" },
          duration: 5000,
        }}
      />
    </ThemeProvider>
  );
}

export default App;