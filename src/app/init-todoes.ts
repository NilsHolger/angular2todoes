export class Init {


    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined) {
            console.log('No todos found ... Creating ...');
            var todoes = [
                { text: 'Build a cool new web app.' },
                { text: 'Take over the world.' },
                { text: 'Run a marathon.' },
                { text: 'Have fun and enjoy yourself.' },
                { text: 'Enjoy life to the max' },
                { text: 'Code all the time with passion.' },
                { text: 'Improve, improve, improve!!!' },
                { text: 'Think big, think positive.'}
            ];

            localStorage.setItem('todos', JSON.stringify(todoes));
            return;
        } else {
            console.log('Found todoes');
        }
    }
}