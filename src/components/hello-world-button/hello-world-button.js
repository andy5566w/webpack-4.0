import './hello-world-button.scss';
class HelloWorldButton {
    btn_css = 'hello-world-text';
    render(){
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'Hello World';
        
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'hello world';
            // p.classList.add('hello-world-text');
            console.log('in',this.btn_css);
            
            p.classList.add(this.btn_css);
            body.appendChild(p);
        }
        button.classList.add('hello-world-button');
        body.appendChild(button);
    }
}

export default HelloWorldButton;