import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { App } from "../src/App";

test("App component displays hackathon hero", () => {
    render(<App />);

    const heading = screen.getByText(/Neon Nexus: Build Tomorrow in 48 Hours/i);

    expect(heading).toBeInTheDocument();
});

test("Concept generator cycles to next idea", async () => {
    render(<App />);

    expect(
        screen.getByText(
            /AI Storyboarder \+ AR Street Art \+ Real-time Crowd Voting/i,
        ),
    ).toBeInTheDocument();

    await userEvent.click(
        screen.getByRole("button", { name: /Forge Next Idea/i }),
    );

    expect(
        screen.getByText(
            /Voice DJ \+ Biofeedback Lights \+ Multiplayer Beat Battles/i,
        ),
    ).toBeInTheDocument();
});
