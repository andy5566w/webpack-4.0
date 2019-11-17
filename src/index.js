import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import Heading from './components/heading/header.js'

const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton('hello-world-text');
helloWorldButton.render();

if(process.env.NODE_ENV === 'production'){
    console.log('Production mode');
} else if(process.env.NODE_ENV === 'development'){
    console.log('Development mode');
}
helloWorldButton.sss();