function monkeyPatcher(command) {

    let commands = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes++;
        },
        score: () => {
            let crntUpVotes = this.upvotes;
            let crntDownVotes = this.downvotes;
            let totalScore = crntUpVotes - crntDownVotes;
            let rating = 'new';

            let totalVotes = this.upvotes + this.downvotes;
            let newPost = totalVotes < 10;

            if (!newPost) {
                updateRating();
            }
            if (totalVotes > 50) {
                obfuscatePost();
            }
            return `[${crntUpVotes}, ${crntDownVotes}, ${totalScore}, ${rating}]`;

            function updateRating() {
                if (crntUpVotes > totalVotes * 0.66) {
                    rating = 'hot';
                } else if (totalScore >= 0 && crntUpVotes > 100 && crntDownVotes > 100) {
                    rating = 'controversial';
                } else if (totalScore < 0) {
                    rating = 'unpopular';
                }
            }

            function obfuscatePost() {

            }
        }
    };

    return commands[command]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);

for (let i = 0; i < 50; i++) {
    monkeyPatcher.call(post, 'downvote');
}
// (executed 50 times)
score = monkeyPatcher.call(post, 'score'); // [139, 189, -50, 'unpopular']
console.log(score);