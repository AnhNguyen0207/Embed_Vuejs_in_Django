const Button = {
    template: `<div>
                <button @click="test">Click o day</button>
               </div>`,
    delimiters: ['[[', ']]'],
    methods: {
        test () {
            alert('da bam click o day')
        }
    }

}

export default Button;