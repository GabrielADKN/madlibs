function generateRandomStory({ noun, noun2, adjective, color }) {
    const stories = [
        `There was a ${adjective} ${noun} and a ${noun2} that was ${color}.`,
        `Once upon a time, there lived a ${adjective} ${noun} who befriended a ${color} ${noun2}.`,
        `In a land far away, there dwelled a ${noun} known for its ${adjective} nature. One day, it met a ${color} ${noun2}.`,
        `Long ago, there existed a ${noun} and a ${color} ${adjective} ${noun2} who embarked on an extraordinary journey together.`,
        `Amidst the vast wilderness, a ${adjective} ${noun} crossed paths with a ${noun2} as ${color} as the sky.`,
        `Legend has it, a ${color} ${noun2} once crossed paths with a ${adjective} ${noun} under the moonlit sky.`,
        `Deep within the enchanted forest, there resided a ${adjective} ${noun} and its faithful companion, a ${noun2} of ${color} hue.`,
        `Once in a kingdom of ${color} skies, there lived a ${adjective} ${noun} whose best friend was a ${noun2} of unmatched loyalty.`,
        `Among the rolling hills, a ${color} ${noun2} stumbled upon a ${adjective} ${noun} with a heart as vast as the ocean.`,
        `In the heart of the city, a ${noun} of ${color} met a ${adjective} ${noun2} with eyes as bright as the sun.`,
        `Beyond the horizon, a ${adjective} ${noun} discovered a ${noun2} whose fur was as soft as ${color} silk.`,
        `In the realm of dreams, a ${adjective} ${noun} danced with a ${color} ${noun2} under the shimmering stars.`,
        `Underneath the ancient tree, a ${noun} and a ${noun2} of ${color} hue shared secrets known only to them.`,
        `In a world of magic, a ${color} ${noun2} sought wisdom from a ${adjective} ${noun} who held the key to all mysteries.`,
        `In the realm of possibilities, a ${adjective} ${noun} embarked on a quest with a ${color} ${noun2} as their guide.`,
    ];

    const randomIndex = Math.floor(Math.random() * stories.length);
    return stories[randomIndex];
}

export { generateRandomStory }