import { useMemo, useState } from "react";
import "./App.css";

export function App() {
    const [theme, setTheme] = useState<"night" | "sunset">("night");
    const [ideaIndex, setIdeaIndex] = useState(0);
    const [wowLevel, setWowLevel] = useState(82);

    const conceptStack = useMemo(
        () => [
            "AI Storyboarder + AR Street Art + Real-time Crowd Voting",
            "Voice DJ + Biofeedback Lights + Multiplayer Beat Battles",
            "Eco Quest Game + Local Recycling Rewards + Live Impact Map",
            "Travel Buddy + Instant Translation + Offline Adventure Planner",
        ],
        [],
    );

    return (
        <main className={`app app--${theme}`}>
            <section className="hero">
                <p className="hero__badge">Hackathon Grand Finale Mode</p>
                <h1>Neon Nexus: Build Tomorrow in 48 Hours</h1>
                <p className="hero__subtitle">
                    Design. Prototype. Pitch. Turn one brave idea into the
                    project everyone remembers.
                </p>
                <div className="hero__actions">
                    <button
                        className="button button--primary"
                        onClick={() =>
                            setIdeaIndex(
                                (current) => (current + 1) % conceptStack.length,
                            )
                        }
                    >
                        Forge Next Idea
                    </button>
                    <button
                        className="button button--ghost"
                        onClick={() =>
                            setTheme((current) =>
                                current === "night" ? "sunset" : "night",
                            )
                        }
                    >
                        Activate{" "}
                        {theme === "night" ? "Sunset Glow" : "Neon Night"}
                    </button>
                </div>
            </section>

            <section className="panel">
                <h2>Live Concept Generator</h2>
                <p className="panel__concept">{conceptStack[ideaIndex]}</p>
                <label htmlFor="wow-level">Audience wow meter: {wowLevel}%</label>
                <input
                    id="wow-level"
                    type="range"
                    min={50}
                    max={100}
                    value={wowLevel}
                    onChange={(event) => setWowLevel(Number(event.target.value))}
                />
            </section>

            <section className="panel panel--grid">
                <article>
                    <h3>Lightning Roadmap</h3>
                    <p>Hour 1: validate problem • Hour 12: demo MVP • Hour 48: win.</p>
                </article>
                <article>
                    <h3>Pitch Hooks</h3>
                    <p>
                        Start with a human story, reveal the magic moment, close with
                        measurable impact.
                    </p>
                </article>
                <article>
                    <h3>Final project template</h3>
                    <p>
                        This project now ships with a launch-ready, hackathon-style
                        experience.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default App;
