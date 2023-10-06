const Home = {
    template: `
            <div>
                <h1>[[ mes ]]</h1>
                <router-link :to="\`members\`"> Bấm vào đây </router-link>
            </div>
`,
    name: 'Home',
    delimiters: ['[[', ']]'],
    data() {
        return {
            mes: 'xin chào'
        };
    },
};
export default Home;

