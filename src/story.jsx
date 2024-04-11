import { generateRandomStory } from "./storyUtilities";

export default function Story({ noun, noun2, adjective, color }) {
    const story = generateRandomStory({ noun, noun2, adjective, color });
    return <p>{story}</p>;
}