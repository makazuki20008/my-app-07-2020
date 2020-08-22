// 1
function gretting1(message) {
    return alert(`${message} everyone!`);
}
gretting1('Good morning');

// 2
let gretting2 = message => alert(`${message} everyone!`);

gretting2('Good morning');

// 3
let createBlog = (title, body) => {
    if (!title) {
        throw new Error('A title is required');
    }

    if (!body) {
        throw new Error('Body cant be empty');
    }

    return alert`${title} - ${body}`;
};

createBlog('Blog title', 'Blog body');